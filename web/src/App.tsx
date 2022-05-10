import { useEffect, useState } from 'react';


import './App.css';
import RepoTable from './components/RepoTable/RepoTable';
import { Repo } from './lib/types/Repo';
import { getRepos } from './lib/data-fetching';

export function App() {
    const [repos, setRepos] = useState<Repo[]>([])
    useEffect(() => {
        getRepos()
            .then((fetchedRepos: Repo[]) => {
                setRepos(fetchedRepos)
            })
            .catch(err => {
                // we'll error handle gracefully later
            })
    })

    return (
        <div className="App">
            <h1>dsfsfsdfs</h1>
            <RepoTable repos={repos}></RepoTable>
        </div>
    );
}
