import { Octokit } from '@octokit/rest';

const octokit = new Octokit({
  auth: process.env.GITHUB_TOKEN
});

export interface GitHubRepo {
  name: string;
  description: string | null;
  html_url: string;
  topics: string[];
  language: string | null;
  stargazers_count: number;
  updated_at: string;
}

export async function getRepositories(username: string): Promise<GitHubRepo[]> {
  try {
    const response = await octokit.repos.listForUser({
      username,
      sort: 'updated',
      direction: 'desc',
    });
    
    return response.data
      .filter(repo => 
        repo.description && 
        repo.description.trim() !== '' && 
        repo.name !== 'Joel04kayy'
      )
      .map(repo => ({
        name: repo.name,
        description: repo.description,
        html_url: repo.html_url,
        topics: repo.topics || [],
        language: repo.language,
        stargazers_count: repo.stargazers_count,
        updated_at: repo.updated_at,
      }));
  } catch (error) {
    console.error('Error fetching GitHub repositories:', error);
    return [];
  }
} 