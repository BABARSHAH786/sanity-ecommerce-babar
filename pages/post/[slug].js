import {client} from "./../../src/sanity/lib/client"


export default function blog({ blog }) {
  return (
    <div>
      <h1>{blog.title}</h1>
      <span>{new Date(blog.publishedAt).toDateString()}</span>
    </div>
  );
}

export async function getStaticProps({ params }) {
  const query = `*[_type == "blog" && slug.current == $slug] {
    _id,
    title,
    publishedAt,
    'slug': slug.current,
    body
  }`;

  const options = { slug: params.slug };

  const blog = await client.fetch(query, options);

  return {
    props: { blog: blog[0] },
  };
}

export async function getStaticPaths() {
  const query = `*[_type == "blog"]{ 'slug': slug.current }`;

  const blogs = await client.fetch(query);

  const paths =
    blogs?.map((blog) => ({
      params: {
        slug: blog.slug,
      },
    })) || [];

  return {
    paths,
    fallback: false,
  };
}