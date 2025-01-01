// import Image from "next/image";
// import { client } from "../../../sanity/lib/client";
// import { urlForImage } from "../../../sanity/lib/image";
// import { PortableText } from "@portabletext/react";
// // import { components } from "@/components/CustomComponent";

// export const revalidate = 5; //seconds




// export async function generateStaticParams() {
//   const query = `*[_type=='post']{
//     "slug":slug.current
//   }`;
//   const slugs = await client.fetch(query);
//   const slugRoutes = slugs.map((item:{slug:string})=>(
//     item.slug
//   ));
//   // console.log(slugRoutes)
//   return slugRoutes.map((slug:string)=>(
//     {slug}
//   ))
  
// }

// // To create static pages for dynamic routes
// export default async function page({params:{slug}}:{params:{slug:string}}) {

//   const query = `*[_type=='post' && slug.current=="${slug}"]{
//     title,summary,image,content,
//       // author->{bio,image,name}
//   }[0]`;
//   const post = await client.fetch(query);
//   // console.log(post);



//   return (
//     <article className="mt-12 mb-24 px-2 2xl:px-12 flex flex-col gap-y-8">

//       {/* Blog Title */}
//       <h1 className="text-xl xs:text-3xl lg:text-5xl font-bold text-dark dark:text-light">
//         {post.title}
//       </h1>

//       {/* Featured Image */}
//       <Image
//         src={urlForImage(post.image)}
//         width={500}
//         height={500}
//         alt="AI for everyone"
//         className="rounded"
//       />

//       {/* Blog Summary Section */}
//       <section>
//       <h2 className="text-xl xs:text-2xl md:text-3xl font-bold uppercase text-accentDarkPrimary">
//         Summary
//       </h2>
//       <p className="text-base md:text-xl leading-relaxed text-justify text-dark/80 dark:text-light/80">
//         {post.summary}
//       </p>
//       </section>



//       {/* Main Body of Blog */}
//       <section className="text-lg leading-normal text-dark/80 dark:text-light/80
//       prose-h4:text-accentDarkPrimary prose-h4:text-3xl prose-h4:font-bold
//       prose-li:list-disc prose-li:list-inside prose-li:marker:text-accentDarkSecondary
//       prose-strong:text-dark dark:prose-strong:text-white
      
//       ">
//         <PortableText 
//         value={post.content} 
//         // components={components} 
//         />
        
//       </section>
//     </article>
//   );
// }






// gemini resolve
// import Image from "next/image";
// import { client } from "../../../sanity/lib/client";
// import { urlForImage } from "../../../sanity/lib/image";
// import { PortableText } from "@portabletext/react";

// export const revalidate = 5;

// // Define the correct type for the params
// interface Paramss {
//   slug: string;
// }

// // Define the PageProps interface with the correct params type
// interface PageProps {
//   params: Paramss;
// }

// export async function generateStaticParams() {
//   const query = `*[_type=='post']{
//     "slug":slug.current
//   }`;
//   const slugs = await client.fetch<{ slug: string }[]>(query); // Type the fetch response
//   return slugs.map((item) => ({ slug: item.slug }));
// }

// export default async function Page({ params }: PageProps) {
//   const { slug } = params; // Extract slug safely

//   const query = `*[_type=='post' && slug.current=="${slug}"]{
//     title, summary, image, content
//   }[0]`;

//   try {
//     const post = await client.fetch(query);

//     if (!post) {
//       return <div>Post not found</div>; // Handle cases where the post doesn't exist
//     }

//     return (
//       <article className="mt-12 mb-24 px-2 2xl:px-12 flex flex-col gap-y-8">
//         <h1 className="text-xl xs:text-3xl lg:text-5xl font-bold text-dark dark:text-light">
//           {post.title}
//         </h1>

//         <Image
//           src={urlForImage(post.image)}
//           width={450}
//           height={450}
//           alt={post.title || "Post Image"} // Add alt text
//           className="rounded"
//         />

//         <section>
//           <h2 className="text-xl xs:text-2xl md:text-3xl font-bold uppercase text-accentDarkPrimary">
//             Summary
//           </h2>
//           <p className="text-base md:text-xl leading-relaxed text-justify text-dark/80 dark:text-light/80">
//             {post.summary}
//           </p>
//         </section>

//         <section className="text-lg leading-normal text-dark/80 dark:text-light/80 prose-h4:text-accentDarkPrimary prose-h4:text-3xl prose-h4:font-bold prose-li:list-disc prose-li:list-inside prose-li:marker:text-accentDarkSecondary prose-strong:text-dark dark:prose-strong:text-white">
//           <PortableText value={post.content} />
//         </section>
//       </article>
//     );
//   } catch (error) {
//     console.error("Error fetching post:", error);
//     return <div>Error loading post</div>; // Handle fetch errors
//   }
// }




