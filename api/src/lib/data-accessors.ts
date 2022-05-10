import localRepoData from '../../data/repos.json'
import { Repo } from '../models/Repo'
import { areValidRepos } from './data-validators'
import axios from 'axios'

function getLocalRepos(): Repo[] {
    return localRepoData
}

function getGithubRepos(): Promise<Repo[]> {

    return axios.get('https://api.github.com/users/silverorange/repos')
        .then((res) => {
            return res.data as Repo[]
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

    return aggregatedRepoData
}