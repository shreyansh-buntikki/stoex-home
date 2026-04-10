const DEFAULT_S3_URL = 'https://dev-stoex-uae-website.s3.me-central-1.amazonaws.com/public+3';

export const S3_BASE_URL = process.env.NEXT_PUBLIC_S3_BASE_URL || DEFAULT_S3_URL;

export function getImageUrl(path: string): string {
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${S3_BASE_URL}/${cleanPath}`;
}
