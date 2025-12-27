export async function getUser(username: string) {
  const res = await fetch(`https://api.github.com/users/${username}`);
  if (!res.ok) throw new Error("User not found");
  return res.json();
}

export async function getRepos(username: string) {
  const res = await fetch(`https://api.github.com/users/${username}/repos`);
  if (!res.ok) throw new Error("Repos not found");
  return res.json();
}
