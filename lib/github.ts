import { Octokit } from "octokit";
const octokit = new Octokit();

export const getPublicRepos = async () => {
  return await octokit.rest.repos.listPublic();
};
