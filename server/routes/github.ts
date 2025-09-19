import { RequestHandler } from "express";

export const handleGitHubRepos: RequestHandler = async (req, res) => {
  try {
    const username = req.query.username || "widgetwalker";
    const url = `https://api.github.com/users/${encodeURIComponent(username as string)}/repos?per_page=100&sort=updated`;
    const response = await fetch(url, {
      headers: {
        Accept: "application/vnd.github.v3+json",
        ...(process.env.GITHUB_TOKEN
          ? { Authorization: `token ${process.env.GITHUB_TOKEN}` }
          : {}),
      },
    });

    const data = await response.json();
    res.status(response.status).json(data);
  } catch (e: any) {
    console.error("GitHub proxy error:", e);
    res.status(500).json({ message: "Failed to fetch from GitHub" });
  }
};

export const handleGitHubRepoDetail: RequestHandler = async (req, res) => {
  try {
    const id = req.query.id as string | undefined;
    const username = (req.query.username as string) || "widgetwalker";
    const name = (req.query.name as string) || "";
    const url = id
      ? `https://api.github.com/repositories/${encodeURIComponent(id)}`
      : `https://api.github.com/repos/${encodeURIComponent(username)}/${encodeURIComponent(name)}`;
    const response = await fetch(url, {
      headers: {
        Accept: "application/vnd.github.v3+json",
        ...(process.env.GITHUB_TOKEN
          ? { Authorization: `token ${process.env.GITHUB_TOKEN}` }
          : {}),
      },
    });
    const data = await response.json();
    res.status(response.status).json(data);
  } catch (e: any) {
    console.error("GitHub detail proxy error:", e);
    res.status(500).json({ message: "Failed to fetch repo detail" });
  }
};
