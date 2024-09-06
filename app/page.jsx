import Image from "next/image";
import main from "@/app/assets/mainPic.svg";
import logo from "@/app/assets/logoSvg.svg";

export default function Home() {
  return (
    <div className="">
      <div className="text-center mt-4">
        <h5 className="  font-apple text-2xl md:text-4xl font-bold">
          PAWS is launching soon
        </h5>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 px-10 mt-10  ">
        <div className="flex flex-col  gap-10 justify-center items-center p-10">
          <div className="md:h-[665px] md:w-[500px] w-[340px] h-[450px] ">
            <Image src={main} alt="" className="h-full w-full object-cover" />
          </div>
          <h5 className="font-apple text-primary-100 text-2xl md:text-4xl font-bold">
            PAWS FOR ALL
          </h5>
        </div>
        <div className="flex flex-col items-center justify-center gap-10 p-10">
          <div className="md:h-[550px] md:w-[540px] w-[335px] h-[335px] ">
            <Image src={logo} alt="" className="h-full w-full object-cover" />
          </div>
          <div className="flex items-center flex-col justify-center gap-10">
            <h2 className="text-sm md:text-xl font-bold font-apple ">
              Please add an email for updates
            </h2>
            <div className="flex items-center justify-center gap-5">
              <input
                type="text"
                className="p-2 border border-primary-100 rounded "
              />
              <button className="py-2  px-4 bg-black text-white rounded text-md md:text-xl  font-bold">
                Add Email
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
