import { RequestHandler } from "express";
import fetch from "node-fetch";

export const handleGitHubRepos: RequestHandler = async (req, res) => {
  try {
    const username = req.query.username || "widgetwalker";
    const url = `https://api.github.com/users/${encodeURIComponent(username as string)}/repos?per_page=100&sort=updated`;
    const response = await fetch(url, {
      headers: {
        Accept: "application/vnd.github.v3+json",
        // You can add a GitHub token via env var to increase rate limits: Authorization: `token ${process.env.GITHUB_TOKEN}`
        ...(process.env.GITHUB_TOKEN ? { Authorization: `token ${process.env.GITHUB_TOKEN}` } : {}),
      },
      // no signal here; let server handle timing
    });

    const data = await response.json();
    res.status(response.status).json(data);
  } catch (e: any) {
    console.error("GitHub proxy error:", e);
    res.status(500).json({ message: "Failed to fetch from GitHub" });
  }
};
