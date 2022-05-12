import type { FC } from 'react';
import type { Repo } from '../../lib/types/Repo';

interface Props {
  repo: Repo;
}

const RepoDetailsPanel: FC<Props> = (props) => {
  const { repo } = props;

  return (
    <dl className="w-[90%] sm:w-[60%] grid grid-cols-1 md:grid-cols-3">
      <div className="w-full md:mx-2 my-8 text-2xl shadow-md border border-gray-500 rounded-md px-4 pt-6 pb-12 ">
        <dt className="mb-16 font-bold">Description</dt>
        <dd className=" text-4xl text-center">{repo.description || <i className='font-light '>N/A</i> }</dd>
      </div>
      <div className="w-full md:mx-2 my-8 text-2xl shadow-md border border-gray-500 rounded-md px-4 pt-6 pb-12 ">
        <dt className="mb-16 font-bold">Language</dt>
        <dd className=" text-4xl text-center">{repo.language}</dd>
      </div>
      <div className="w-full md:mx-2 my-8 text-2xl shadow-md border border-gray-500 rounded-md px-4 pt-6 pb-12 ">
        <dt className="mb-16 font-bold ">Forks</dt>
        <dd className=" text-4xl text-center">{repo.forks_count}</dd>
      </div>
    </dl>
  );
};

export default RepoDetailsPanel;
