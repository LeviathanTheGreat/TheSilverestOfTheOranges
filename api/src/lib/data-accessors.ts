import localRepoData from '../../data/repos.json'
import { Repo } from '../models/Repo'
import { areValidRepos } from './data-validators'
import axios from 'axios'

function getLocalRepos(): Repo[] {
    return localRepoData
}


export function getNonForkedRepos(repos: Repo[]) {
    const nonForkedRepos = []
    for (let repo of repos) {
        if (repo.fork === false)
            nonForkedRepos.push(repo)
    }
    return nonForkedRepos
}
function getGithubRepos(): Promise<Repo[]> {

    return axios.get('https://api.github.com/users/silverorange/repos')
        .then((res) => {
            const repos = res.data as Repo[]
            return repos
        })
        .catch((error) => {
            console.error(new ReferenceError('failed to fetch repos from github'))
            return new Array<Repo>()
        })

   
}


export async function getAllRepos(): Promise< Repo[] | TypeError > {

    // conbine the results of the two data sources
    const aggregatedRepoData = [
        ...getLocalRepos(),
        ...(await getGithubRepos()),
    ]

    // data validation
    const validationRes = areValidRepos(aggregatedRepoData)
    if (!validationRes)
        return new TypeError('an error occured while processing')

    // filtering 
    const filteredRepos = getNonForkedRepos(aggregatedRepoData)  

    return filteredRepos
}