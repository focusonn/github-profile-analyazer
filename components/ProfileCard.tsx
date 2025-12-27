interface ProfileCardProps {
  avatar_url: string;
  name: string | null;
  login: string;
  bio: string | null;
  html_url: string;
}

export default function ProfileCard({ avatar_url, name, login, bio, html_url }: ProfileCardProps) {
  return (
    <div className="mt-6 w-full max-w-xl bg-white p-6 rounded shadow flex items-center space-x-6">
      <img src={avatar_url} alt={login} className="w-20 h-20 rounded-full" />
      <div className="flex-1">
        <h2 className="text-xl font-bold">
          <a
            href={html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline text-blue-600"
          >
            {name || login}
          </a>
        </h2>
        <p className="text-gray-600">{bio || "No bio available"}</p>
      </div>
    </div>
  );
}
