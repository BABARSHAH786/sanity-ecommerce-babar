import Image from "next/image"
export default function TopSide(){
    return(
        <>
        <div className="flex mt-4 ml-4">
            <div className="w-1/3 ">
                <Image src={"/images.jpeg"} alt="" width={450} height={200} />
        
             </div>
             <div className="w-1/2 ">
                <h2 className="text-[25px ] font-semibold ">Blogging website</h2> 
                <h2 className="text-[20px] ">For a coding blog, a strong tagline is essential for attracting the right audience. Taglines can focus on various aspects of coding, such as learning and growth ("Level Up Your Coding Skills"), practical application ("Real-World Coding Solutions"), community and collaboration ("The Coding Community Hub"), or innovation and technology ("The Cutting Edge of Code"). Catchy and creative taglines can also be effective ("Decoding the Digital World"). It's important to tailor the tagline to your blog's specific niche within coding (e.g., web development, data science) and consider your target audience. Combining elements from different categories can create a more impactful and descriptive tagline, like "Level Up Your Web Dev: Practical Coding for Real-World Projects." The goal is to create a memorable and relevant tagline that clearly communicates the value your blog offers to coders</h2>
        
             </div>
        
        </div>
        </>
    )
}