// utils/getRepositories.ts

import { Octokit, RequestError } from 'octokit';

const getRepositories = async (username: string) => {
  const octokit = new Octokit({
    auth: process.env.NEXT_PUBLIC_GITHUB_TOKEN,
  });

  try {
    const repositories = await octokit.request('GET /users/{username}/repos', {
      username: username,
    });

    // Create an array to store the promises for fetching languages for each repo
    const languagePromises = repositories.data.map(async (repo: any) => {
      const response = await octokit.request('GET /repos/{owner}/{repo}/languages', {
        owner: username,
        repo: repo.name,
      });

      return { ...repo, languages: response.data };
    });

    // Wait for all promises to resolve and get the final result
    const repositoriesWithLanguages = await Promise.all(languagePromises);

    return repositoriesWithLanguages;
  } catch (error) {
    if (error instanceof RequestError) {
      console.error('Error fetching repositories:', error.message);
      return [];
    } else {
      // Handle all other errors
      throw error;
    }
  }
};

export default getRepositories;
