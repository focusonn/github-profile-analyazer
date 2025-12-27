interface Repo {
  id: number;
  name: string;
  html_url: string;
  description: string;
}

interface RepoListProps {
  repos: Repo[];
}

export default function RepoList({ repos }: RepoListProps) {
  return (
    <div className="mt-4">
      <h3 className="font-bold mb-2">Repositories:</h3>
      {repos.length === 0 && <p>No repos found.</p>}
      <ul className="space-y-2">
        {repos.map((repo) => (
          <li key={repo.id}>
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              {repo.name}
            </a>
            {repo.description && <p className="text-gray-600">{repo.description}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
}
