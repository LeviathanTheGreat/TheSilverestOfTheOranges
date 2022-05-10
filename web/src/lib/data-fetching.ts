import { Repo } from "./types/Repo";

export async function getRepos(): Promise<Repo[]> {
    return fetch('http://localhost:4000/repos', {
        mode:'cors',
        headers: {
            'Content-Type': 'application/json'
        },
    }).then(response => response.json())
}

