import { GitHubUser } from "types";

export const isGitHubUser = (user: any): user is GitHubUser => 'id' in user 