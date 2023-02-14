export type LocalGitHubUser = {
    login: string,
    avatar: string,
    name: string,
    company: string | null;
    blog: string,
    location: string | null,
    bio: string,
    twitter: string | null,    
    repos: number,
    followers: number,
    following: number,
    created: string
} 

export type GitHubUser = {
    login: string,
    id: number,
    avatar_url: string,
    name: string,
    company: string | null;
    blog: string,
    location: string | null,
    bio: string,
    twitter_username: string | null,
    public_repos: number,
    followers: number,
    following: number,
    created_at: string
}

export type NonFoundUser = {
    message: string,
    documentationUrl: string
}
