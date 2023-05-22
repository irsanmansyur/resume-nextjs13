import { ParsedUrlQuery } from 'querystring';

export function parseUrlQuery<T>(url: string): T | ParsedUrlQuery {
  const queryParams: { [key: string]: string } = {};

  // Regex pattern untuk mencocokkan query parameter
  const pattern = /[?&]([^=#]+)=([^&#]*)/g;

  let match;
  while ((match = pattern.exec(url)) !== null) {
    const key = decodeURIComponent(match[1]);
    const value = decodeURIComponent(match[2]);
    queryParams[key] = value;
  }
  return queryParams;
}
