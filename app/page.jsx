"use client";
import Image from "next/image";
import main from "./assets/mainPIC.svg";
import logo from "./assets/logoSvg.svg";
import { useState } from "react";
import axios from "axios";
import useToast from "./hooks/useToast";

import { toast, ToastContainer } from "react-toastify";

export default function Home() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { showToast } = useToast();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSubmit = async () => {
    try {
      if (email === "") return showToast("Please enter a valid email", "error");
      if (!emailRegex.test(email)) {
        return showToast("Please use a valid email address", "error");
      }
      setIsLoading(true);
      const response = await axios.post("/api/sign-up", { email });
      if (response.data.success) {
        showToast(response.data.message, "success");
        setEmail("");
        setIsLoading(false);
      }
      consolw.log("response", response);
    } catch (error) {
      setIsLoading(false);
      showToast(error.response.data.message, "error");

      console.error("Error while signing up:", error.response.data);
    }
  };

  return (
    <div className="">
      <div className="text-center mt-4">
        <h5 className="font-apple text-xl md:text-3xl font-bold">
          PAWS is launching soon
        </h5>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 px-10 mt-5">
        <div className="flex flex-col gap-10 justify-center items-center p-10">
          <div className="md:h-[400px] md:w-[300px] w-[260px] h-[350px]">
            <Image
              src={main}
              alt="Main Image"
              className="h-full w-full object-cover"
            />
          </div>
          <h5 className="font-apple text-primary-100 text-xl md:text-3xl font-bold">
            PAWS FOR ALL
          </h5>
        </div>
        <div className="flex flex-col items-center justify-center gap-10 p-10">
          <div className="md:h-[300px] md:w-[300px] w-[240px] h-[250px]">
            <Image
              src={logo}
              alt="Logo"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex items-center flex-col justify-center gap-10">
            <h2 className="text-sm md:text-lg font-bold font-apple">
              Please add an email for updates
            </h2>
            <div className="flex items-center justify-center gap-5">
              <input
                type="email"
                className="p-2 border bg-transparent border-primary-100 rounded"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                onClick={() => {
                  handleSubmit();
                }}
                className="py-3 px-4 bg-black text-white rounded text-sm md:text-md font-bold"
              >
                {isLoading ? "Loading..." : "Add Email"}
              </button>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
