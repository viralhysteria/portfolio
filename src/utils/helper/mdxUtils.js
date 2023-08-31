import fs from 'fs';
import path from 'path';

export const postsDir = path.join(process.cwd(), 'src/pages/blog/posts/');
export const postFilePaths = fs
  .readdirSync(postsDir)
  .filter((filename) => /\.mdx?$/.test(filename));