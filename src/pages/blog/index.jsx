import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
import path from "path";
import { postsDir, postFilePaths } from "@/utils/helper/mdxUtils";

export default function BlogIndex({ posts }) {
  return (
    <div className="d-flex flex-column align-items-center position-relative" style={{top: 500}}>
      <Link href="/" legacyBehavior>
        home
      </Link>
      <h1>blog index</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.filePath}>
            <Link
              href={`/blog/posts/[slug]`}
              as={`/blog/posts/${post.filePath.replace(/\.mdx?$/, "")}`}
            >
              {post.data.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const posts = postFilePaths.map((filePath) => {
    const source = fs.readFileSync(path.join(postsDir, filePath));
    const { content, data } = matter(source);

    return {
      content,
      data,
      filePath,
    };
  });

  return { props: { posts } };
}