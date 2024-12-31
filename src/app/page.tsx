import BlogCard from "@/components/BlogCard";
import CommentSection from "@/components/Comment";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import TopSide from "@/components/TopSide";
import { client } from "@/sanity/lib/client";
// import Image from "next/image";

export const revalidate = 60; //seconds

export default async function Home() {
  const query = `*[_type=='post'] | order(_createdAt asc){
  
    summary,title,image,
      "slug":slug.current
  }`;

  const posts:Post[] = await client.fetch(query)
  // console.log(posts)

  return (
    <>
    <Nav />
    <TopSide />
    <main className="flex min-h-screen flex-col ">
    {/* <h2 className="text-2xl font-bold uppercase my-12 text-center text-dark dark:text-light sm:text-3xl lg:text-5xl ">
    Blogger creative
  </h2> */}
  {

  }
      <h2 className="text-2xl font-bold uppercase my-12 text-center text-dark dark:text-light sm:text-3xl lg:text-5xl ">
        Most Recent blogs
      </h2>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {
          posts.map((post:Post)=>(
            <BlogCard post={post} key={post.slug} />
          ))
        }

      </section>
      {/* **************comment section */}
      <CommentSection  />
      
    </main>
      <Footer />
    </>);
}



