import path from "path";
import fs from "fs/promises";
import Head from "next/head";
import Link from "next/link";
import matter from "gray-matter";
import remarkParse from "remark-parse";
import remarkHtml from "remark-html";
import rehypeRaw from "rehype-raw";
import CustomLink from "@/utils/helper/customLink";
import { motion } from "framer-motion";
import { fadeIn } from "@/utils/animations";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { postsDir } from "@/utils/helper/mdxUtils";
import styles from "@/styles/scss/modules/blogPost.module.scss";

const components = {
  a: CustomLink,
};

export default function BlogPost({ source, frontMatter }) {
  return (
    <motion.div
      className={`${styles.blogPost}`}
      variants={fadeIn}
      initial="init"
      animate="anim"
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <div
        className="d-flex flex-column align-items-start position-relative"
        style={{
          top: 100,
          margin: "50px",
          padding: "3rem",
          border: "2px solid white",
        }}
      >
        <Link href="/blog">back</Link>
        <Head>
          <title>{frontMatter.title}</title>
        </Head>
        <h1 className="postTitle">{frontMatter.title}</h1>
        {frontMatter.alt && (
          <span className="postAltText">{frontMatter.alt}</span>
        )}
        <br />
        {frontMatter.date && (
          <span className="publishDate">{frontMatter.date}</span>
        )}

        <main>
          <MDXRemote {...source} components={components} />
        </main>
      </div>
    </motion.div>
  );
}

export async function getStaticProps({ params }) {
  const postFilePath = path.join(postsDir, `${params.slug}.mdx`);
  const source = await fs.readFile(postFilePath);

  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [remarkParse, remarkHtml],
      rehypePlugins: [rehypeRaw],
    },
    scope: data,
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
}

export async function getStaticPaths() {
  const postFilePaths = await fs.readdir(postsDir);

  const paths = postFilePaths
    .filter((filename) => !filename.endsWith(".jsx"))
    .map((filename) => filename.replace(/\.mdx?$/, ""))
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
}
