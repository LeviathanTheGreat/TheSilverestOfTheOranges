import { FC, useEffect, useState } from 'react';
import type { Repo } from '../../lib/types/Repo';
import { Link, useNavigate } from 'react-router-dom';
import FiltersPanel from './FiltersPanel';
import { getRepoLanguages } from '../../lib/data-filters';

interface Props {
  repos: Repo[];
}

const RepoTable: FC<Props> = (props) => {
  const { repos } = props;

  const navigate = useNavigate();

  console.log('repos: ', repos);
  const [currentRepos, setCurrentRepos] = useState<Repo[]>([]);

  const repoLanguages = getRepoLanguages(repos);

  return (
    <div>
      <FiltersPanel
        languageFilterOptions={repoLanguages}
        records={repos}
        setRecords={setCurrentRepos}
        className="mb-4"
      />
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Description
              </th>
              <th scope="col" className="px-6 py-3">
                Language
              </th>
              <th scope="col" className="px-6 py-3">
                <abbr title="Number">#</abbr> of Forks
              </th>
              <th scope="col" className="px-6 py-3">
                <span className="sr-only">View</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {currentRepos.map((repo) => (
              <tr
                onClick={() => {
                  navigate(`/repo/${repo.id}`);
                }}
                className="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700 hover:bg-orange-300 hover:cursor-pointer"
              >
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                >
                  {repo.name}
                </th>
                <td className="px-6 py-4">
                  {repo.description || (
                    <i className="font-light">no description found</i>
                  )}
                </td>
                <td className="px-6 py-4">{repo.language}</td>
                <td className="px-6 py-4">{repo.forks_count}</td>
                <td className="px-6 py-4 text-right">
                  <Link to={`/repo/${repo.id}`}>
                    <a className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                      View Repo
                    </a>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {repos.length === 0 ? (
          <div
            role="status"
            className="w-full px-4 py-2 border border-red-700 bg-white rounded-md shadow-inner shadow-red-400"
          >
            <p>Looks Like Something went wrong while loading the page😭</p>
            <p>Try reloading the page.</p>
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default RepoTable;
