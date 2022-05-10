import type { FC } from 'react'
import { useParams } from 'react-router-dom'
import { getRepoById } from '../../lib/data-filters'
import { Repo } from '../../lib/types/Repo'
import RepoDetailsPanel from '../RepoDetailsPanel/RepoDetailsPanel'

interface Props {
    repos: Repo[]
}

const RepoDetailsPage: FC<Props> = (props) => {
    const { repos } = props
    let selectedRepo

    let { id } = useParams()
    // verifies that id is a string that contain an integer value 
    if(id === undefined || /^\d+$/.test(id) )
        selectedRepo = null 
    else {
        const idInt = parseInt(id)    
        selectedRepo = getRepoById(idInt, repos) 
    }
        
    return (
        <div className="App w-full max-w-40rem bg-[#e2e2e2]">
            <header className="mr-[19rem] mb-8 flex">
                <h1 className="text-2xl">{selectedRepo?.name}</h1>
                <img src="/silver-orange-logo.png" className='w-8 mr-2' alt="silver orange logo" />
                <h2 className="font-bold text-2xl">By Silver Orange</h2>
            </header>
            {selectedRepo ? (
                <RepoDetailsPanel repo={selectedRepo} />
            ) : (
                <p className=''>There was an error finding this repo :(</p>       
            )}
            
        </div>
    )
}

export default RepoDetailsPage