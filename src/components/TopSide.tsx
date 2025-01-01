import Image from "next/image"
export default function TopSide(){
    return(
        <>
        <div className="max-md:grid max-ss:grid flex mt-4 ml-4">
            <div className="w-1/3 h-[340px] max-ss:w-full max-md:w-full ">
                <Image src={"/img2.jpeg"} alt="" width={450} height={250} />
        
             </div>
             <div className="max-md:w-[390px] max-2xl:w-1/2 ">
                <h2 className="text-[28px] font-bold ">Blogging website</h2> 
                <h2 className="text-[20px] ">TypeScript integrates seamlessly with Next.js by adding static typing to components, pages, API routes, and data structures. 1  This enables compile-time error checking, improves code maintainability and refactoring, and enhances the developer experience through better code completion and type inference</h2>
        
             </div>
        
        </div>
        </>
    )
}