// chatgrpt error solve
// import Image from "next/image";
// import { client } from "../../../sanity/lib/client";
// import { urlForImage } from "../../../sanity/lib/image";
// import { PortableText } from "@portabletext/react";

// export const revalidate = 5;

// // Define the correct type for the params


// // Define the PageProps interface with the correct params type


// export async function generateStaticParams() {
//   const query = `*[_type=='post']{
//     "slug": slug.current
//   }`;

//   // Type the fetch response correctly
//   const slugs = await client.fetch<{ slugs }>(query);
//   return slugs.map((item) => ({ slug: item.slug })); // Ensure proper structure
// }

// export default async function Page({ params }) {
//   const { slug } = params; // Extract slug safely

//   const query = `*[_type=='post' && slug.current=="${slug}"]{
//     title, summary, image, content
//   }[0]`;

//   try {
//     const post = await client.fetch(query);

//     if (!post) {
//       return <div>Post not found</div>; // Handle cases where the post doesn't exist
//     }

//     return (
//       <article className="mt-12 mb-24 px-2 2xl:px-12 flex flex-col gap-y-8">
//         <h1 className="text-xl xs:text-3xl lg:text-5xl font-bold text-dark dark:text-light">
//           {post.title}
//         </h1>

//         <Image
//           src={urlForImage(post.image)}
//           width={450}
//           height={450}
//           alt={post.title || "Post Image"} // Add alt text
//           className="rounded"
//         />

//         <section>
//           <h2 className="text-xl xs:text-2xl md:text-3xl font-bold uppercase text-accentDarkPrimary">
//             Summary
//           </h2>
//           <p className="text-base md:text-xl leading-relaxed text-justify text-dark/80 dark:text-light/80">
//             {post.summary}
//           </p>
//         </section>

//         <section className="text-lg leading-normal text-dark/80 dark:text-light/80 prose-h4:text-accentDarkPrimary prose-h4:text-3xl prose-h4:font-bold prose-li:list-disc prose-li:list-inside prose-li:marker:text-accentDarkSecondary prose-strong:text-dark dark:prose-strong:text-white">
//           <PortableText value={post.content} />
//         </section>
//       </article>
//     );
//   } catch (error) {
//     console.error("Error fetching post:", error);
//     return <div>Error loading post</div>; // Handle fetch errors
//   }
// }




// convert into jvascript


import Image from "next/image";
import { client } from "../../../sanity/lib/client";
import { urlForImage } from "../../../sanity/lib/image";
import { PortableText } from "@portabletext/react";

export const revalidate = 5;

export async function generateStaticParams() {
  const query = `*[_type=='post']{
    "slug": slug.current
  }`;

  // Fetch slugs without TypeScript typing
  const slugs = await client.fetch(query);

  // Ensure slugs map correctly to the structure { slug: string }
  return slugs.map((item) => ({ slug: item.slug }));
}

export default async function Page({ params }) {
  const { slug } = params; // Extract slug safely

  const query = `*[_type=='post' && slug.current=="${slug}"]{
    title, summary, image, content
  }[0]`;

  try {
    const post = await client.fetch(query);

    if (!post) {
      return <div>Post not found</div>; // Handle cases where the post doesn't exist
    }

    return (
      <article className="mt-12 mb-24 px-2 2xl:px-12 flex flex-col gap-y-8">
        <h1 className="text-xl xs:text-3xl lg:text-5xl font-bold text-dark dark:text-light">
          {post.title}
        </h1>

        <Image
          src={urlForImage(post.image)}
          width={450}
          height={450}
          alt={post.title || "Post Image"} // Add alt text
          className="rounded"
        />

        <section>
          <h2 className="text-xl xs:text-2xl md:text-3xl font-bold uppercase text-accentDarkPrimary">
            Summary
          </h2>
          <p className="text-base md:text-xl leading-relaxed text-justify text-dark/80 dark:text-light/80">
            {post.summary}
          </p>
        </section>

        <section className="text-lg leading-normal text-dark/80 dark:text-light/80 prose-h4:text-accentDarkPrimary prose-h4:text-3xl prose-h4:font-bold prose-li:list-disc prose-li:list-inside prose-li:marker:text-accentDarkSecondary prose-strong:text-dark dark:prose-strong:text-white">
          <PortableText value={post.content} />
        </section>
      </article>
    );
  } catch (error) {
    console.error("Error fetching post:", error);
    return <div>Error loading post</div>; // Handle fetch errors
  }
}
