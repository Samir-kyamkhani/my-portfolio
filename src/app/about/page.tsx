import Card from "@/components/Card";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { PiShootingStarLight } from "react-icons/pi";

export default function page() {
  return (
    <>
      {" "}
      <div className="w-full flex justify-center min-w-[21rem] bg-[#F5F4F0]">
        <div className="w-full max-w-[952px]  px-4 py-6 sm:px-6 md:px-8 lg:px-0 ">
          <div className="grid grid-cols-1 sm:grid-cols-2  gap-6">
            {/* First Column: Custom Card */}
            <div className="flex justify-center w-full">
              <div className="w-full max-w-[17rem] sm:max-w-[20rem] md:max-w-[18rem] h-fit shadow-lg rounded-2xl bg-white text-[#192025] overflow-hidden flex flex-col mt-4 sm:ml-[-3rem] md:ml-[-4rem] p-4">
                {/* Image */}
                <Image
                  src="/cam2.jpg"
                 
                  
                  className="w-full h-auto aspect-square object-cover rounded-2xl"
                  alt="Sameer"
                />
              </div>
            </div>
            {/* Second Column: Card Component */}
            <div className="flex flex-col justify-center items-center gap-0">
              <div className="font-semibold text-[2rem]  sm:text-[2.3rem] md:text-[2.8rem] lg:text-[3.2rem] uppercase">
                Self-summary
              </div>
              <Card
                rating={5}
                icon={PiShootingStarLight}
                fontclass="text-[1.5rem]"
                title="Samir Kayamkhani"
                desc="At the core of my work is a simple philosophy: build with passion, deliver with excellence. I'm Samir Kayamkhani, a full-stack developer with a mission to create digital solutions that not only meet client needs but exceed their expectations. With years of experience I've honed my skills in Web development, SaaS application and E-commerce platforms. What sets me apart is my commitment to quality, innovation, and a user-centric approach in everything I do. My goal is to help businesses grow by providing them with a strong online presence and digital tools that work flawlessly. Let's connect and create something amazing together."
                CardClassName="shadow-lg min-w-full sm:w-auto"
              />
            </div>

            <div className="">
              <div className={``}>
                <div className="w-full max-w-full">
                  <div
                    className={`max-w-[25rem] min-w-full rounded-2xl bg-[#FFFFFF] py-5 px-6 text-[#192025] `}
                  >
                    <div className="flex items-center mb-4 border-b-[1px] border-black/20 pb-2">
                      <div>
                        <div className={`text-lg font-semibold `}>
                          EXPERIENCE
                        </div>
                      </div>
                    </div>

                    <div
                      className={`text-[0.8rem] font-semibold text-[#BCBCBC] `}
                    >
                      2022 - 2024
                    </div>
                    <div className={`text-[1rem] font-semibold mt-1 mb-1`}>
                      Front-End Developer
                    </div>
                    <div className="text-[0.8rem] font-semibold text-[#BCBCBC] mb-5">
                      MERN-Stack
                    </div>

                    <div
                      className={`text-[0.8rem] font-semibold text-[#BCBCBC] `}
                    >
                      2022 - 2024
                    </div>
                    <div className={`text-[1rem] font-semibold mt-1 mb-1`}>
                      Back-End Developer
                    </div>
                    <div className="text-[0.8rem] font-semibold text-[#BCBCBC]">
                      MERN-Stack
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="">
              <div className={`w-full py-4`}>
                <div className="w-full max-w-[952px] ">
                  <div
                    className={`max-w-[25rem] min-w-full rounded-2xl bg-[#FFFFFF] py-5 px-6 text-[#192025] `}
                  >
                    <div className="flex items-center mb-4 border-b-[1px] border-black/20 pb-2">
                      <div>
                        <div className={`text-lg font-semibold uppercase `}>
                          Skills
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap justify-between items-center  gap-12 lg:gap-x-24">
                      <div>
                        <div className={`text-[1rem] font-semibold mt-1 mb-1`}>
                          ReactJS
                        </div>
                      </div>
                      <div>
                        <div className={`text-[1rem] font-semibold mt-1 mb-1`}>
                          NextJS
                        </div>
                      </div>
                      <div>
                        <div className={`text-[1rem] font-semibold mt-1 mb-1`}>
                          NodeJS
                        </div>
                      </div>
                      <div>
                        <div className={`text-[1rem] font-semibold mt-1 mb-1`}>
                          JavaScript
                        </div>
                      </div>
                      <div>
                        <div className={`text-[1rem] font-semibold mt-1 mb-1`}>
                          Html
                        </div>
                      </div>
                      <div>
                        <div className={`text-[1rem] font-semibold mt-1 mb-1`}>
                          Css
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
                    {"Let's Work together."}
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
