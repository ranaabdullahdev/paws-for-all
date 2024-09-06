// "use client";
// import Image from "next/image";
// import main from "./assets/mainPic.svg";
// import logo from "./assets/logoSvg.svg";
// import { useState } from "react";
// import axios from "axios";

// export default function Home() {
//   const [email, setEmail] = useState("");
//   const handleSubmit = async () => {
//     const response = await axios.post("/api/sign-up",{ email});
//     console.log(response);
//   };
//   return (
//     <div className="">
//       <div className="text-center mt-4">
//         <h5 className="  font-apple text-2xl md:text-4xl font-bold">
//           PAWS is launching soon
//         </h5>
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-2 px-10 mt-10  ">
//         <div className="flex flex-col  gap-10 justify-center items-center p-10">
//           <div className="md:h-[665px] md:w-[500px] w-[340px] h-[450px] ">
//             <Image src={main} alt="" className="h-full w-full object-cover" />
//           </div>
//           <h5 className="font-apple text-primary-100 text-2xl md:text-4xl font-bold">
//             PAWS FOR ALL
//           </h5>
//         </div>
//         <div className="flex flex-col items-center justify-center gap-10 p-10">
//           <div className="md:h-[550px] md:w-[540px] w-[335px] h-[335px] ">
//             <Image src={logo} alt="" className="h-full w-full object-cover" />
//           </div>
//           <div className="flex items-center flex-col justify-center gap-10">
//             <h2 className="text-sm md:text-xl font-bold font-apple ">
//               Please add an email for updates
//             </h2>
//             <div className="flex items-center justify-center gap-5">
//               <input
//                 type="text"
//                 className="p-2 border border-primary-100 rounded "
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//               <button
//                 onClick={handleSubmit}
//                 className="py-2  px-4 bg-black text-white rounded text-md md:text-xl  font-bold"
//               >
//                 Add Email
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";
import Image from "next/image";
import main from "./assets/mainPic.svg";
import logo from "./assets/logoSvg.svg";
import { useState } from "react";
import axios from "axios";

export default function Home() {
  const [email, setEmail] = useState("");

  const handleSubmit = async () => {
    try {
      const response = await axios.post("/api/sign-up", { email }); // Wrap email in an object
      console.log(response);
    } catch (error) {
      console.error("Error while signing up:", error);
    }
  };

  return (
    <div className="">
      <div className="text-center mt-4">
        <h5 className="font-apple text-2xl md:text-4xl font-bold">
          PAWS is launching soon
        </h5>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 px-10 mt-10">
        <div className="flex flex-col gap-10 justify-center items-center p-10">
          <div className="md:h-[665px] md:w-[500px] w-[340px] h-[450px]">
            <Image src={main} alt="Main Image" className="h-full w-full object-cover" />
          </div>
          <h5 className="font-apple text-primary-100 text-2xl md:text-4xl font-bold">
            PAWS FOR ALL
          </h5>
        </div>
        <div className="flex flex-col items-center justify-center gap-10 p-10">
          <div className="md:h-[550px] md:w-[540px] w-[335px] h-[335px]">
            <Image src={logo} alt="Logo" className="h-full w-full object-cover" />
          </div>
          <div className="flex items-center flex-col justify-center gap-10">
            <h2 className="text-sm md:text-xl font-bold font-apple">
              Please add an email for updates
            </h2>
            <div className="flex items-center justify-center gap-5">
              <input
                type="email"
                className="p-2 border border-primary-100 rounded"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                onClick={handleSubmit} // Pass the function reference here
                className="py-2 px-4 bg-black text-white rounded text-md md:text-xl font-bold"
              >
                Add Email
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

