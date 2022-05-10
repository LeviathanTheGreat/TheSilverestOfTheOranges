import { FC, useState } from 'react'
import { Repo } from '../../lib/types/Repo'
import FiltersPanel from '../RepoTable/FiltersPanel'
import RepoTable from '../RepoTable/RepoTable'

interface Props {
    repos: Repo[]
    fetchError?: Error | undefined 
}

const IndexPage: FC<Props> = (props) => {
    const { repos, fetchError } = props
    return (
        <div className="App px-5 bg-[#e2e2e2]">
            <header className="mr-[19rem] mb-8 flex ">
                <img src="/silver-orange-logo.png" className='w-8 mr-2' alt="silver orange logo" />
                <h1 className="font-bold text-2xl">Silver Orange Repos</h1>
            </header>
            <RepoTable repos={repos}></RepoTable>
            { fetchError ? 
                <section className="" role="status" >
                    <h1>Whoops...</h1>
                    <p>{fetchError.message}</p>
                    <p>Try reloading the page</p>
                </section>
            : null}
        </div>
    )
}

export default IndexPage