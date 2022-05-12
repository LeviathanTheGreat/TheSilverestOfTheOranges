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
    if (id === undefined || /^\d+$/.test(id) === false)
        selectedRepo = null
    else {
        const idInt = parseInt(id)
        selectedRepo = getRepoById(idInt, repos)
    }

    return (
        <div className="w-full max-w-40rem min-h-[100vh] bg-[#e2e2e2] flex flex-col justify-center items-center">
            <header className="mr-[19rem] mb-8 flex flex-col">
                <h1 className="text-4xl mb-2 font-bold">{selectedRepo?.name || "Repo Not Found"}</h1>
                <div className='flex'>
                    <img src="/silver-orange-logo.png" className='w-8 mr-2' alt="silver orange logo" />
                    <h2 className="font-bold text-2xl">By Silver Orange</h2>
                </div>

            </header>
            {selectedRepo ? (
                <RepoDetailsPanel repo={selectedRepo} />
            ) : (
                <p className=''>There was an error while we were trying to find this repo 😕</p>
            )}

        </div>
    )
}

export default RepoDetailsPage