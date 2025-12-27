"use client";

import { useState } from "react";
import Loader from "../components/Loader";
import RepoList from "../components/RepoList";
import Search from "../components/Search";
import ProfileCard from "../components/ProfileCard";
import { getUser, getRepos } from "../services/githubApi";

export default function Page() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState<any>(null);
  const [repos, setRepos] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (name: string) => {
    setLoading(true);
    setError("");
    setUser(null);
    setRepos([]);
    try {
      const userData = await getUser(name);
      const reposData = await getRepos(name);
      setUser(userData);
      setRepos(reposData);
    } catch (err: any) {
      setError("User not found");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-start p-8 bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">GitHub Profile Analyzer</h1>
      <Search username={username} setUsername={setUsername} onSearch={handleSearch} />
      {loading && <Loader />}
      {error && <p className="text-red-500 mt-4">{error}</p>}
      {user && (
        <>
          <ProfileCard
            avatar_url={user.avatar_url}
            name={user.name}
            login={user.login}
            bio={user.bio}
            html_url={user.html_url}
          />
          <RepoList repos={repos} />
        </>
      )}
    </main>
  );
}
