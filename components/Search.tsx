"use client";

interface SearchProps {
  username: string;
  setUsername: (value: string) => void;
  onSearch: (username: string) => void;
}

export default function Search({ username, setUsername, onSearch }: SearchProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (username.trim()) onSearch(username.trim());
  };

  return (
    <form onSubmit={handleSubmit} className="flex space-x-2 w-full max-w-xl">
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="GitHub username"
        className="flex-1 p-2 border rounded"
      />
      <button type="submit" className="px-4 bg-blue-500 text-white rounded hover:bg-blue-600">
        Search
      </button>
    </form>
  );
}
