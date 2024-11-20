import Link from "next/link";
import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLaptopCode,
  FaLinkedin,
  FaStore,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { MdMiscellaneousServices, MdStyle } from "react-icons/md";

export default function page() {
  return (
    <>
      <div className="w-full flex justify-center min-w-[21rem] bg-[#F5F4F0]">
        <div className="w-full max-w-[952px]   px-4 py-6 sm:px-6 md:px-8 lg:px-0 ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* First Column: Custom Card */}
            <div className="flex justify-center w-full">
              <div className="w-full  max-w-full md:max-w-[18rem] h-fit shadow-lg rounded-2xl bg-white text-[#192025] overflow-hidden flex flex-col mt-4  p-4 md:ml-[-5rem] lg:ml-[-10rem]  ">
                <div
                  className={`max-w-[30rem] min-w-full rounded-2xl bg-[#FFFFFF] py-5 px-6 text-[#192025] `}
                >
                  <div className="flex flex-col justify-center items-center  gap-16  px-2 text-[1.2rem]">
                    <div className="flex items-center justify-between gap-8  ">
                      <FaLaptopCode />
                      <div className={`text-[1rem] font-medium mt-1 mb-1 `}>
                        Website development
                      </div>
                    </div>
                    <div className="flex items-center justify-between gap-8 text-[1.2rem]">
                      <FaStore />
                      <div className={`text-[1rem] font-medium mt-1 mb-1 `}>
                        {"E-commerce store"}
                      </div>
                    </div>
                    <div className="flex items-center justify-between gap-8 text-[1.2rem]">
                      <MdMiscellaneousServices />
                      <div className={`text-[1rem] font-medium mt-1 mb-1`}>
                        SaaS application
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Second Column: Card Component */}
            <div className="flex flex-col justify-center items-center gap-0">
              <div className="font-semibold text-[2rem]  sm:text-[2.3rem] md:text-[2.8rem] lg:text-[3.2rem] mt-4 sm:mt-0  uppercase md:ml-[-5rem] lg:ml-[-5rem]">
                My Offerings
              </div>
              <div className="">
                <div className={`w-full flex   py-4 `}>
                  <div className=" ">
                    <div
                      className={`md:max-w-[35rem] lg:max-w-[50rem] min-w-full rounded-2xl bg-[#ffffff] py-5 px-6 text-[#192025] md:ml-[-5rem] lg:ml-[-10rem] `}
                    >
                      <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 items-center  gap-7">
                        <div className="w-full  sm:min-w-[20rem] lg:min-w-0 object-cover rounded-2xl bg-[#FBFBFC] text-[2rem] flex flex-col justify-between  place-items-start gap-2  font-bold p-5">
                          <div className="text-lg text-left uppercase font-medium">
                            SaaS Application
                          </div>
                          <div className="text-sm text-[#B1B1B3]">
                            Unlock the full potential of your ideas with
                            tailored SaaS applications that are scalable,
                            secure, and perfectly aligned with your business
                            needs. My custom solutions ensure flexibility and
                            efficiency, driving your business forward with
                            technology designed specifically for you.
                          </div>
                        </div>

                        <div className="w-full  sm:min-w-[20rem] lg:min-w-0 object-cover rounded-2xl bg-[#FBFBFC] text-[2rem] flex flex-col justify-between  place-items-start gap-2  font-bold p-5">
                          <div className="text-lg text-left uppercase font-medium">
                            Website DEVELOPMENT
                          </div>
                          <div className="text-sm text-[#B1B1B3]">
                            Specialize in crafting custom websites that are not
                            only visually stunning but also highly functional. I
                            leverage the latest technologies to build
                            responsive, fast, and secure website tailored to
                            your business needs. Whether you need a simple
                            landing page or a complex e-commerce platform, i
                            delivers solutions that engage your audience and
                            drive conversions.
                          </div>
                        </div>
                        <div className="w-full sm:min-w-[20rem] lg:min-w-0  object-cover rounded-2xl bg-[#FBFBFC] text-[2rem] flex flex-col justify-between  place-items-start gap-2  font-bold p-5">
                          <div className="text-lg text-left uppercase font-medium">
                            E-commerce store
                          </div>
                          <div className="text-sm text-[#B1B1B3]">
                            I build e-commerce stores that are not only visually
                            appealing but also optimized for conversion. From
                            product catalogs to payment gateways, i take careof
                            the technical aspects so you can focus on growing
                            your business.
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="flex justify-center w-full">
                <div className="w-full max-w-[17rem] sm:max-w-[20rem] md:max-w-[18rem] min-w-full h-fit shadow-lg rounded-2xl bg-white text-[#192025] overflow-hidden flex flex-col mt-4  p-4 px-4">
                  <div className="w-full h-24  object-cover rounded-full bg-[#FBFBFC] px-3 text-[2rem] flex justify-between  items-center gap-2">
                    <Link
                      target="_blank"
                      href="https://www.instagram.com/samirkayamkhani.dev"
                      rel="noopener noreferrer"
                    >
                      <div className="rounded-full bg-white hover:text-[2.2rem] w-full p-2 flex items-center justify-center">
                        <FaInstagram />
                      </div>
                    </Link>
                    <Link
                      target="_blank"
                      href="https://www.facebook.com/share/hKHFJRoUkgXPkcBD/?mibextid=qi20mg"
                      rel="noopener noreferrer"
                    >
                      <div className="rounded-full bg-white hover:text-[2.2rem] w-full p-2 flex items-center justify-center">
                        <FaFacebook />
                      </div>
                    </Link>
                    <Link
                      target="_blank"
                      href="https://www.linkedin.com/in/samirkayamkhani"
                      rel="noopener noreferrer"
                    >
                      <div className="rounded-full bg-white hover:text-[2.2rem] w-full p-2 flex items-center justify-center">
                        <FaLinkedin />
                      </div>
                    </Link>
                    <Link
                      target="_blank"
                      href="https://x.com/samirkyamkhani"
                      rel="noopener noreferrer"
                    >
                      <div className="rounded-full bg-white hover:text-[2.2rem] w-full p-2 flex items-center justify-center">
                        <FaXTwitter />
                      </div>
                    </Link>
                  </div>
                  <div className="mt-4">
                    <div
                      className={`text-[0.8rem] font-semibold text-[#BCBCBC] `}
                    >
                      STAY WITH ME
                    </div>
                    <Link href="contact-info">
                      <div
                        className={`text-[1rem] font-semibold mt-1 mb-1 flex justify-between items-center`}
                      >
                        Profiles{" "}
                        <IoArrowForwardCircleOutline className="text-2xl" />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="flex justify-center w-full">
                <div className="w-full max-w-[17rem] sm:max-w-[25rem] lg:min-w-[30rem] min-w-full h-fit shadow-lg rounded-2xl bg-white text-[#192025] overflow-hidden flex flex-col mt-4  p-4 px-4">
                  <div className="w-full h-24  object-cover rounded-2xl bg-[#FBFBFC] text-[2rem] flex justify-between  items-center gap-2 pl-2 font-bold">
                    Let's Work together.
                  </div>
                  <div className="mt-4">
                    <Link href="contact-info">
                      <div
                        className={`text-[1rem] font-semibold mt-1 mb-1 flex justify-between items-center`}
                      >
                        Get Started{" "}
                        <IoArrowForwardCircleOutline className="text-2xl" />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
