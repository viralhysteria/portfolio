import fs from "fs";
import path from "path";
import matter from "gray-matter";
import {remark} from "remark";
import html from "remark-html";
import Layout from "@/app/layout";

export default function BlogPost({ frontmatter, content }) {
  return (
    <Layout>
      <article>
        <h1>{frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  const postsDirectory = path.join(process.cwd(), "src/pages/blog/posts");
  const files = fs.readdirSync(postsDirectory);
  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const postFilePath = path.join("src/pages/blog/posts", `${params.slug}.md`);
  const source = fs.readFileSync(postFilePath, "utf8");
  const { data, content } = matter(source);

  const processedContent = await remark().use(html).process(content);
  const contentHtml = processedContent.toString();

  return {
    props: {
      frontmatter: data,
      content: contentHtml,
    },
  };
}
