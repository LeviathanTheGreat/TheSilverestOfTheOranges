import { Repo } from "./types/Repo";

export async function getRepos(): Promise<Repo[]> {
    return fetch('localhost:4000/repos', {
        headers: {
            'Content-Type': 'application/json'
        },
    }).then(response => response.json())
}