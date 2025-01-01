// import Link from "next/link";

import Link from "next/link";

export default function Pricing() {
  return (
    <div className="w-[1440px] h-[134px] max-sm:  ">
      <header className="h-[38px] bg-[#000000] max-sm:w-[390px] max-sm:h-[34px] ">
        <h2 className="w-[411px] h-[19px] gap-2 relative top-2 left-[544px] text-[rgb(255,255,255)] font-satoshi font-normal leading-[18.9px] text-[14px] max-ss:justify-start max-ss:bg-yellow-300  max-sm:w-[301px] max-sm:h-[16px] max-sm:left-[20px] ">
        Exploring the world, one 
 <b className="underline"> journey at a time</b>
        </h2>
      </header>

      <div className="h-[1240px] w-[148px] text-[#000000] relative top-[24px] left-[100px] gap-[40px] flex">
        <div className="h-[160px] w-[222px] font-bold text-[32px] leading-[34.8px] flex max:sm-text-[25.2px] ">
          BloggerTech
        
        <div className="h-[321px] w-[22px] relative left-[120px] gap-[24px] ">
          {/* <div className=" w-[360px] gap-[24px] flex font-normal justify-between mt-[5.5px] items-center leading-[21.6px] text-[16px] ">
            <p>Shop</p>
        

            <div className="text-[#000000]">
              <p className="text-[#000000] w-[65px] h-[22px] ">On Sale</p>
            </div>
            <div>
              <p>New Arrivals</p>
            </div>
            <div>
              <p>Brands</p>
            </div>
          </div> */}
          </div>
        </div>
        {/*    <div className="h-[1240px] w-[48px]">
        </div>      */}

<Link className="text-[23px] font-medium" href="/">Home        </Link>


        <div className="h-[577px] w-[48px]    ">
          <input className="bg-[#F0F0F0] rounded-[62px]  relative pt-[0px] pr-[16px] pb-[12px] pl-[16px] left-[670px] max-ss:hidden " type="search" placeholder="Search Blogs here..."></input>
        </div>  

      </div>
    
    </div>
  );
}
