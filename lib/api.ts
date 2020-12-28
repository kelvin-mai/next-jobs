// See jobs.github.com/api for DOCs
export const API_URL = 'https://jobs.github.com/positions';

export interface GithubJob {
  id: string;
  type: string;
  url: string;
  created_at: string;
  company: string;
  company_url: string;
  location: string;
  title: string;
  description: string;
  how_to_apply: string;
  company_logo: string;
}

export enum GithubJobParams {
  description = 'description',
  location = 'location',
  lat = 'lat',
  long = 'long',
  fullTime = 'full_time',
}
