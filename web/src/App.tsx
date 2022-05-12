import { useEffect, useState } from 'react';


import './App.css';
import RepoTable from './components/RepoTable/RepoTable';
import { Repo } from './lib/types/Repo';
import { getRepos } from './lib/data-fetching';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import IndexPage from './components/IndexPage/IndexPage';
import RepoDetailsPage from './components/RepoDetailsPage/RepoDetailsPage';

export function App() {
    const [repos, setRepos] = useState<Repo[]>([])
    let fetchError: Error | undefined = undefined
    useEffect(() => {
        getRepos()
            .then((fetchedRepos: Repo[]) => {
                setRepos(fetchedRepos)
            })
            .catch(err => {
                fetchError = err
                setRepos([])
            })
        console.error(fetchError)
    }, [])

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<IndexPage fetchError={fetchError} repos={repos} />} />
                <Route path="/repo/:id" element={<RepoDetailsPage repos={repos} />} />
            </Routes>
        </BrowserRouter>
    );
}
