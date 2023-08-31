import path from "path";
import fs from "fs/promises";
import Head from "next/head";
import Link from "next/link";
import matter from "gray-matter";
import CustomLink from "@/utils/helper/customLink";
import { MDXRemote } from "next-mdx-remote";
import { serialize } from "next-mdx-remote/serialize";
import { postsDir } from "@/utils/helper/mdxUtils";

const components = {
  a: CustomLink,
};

export default function BlogPost({ source, frontMatter }) {
  return (
    <div
      className="d-flex flex-column align-items-start position-relative"
      style={{ top: 100, margin: "50px", padding: "3rem", border: "2px solid white"}}
    >
      <style jsx>
        {`
        
        `}
      </style>
      <Head>
        <title>{frontMatter.title}</title>
      </Head>
      <Link href="/blog" legacyBehavior>
        <a>Return</a>
      </Link>
      <div>
        <h1 className="blogPostTitle">{frontMatter.title}</h1>
        {frontMatter.alt && <span>{frontMatter.alt}</span>}
        <br />
        {frontMatter.date && <span>{frontMatter.date}</span>}
      </div>
      <main>
        <MDXRemote {...source} components={components} />
      </main>

      <style jsx>{``}</style>
    </div>
  );
}

export async function getStaticProps({ params }) {
  const postFilePath = path.join(postsDir, `${params.slug}.mdx`);
  const source = await fs.readFile(postFilePath);

  const { content, data } = matter(source);

  const mdxSource = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
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
    .filter((filename) => !filename.endsWith('.jsx'))
    .map((filename) => filename.replace(/\.mdx?$/, ''))
    .map((slug) => ({ params: { slug } }));

  return {
    paths,
    fallback: false,
  };
}