import { User } from './User';

export interface Repo {
  id: number;
  name: string;
  full_name: string;
  owner: User;
  private: boolean;
  html_url: string;
  description: string;
  fork: boolean;
  url: string;
  created_at: string;
  updated_at: string;
  pushed_at: string;
  git_url: string;
  ssh_url: string;
  clone_url: string;
  svn_url: string;
  homepage: string;
  size: number;
  stargazers_count: number;
  watchers_count: number;
  language: string;
  forks_count: number;
  forks: number;
  commits_url: string;
  default_branch: string;
}

export const interfaceRequiredPropNames = [
  'id',
  'name',
  'full_name',
  'owner',
  'private',
  'html_url',
  'description',
  'fork',
  'url',
  'created_at',
  'updated_at',
  'pushed_at',
  'git_url',
  'ssh_url',
  'clone_url',
  'svn_url',
  'homepage',
  'size',
  'stargazers_count',
  'watchers_count',
  'language',
  'forks_count',
  'forks',
  'commits_url',
  'default_branch',
];
