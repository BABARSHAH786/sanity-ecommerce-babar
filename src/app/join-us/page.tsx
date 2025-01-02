import Image from "next/image";
import Link from "next/link";

// import Link from "next/link";
export default function JoinUs() {
    return (
        <div>
        <div>


            {/* login work */}

            <div className="">
                <div className="max-ss:ml-9 max-md:ml-9   w-[380px] h-[833px] ml-[530px] ">
                    <div className="w-[324px] h-[180px] mt-7 left-[28px] relative ">
                    <Image
      className="max-ss:hidden ml-12 max-md:hidden "
      src={"/Vector8.png"}
      alt=""
      width={78.47}
      height={78.47}
    />
    <p className="w-[231px] mt-4 text-[18px] font-bold flex justify-between leading-[26px] ">BECOME A NIKE MEMBER</p>

    <p className="w-[280px] mt-4 text-[14px] font-bold flex justify-between leading-[26px] text-[#8D8D8D]  ">Create your Nike Member profile and get first access to the very best of Nike products, inspiration and community.</p>
    <div className="w-[324px] h-[561px] mt-4 text-[14px]">
    <input className="border-[1px] pt-[5px]  pl-[17px] w-[324px] h-[40px] mt-4" type="email " placeholder="Email address" />
    <input className="border-[1px] pt-[5px]  pl-[17px] w-[324px] h-[40px] mt-4" type="password" placeholder="Password" />
    <input className="border-[1px] pt-[5px]  pl-[17px] w-[324px] h-[40px] mt-4" type="text " placeholder="First Name" />
    <input className="border-[1px] pt-[5px]  pl-[17px] w-[324px] h-[40px] mt-4" type="text " placeholder="Last Name" />
    <input className="border-[1px] pt-[5px]  pl-[17px] w-[324px] h-[40px] mt-4" type="text " placeholder="Date of birth" />
    {/* text */}
    <p className="text-[#8D8D8D] text-[11px] mt-1 ">Get a Nike Member Reward every year on your Birthday.</p>
    <input className="border-[1px] pt-[5px]  pl-[17px] w-[324px] h-[40px] mt-4" type=" " placeholder="India" />
    <div className="justify-between flex mt-4">
    <button className=" w-[153.89px] border-[1px] h-[40px] text-[11px] text-b rounded-[3px] py-[7px] px-[22px]  ">Male</button>
    <button className=" w-[153.89px] border-[1px] h-[40px] text-[11px] text-b rounded-[3px] py-[7px] px-[22px]  ">Female</button>
    </div>



   {/* login */}
   <div className=" text-[12px] flex gap-3 mt-4">
    <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"  />
<label className="text-[#8D8D8D]" > Sign up for emails to get updates from Nike on products, offers and your Member benefits</label>

     </div>

   <div className=" text-[10px] flex gap-1 mt-[16px] text-[#8D8D8D] ">By logging in, you agree to Nike&apos;s <b className="underline">Privacy Policy</b> <br /> <b className="underline">and Terms of Use.</b>
                    
                    </div>
                    <div className="w-[324px] mt-4 bg-[#111111] pl-[101px] relative ">

{/* btn */}
<Link className=" " href="/sign-in">
            
          
           <button className=" text-white h-[40px] text-[11px] bg-[#111111] rounded-[3px] py-[7px] px-[22px]  ">SIGN IN</button>
           </Link>
           </div>
           <span className="text-[#8D8D8D] text-center justify-center flex mt-4">Already a Member? <b className="text-black ml-3">Sign In.</b> </span>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>


    )
}
