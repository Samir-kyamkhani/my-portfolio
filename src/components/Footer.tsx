"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaCopy } from "react-icons/fa";

export default function Footer() {
  const [copy, setCopy] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("samirkayamkhani.dev@gmail.com");
    setCopy(true);
  };

  return (
    <>
      {" "}
      <div className="w-full flex justify-center min-w-[21rem] bg-[#F5F4F0] py-4 px-4 sm:px-6 md:px-8 lg:px-6">
        <div className="w-full max-w-[952px] px-4 py-6 sm:px-6 md:px-8 lg:px-8 bg-white rounded-lg shadow-md">
          {/* Header Section */}
          <div className="flex flex-col sm:flex-row sm:justify-between items-center border-b-2 border-[#E9E7E6] pb-4">
            <div className="text-lg font-semibold text-center sm:text-left uppercase hover:text-[#1E3B0B] hover:font-semibold">
              Portfolio
            </div>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-7 mt-4 sm:mt-0">
              <Link href="/">
                <div className="flex-shrink-0 text-sm sm:text-base hover:text-[#1E3B0B] hover:font-semibold relative group ">
                  Home
                  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#1E3B0B] scale-x-0 group-active:scale-x-100 transition-transform origin-left"></span>
                </div>
              </Link>
              <Link href="/about">
                <div className="flex-shrink-0 text-sm sm:text-base hover:text-[#1E3B0B] hover:font-semibold relative group ">
                  About
                  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#1E3B0B] scale-x-0 group-active:scale-x-100 transition-transform origin-left"></span>
                </div>
              </Link>
              <Link href="/service-offerings">
                <div className="flex-shrink-0 text-sm sm:text-base hover:text-[#1E3B0B] hover:font-semibold relative group ">
                  Services
                  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#1E3B0B] scale-x-0 group-active:scale-x-100 transition-transform origin-left"></span>
                </div>
              </Link>
              <Link href="/contact-info">
                <div className="flex-shrink-0 text-sm sm:text-base hover:text-[#1E3B0B] hover:font-semibold relative group ">
                  Contact
                  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#1E3B0B] scale-x-0 group-active:scale-x-100 transition-transform origin-left"></span>
                </div>
              </Link>
            </div>
            <div
              onClick={handleCopy}
              className="bg-[#F1F1F1] hover:bg-[#ececec] uppercase hover:cursor-pointer text-black py-2 px-4 rounded-full mt-4 sm:mt-0 sm:ml-4 flex items-center justify-center text-xs sm:text-sm font-semibold border border-white gap-1"
            >
              {copy ? (
                <>
                  <FaCopy /> Email is Copied!
                </>
              ) : (
                <>
                  <FaCopy /> Copy my email address
                </>
              )}
            </div>
          </div>

          {/* Footer Section */}
          <div className="flex  justify-center mt-3 items-center text-center sm:text-left">
            <div className="text-xs sm:text-sm">
              © 2024 Samir Kayamkhani. All Rights Reserved
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
