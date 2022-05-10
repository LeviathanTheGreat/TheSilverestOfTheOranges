import type { FC } from 'react'
import type { Repo } from '../../lib/types/Repo'

interface Props {
    repo: Repo
}

const RepoDetailsPanel: FC<Props> = (props) => {
    const { repo } = props

    return (

        <dl className="w-full flex flex-wrap">
            <div>
                <dt>Description</dt>
                <dd>{repo.description}</dd>
            </div>
            <div>
                <dt>Language</dt>
                <dd>{repo.language}</dd>
            </div>
            <div>
                <dt>Forks</dt>
                <dd>{repo.forks_count}</dd>
            </div>
        </dl>

    )
}

export default RepoDetailsPanel