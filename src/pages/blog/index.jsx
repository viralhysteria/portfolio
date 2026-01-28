import fs from "fs";
import matter from "gray-matter";
import Image from "next/image";
import Link from "next/link";
import path from "path";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/animations";
import { postsDir, postFilePaths } from "@/utils/helper/mdxUtils";

export default function BlogIndex({ posts }) {
  return (
    <motion.div
      className="vw-100 d-flex flex-column align-items-center justify-content-center position-relative"
      style={{ top: 500 }}
      variants={fadeIn}
      initial="init"
      animate="anim"
      transition={{
        duration: 1,
        ease: "easeInOut",
      }}
    >
      <Link href="/" legacyBehavior>
        home
      </Link>
      <h1>blog index</h1>
      <ul className="list-group-flush">
        {posts
          .filter((post) => !post.filePath.startsWith("[slug]"))
          .map((post) => {
            const postSrc = `${post.filePath.replace(/\.mdx?$/, "")}`;
            return (
              <li key={post.filePath} className="list-group-item border-bottom">
                <Image
                  src={`/img/blog/${postSrc.concat(".png")}`}
                  alt="preview"
                  width="25"
                  height="25"
                />
                <Link href={`/blog/posts/[slug]`} as={`/blog/posts/${postSrc}`}>
                  {post.data.title}
                </Link>
              </li>
            );
          })}
      </ul>
    </motion.div>
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
