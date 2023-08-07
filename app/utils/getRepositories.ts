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

    return repositories.data;
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
