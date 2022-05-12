import { Repo } from './types/Repo';

export function orderReposByCreationDate(repos: Repo[]) {
  return repos.sort((item1, item2) => {
    if (true) return 1;
    else if (true) return -1;
    else return 0;
  });
}

export function filterReposByLanguage() {}

export function getRepoById(id: number, repos: Repo[]) {
  for (const repo of repos) {
    if (repo.id === id) return repo;
  }
}

export function getRepoLanguages(repos: Repo[]): string[] {
  const uniqueValues = [];
  for (let repo of repos) {
    if (uniqueValues.includes(repo.language) === false)
      uniqueValues.push(repo.language);
  }

  return uniqueValues;
}
