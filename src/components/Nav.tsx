// import Link from "next/link";

import Link from "next/link";

export default function Pricing() {
  return (
    <div className="w-[1440px] h-[134px] max-sm:  ">
      <header className="h-[38px] bg-[#000000] max-sm:w-[390px] max-sm:h-[34px] text-white  ">
        <div className="align-center flex justify-center ">
      <Link className="text-[23px] font-medium" href="/">Home        </Link>
      <Link className="text-[23px] ml-8 font-medium hover:color-red " href="/sign-in">Sign in        </Link>
      <Link className="text-[23px] ml-8 font-medium" href="/join-us">Join us        </Link>
      </div>

        <div className="flex ml-[100px] max-sm:ml-[20px] gap-[80px]">

     
      </div>
        <h2 className="w-[411px] h-[19px] gap-2 relative top-2 left-[544px] text-[rgb(255,255,255)] font-satoshi font-normal leading-[18.9px] text-[14px] max-ss:justify-start max-ss:bg-yellow-300  max-sm:w-[301px] max-sm:h-[16px] max-sm:left-[20px] ">

        Exploring the world, one 
 <b className="underline"> journey at a time</b>
        </h2>
      </header>

      <div className="h-[1240px] w-[148px] text-[#000000] relative top-[24px] left-[100px] gap-[40px] flex">
        <div className="h-[160px] w-[222px] font-bold text-[32px] leading-[34.8px] flex max:sm-text-[25.2px] ">
          <span> SHOESIFY </span>
          </div>

        
        
        


      </div>
    
    </div>
  );
}
