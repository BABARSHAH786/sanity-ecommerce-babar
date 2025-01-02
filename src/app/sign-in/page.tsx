import Image from "next/image";
import Link from "next/link";
export default function SignUP() {
  return (
    <div className="max-ss:h-[180px]">
      <div>
        {/* login work */}

        <div className="">
          <div className="max-ss:w-[390px] max-ss:ml-[35px] max-ss:h-[335px] w-[380px] h-[489px] ml-[530px] ">
            <div className="w-[324px] h-[128px] mt-7 left-[28px] relative  ">
              <Image
                className="ml-12 max-ss:hidden"
                src={"/Vector8.png"}
                alt=""
                width={78.47}
                height={78.47}
              />
              <p className="w-[186px] mt-4 text-[18px] font-bold  ">
                YOUR ACCOUNT FOR EVERYTHING NIKE
              </p>
              <input
                className="border-[1px] pt-2  pl-[17px] w-[324px] mt-4"
                type="text "
                placeholder="Email address"
              />
              <input
                className="border-[1px] pt-2  pl-[17px] w-[324px] mt-4"
                type="text "
                placeholder="Password"
              />

              {/* login */}
              <div className=" text-[12px] flex gap-3 mt-4">
                <input
                  type="checkbox"
                  id="vehicle1"
                  name="vehicle1"
                  value="Bike"
                />
                <label> Keep me signed in</label>

                <p className="ml-12"> Forgotten your password?</p>
              </div>

              <div className=" text-[10px] flex gap-1 mt-[16px] text-[#8D8D8D] ">
                By logging in, you agree to Nike&apos;s{" "}
                <b className="underline">Privacy Policy</b> <br />{" "}
                <b className="underline">and Terms of Use.</b>
              </div>
              <div className="w-[324px] mt-4 bg-[#111111] pl-[101px] relative ">
                {/* btn */}
                <button className=" text-white h-[40px] text-[11px] bg-[#111111] rounded-[3px] py-[7px] px-[22px]  ">
                  SIGN IN
                </button>
              </div>
              <span className="text-[#8D8D8D] text-center justify-center flex mt-4">
                Not a Member?
                <Link className=" " href="/join-us">
                  <b className="text-black ml-3">Join Us.</b>{" "}
                </Link>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
