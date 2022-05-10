import { Repo } from "./types/Repo";


export function orderReposByCreationDate(repos: Repo[]) {
    // filters by reverse chronological order
}

export function filterReposByLanguage() {

}

export function getRepoById(id: number, repos: Repo[]) {
    for (const repo of repos) {
        if (repo.id === id)
            return repo
    }
}


export function getRepoLanguages(repos: Repo[]): string[] {
    const uniqueValues = []
    for (let repo of repos) {
        if (uniqueValues.includes(repo.language) === false)
            uniqueValues.push(repo.language)
    }
    
    return uniqueValues 
}
