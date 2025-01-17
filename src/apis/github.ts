import { API_ROUTES } from '@constants/api';
import type { APIErrorType } from '@constants/api-error';
import { APIError } from '@constants/api-error';

export async function getUserInfo(
  username: string,
  fetchOptions: RequestInit = {},
) {
  const response = await fetch(API_ROUTES.users.users(username), {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'appliction/vnd.github+json',
      ...fetchOptions.headers,
    },
    ...fetchOptions,
  });
  if (!response.ok) {
    const error: APIErrorType = await response.json();
    throw new APIError(error);
  }
  const data = await response.json();
  return data;
}

export async function getRepoLabels(
  owner: string,
  repo: string,
  fetchOptions: RequestInit = {},
) {
  return await fetch(API_ROUTES.repos.labels(owner, repo), {
    next: { revalidate: 60 },
    headers: {
      'Content-Type': 'application/json',
      Accept: 'appliction/vnd.github+json',
      ...fetchOptions.headers,
    },
    ...fetchOptions,
  }).then(data => data.json());
}

export async function getRepoIssues(
  owner: string,
  repo: string,
  page: number,
  per_page: number,
  fetchOptions: RequestInit = {},
) {
  return await fetch(API_ROUTES.repos.issues(owner, repo, page, per_page), {
    next: { revalidate: 60 },
    headers: {
      'Content-Type': 'application/json',
      Accept: 'appliction/vnd.github+json',
      ...fetchOptions.headers,
    },
    ...fetchOptions,
  }).then(data => data.json());
}

export async function getRepoIssue(
  owner: string,
  repo: string,
  issue_number: number,
  fetchOptions: RequestInit = {},
) {
  return await fetch(API_ROUTES.repos.issue(owner, repo, issue_number), {
    next: { revalidate: 60 },
    headers: {
      'Content-Type': 'application/json',
      Accept: 'appliction/vnd.github.raw+json',
      ...fetchOptions.headers,
    },
    ...fetchOptions,
  }).then(data => data.json());
}
