"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function HomeProjectCard({
  project,
  CardClassName,
}: {
  project: {
    id: string;
    title: string;
    description: string;
    Image: string;
    tag: string;
  }[]; // Adjust this type to match the structure of your objects
  CardClassName?: string;
}) {
  const [displayCount, setDisplayCount] = useState(4);

  useEffect(() => {
    if (window.innerWidth <= 642) {
      setDisplayCount(2);
    }
  }, []);

  return (
    <>
      <div className="w-full flex justify-center py-4">
        <div className="w-full max-w-[952px]">
          <div
            className={`min-w-full max-w-[30rem] flex justify-center flex-col rounded-2xl shadow-lg bg-[#ffffff] py-5 px-6 text-[#192025] ${CardClassName}`}
          >
            <div className="flex justify-between mb-4">
              <div className="text-[#192025] font-semibold">Projects</div>
              <Link href="/works">
                <div className="flex-shrink-0 hover:text-[#1E3B0B] hover:font-semibold text-sm relative group">
                  View more
                  <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#192025] scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                </div>
              </Link>
            </div>
            {project.slice(0, displayCount).map((item, index) => (
              <Link key={item.id} href={`/works/${item.id}`}>
                <div
                  key={index}
                  className={`max-w-[30rem] rounded-lg bg-[#FFFFFF] border-2  border-[#E9E7E6] overflow-hidden text-[#192025] mb-4 ${CardClassName}`}
                >
                  <div className="flex gap-4 items-center">
                    <div className="w-[6rem] h-[6rem] border-[3px] border-none bg-cover bg-center">
                      <Image
                       width={25}
                       height={25}
                        src={item.Image}
                        alt={item.title}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div>
                      <div className="text-sm font-semibold mb-3">
                        {item.title}
                      </div>
                      <div className="mt-[-8px] text-[0.7rem]">
                        {item.description && item.description.length > 110
                          ? item.description.slice(0, 110) + "..."
                          : item.description}
                      </div>
                      {/* <div className="ml-[-5px] mt-2 w-fit py-0 px-2  rounded-full bg-[#c0b6b36c] text-[#192025] text-[0.6rem] font-medium">
                  {item.tag}
                </div> */}
                    </div>
                  </div>
                </div>
              </Link>
            ))}{" "}
          </div>
        </div>
      </div>
    </>
  );
}
