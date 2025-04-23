"use client";
import Link from "next/link";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { MdOutgoingMail } from "react-icons/md";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaUserGraduate } from "react-icons/fa";
import { IoMdContacts } from "react-icons/io";
import { MdWorkHistory } from "react-icons/md";
import { RiServiceFill } from "react-icons/ri";
import { TbHomeFilled } from "react-icons/tb";
import Image from "next/image";

export default function HeaderComponent() {
  return (
    <>
      <div className="overflow-hidden">
        <div className="flex justify-center ">
          <div className="max-w-[952px] w-full bg-[#F1F1F1] py-2 px-4 flex overflow-hidden space-x-4 group mask-gradient">
            <div className="flex space-x-10 animate-loop-scroll group-hover:pause">
              {Array(3)
                .fill(0)
                .map((_, i) => (
                  <div
                    key={i}
                    className="text-sm font-semibold whitespace-nowrap"
                  >
                    LATEST WORK AND{" "}
                    <span className="text-[#1E3B0B]">FEATURED.</span>
                  </div>
                ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center  ">
          <div className="relative  rounded-b-xl overflow-hidden aspect-[3/1] max-w-[952px] w-full min-h-[11rem]">
            <Image
              src="/cam.jpg"
              width={25}
              height={25}
              alt="Camera Banner"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <div className="w-full flex justify-center ">
          <div className="w-[952px] max-w-[952px] max-h-[5rem] flex justify-between items-center px-[1.2rem] mt-[-0.8rem] sm:px-[1rem] lg:px-0 md:mt-[-0.2rem] lg:mt-0">
            <div className="flex flex-wrap items-center gap-3 sm:mt-[-1.5rem]">
              <div className="w-[85px] h-[85px] md:w-[100px] md:h-[100px] lg:w-[115px] lg:h-[115px] max-w-[115px] max-h-[115px] border-[3px] border-white overflow-hidden bg-cover bg-center rounded-full">
                <Image
                  alt="profile"
                  src="/profile.jpg"
                  width={25}
                  height={25}
                  className="scale-[3] object-cover mt-11 ml-[-1.5rem] md:scale-[3.2] md:mt-[3.8rem] md:ml-[-1.9rem] lg:scale-[3.2] lg:mt-[4.2rem] lg:ml-[-2.2rem]"
                />
              </div>
              <div className="font-bold text-md sm:text-xl not-italic sm:mt-7 md:mt-5 w-[9rem]">
                Samir Kayamkhani
              </div>
            </div>
            <div className="flex items-center justify-end gap-2 sm:gap-6 h-[6rem] max-w-[32rem]">
              <Link
                target="_blank"
                href="https://www.instagram.com/samirkayamkhani.dev"
                rel="noopener noreferrer"
              >
                <div className="bg-[#F1F1F1] hover:bg-[#ececec] p-4 hover:cursor-pointer text-black h-[30px] w-[30px] sm:h-[38px] sm:w-[38px] rounded-full flex items-center justify-center overflow-hidden border border-white font-semibold">
                  <div className="rounded-full text-[1.5rem] p-2 flex items-center justify-center">
                    <PiInstagramLogoFill />
                  </div>
                </div>
              </Link>
              <Link
                target="_blank"
                href="https://www.facebook.com/share/hKHFJRoUkgXPkcBD/?mibextid=qi20mg"
                rel="noopener noreferrer"
              >
                <div className="bg-[#F1F1F1] hover:bg-[#ececec] p-4 hover:cursor-pointer hidden text-black h-[30px] w-[30px] sm:h-[38px] sm:w-[38px] rounded-full sm:flex items-center justify-center overflow-hidden border border-white font-semibold">
                  <div className="rounded-full text-[1.5rem] p-2 flex items-center justify-center">
                    <FaFacebook />
                  </div>
                </div>
              </Link>
              <Link
                target="_blank"
                href="https://www.linkedin.com/in/samirkayamkhani"
                rel="noopener noreferrer"
              >
                <div className="bg-[#F1F1F1] hover:bg-[#ececec] p-4 hover:cursor-pointer text-black h-[30px] w-[30px] sm:h-[38px] sm:w-[38px] rounded-full flex items-center justify-center overflow-hidden border border-white font-semibold">
                  <div className="rounded-full text-[1.5rem] p-2 flex items-center justify-center">
                    <FaLinkedin />
                  </div>
                </div>
              </Link>
              <Link
                target="_blank"
                href="https://x.com/samirkyamkhani"
                rel="noopener noreferrer"
              >
                <div className="bg-[#F1F1F1] hover:bg-[#ececec] p-4 hover:cursor-pointer text-black h-[30px] w-[30px] sm:h-[38px] sm:w-[38px] rounded-full flex items-center justify-center overflow-hidden border border-white font-semibold">
                  <div className="rounded-full text-[1.5rem] p-2 flex items-center justify-center">
                    <FaSquareXTwitter />
                  </div>
                </div>
              </Link>
              <Link href="contact-info">
                <div className="bg-[#F1F1F1] hover:bg-[#ececec] p-4 hover:cursor-pointer text-black h-[30px] w-[30px] sm:h-[38px] sm:w-[38px] rounded-full flex items-center justify-center overflow-hidden border border-white font-semibold">
                  <div className="rounded-full text-[1.5rem] p-2 flex items-center justify-center">
                    <MdOutgoingMail />
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* SubNav component */}
        <div className="w-full py-4 mt-10 sm:mt-5 flex justify-center">
          <div className="w-[952px] max-w-[952px] flex justify-between items-center px-[1.2rem] mt-[-0.5rem] sm:px-[1rem] lg:px-0 md:mt-[-0.2rem] lg:mt-0 overflow-x-auto space-x-4 no-scrollbar font-semibold">
            <Link href="/">
              <div className="flex-shrink-0 hover:text-[#1E3B0B] hover:font-semibold relative group">
                <TbHomeFilled className="sm:hidden text-[1.3rem]" />
                <div className="hidden sm:flex">Home</div>
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#1E3B0B] scale-x-0 group-active:scale-x-100 transition-transform"></span>
              </div>
            </Link>
            <Link href="/about">
              <div className="flex-shrink-0 hover:text-[#1E3B0B] hover:font-semibold relative group">
                <FaUserGraduate className="sm:hidden text-[1.2rem]" />
                <div className="hidden sm:flex">About</div>
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#1E3B0B] scale-x-0 group-active:scale-x-100 transition-transform"></span>
              </div>
            </Link>
            <Link href="/works">
              <div className="flex-shrink-0 hover:text-[#1E3B0B] hover:font-semibold relative group">
                <MdWorkHistory className="sm:hidden text-[1.3rem]" />
                <div className="hidden sm:flex">Work</div>
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#1E3B0B] scale-x-0 group-active:scale-x-100 transition-transform"></span>
              </div>
            </Link>
            <Link href="/service-offerings">
              <div className="flex-shrink-0 hover:text-[#1E3B0B] hover:font-semibold relative group">
                <RiServiceFill className="sm:hidden text-[1.3rem]" />
                <div className="hidden sm:flex">Services</div>
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#1E3B0B] scale-x-0 group-active:scale-x-100 transition-transform"></span>
              </div>
            </Link>
            <Link href="/contact-info">
              <div className="flex-shrink-0 hover:text-[#1E3B0B] hover:font-semibold relative group">
                <IoMdContacts className="sm:hidden text-[1.3rem]" />
                <div className="hidden sm:flex">Contact</div>
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#1E3B0B] scale-x-0 group-active:scale-x-100 transition-transform"></span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
