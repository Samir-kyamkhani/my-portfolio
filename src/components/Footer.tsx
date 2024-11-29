"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaCopy } from "react-icons/fa";

export default function Footer() {
  const [copy, setCopy] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("samirkayamkhani.dev@gmail.com");
    setCopy(true);
    setTimeout(() => setCopy(false), 2000); // Reset copy state after 2 seconds
  };

  return (
    <div className="w-full flex justify-center bg-[#F1F1F1] py-4 px-4">
      <div className="w-full max-w-[952px] bg-white rounded-lg shadow-md">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row sm:justify-between items-center border-b border-[#E9E7E6] py-4 px-6">
          <div className="text-lg font-semibold text-center sm:text-left uppercase hover:text-[#1E3B0B]">
            Portfolio
          </div>
          <div className="flex flex-wrap justify-center gap-4 mt-4 sm:mt-0">
            {[
              { label: "Home", href: "/" },
              { label: "About", href: "/about" },
              { label: "Services", href: "/service-offerings" },
              { label: "Contact", href: "/contact-info" },
            ].map(({ label, href }) => (
              <Link href={href} key={label}>
                <div className="text-sm sm:text-base hover:text-[#1E3B0B] font-medium relative group">
                  {label}
                  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#1E3B0B] scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                </div>
              </Link>
            ))}
          </div>
          <div
            onClick={handleCopy}
            className="bg-[#F1F1F1] hover:bg-[#ececec] uppercase cursor-pointer text-black py-2 px-4 rounded-full mt-4 sm:mt-0 sm:ml-4 flex items-center justify-center text-xs sm:text-sm font-semibold border border-white gap-2"
          >
            <FaCopy />
            {copy ? "Email Copied!" : "Copy my email address"}
          </div>
        </div>

        {/* Footer Section */}
        <div className="flex justify-center mt-3 py-2 text-center">
          <div className="text-xs sm:text-sm">
            © 2024 Samir Kayamkhani. All Rights Reserved.
          </div>
        </div>
      </div>
    </div>
  );
}
