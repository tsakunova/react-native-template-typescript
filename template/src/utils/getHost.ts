export const getHost = (url: string) => url.match(/^https?:\/\/[^#?\/]+/)?.[0];
