"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";

export default function TestimonialsCard({
  cards,
  CardClassName,
  className,
}: {
  cards: {
    title: string;
    desc: string;
    tags?: string[];
    profileImage: string;
    rating: number;
  }[];
  className?: string;
  CardClassName?: string;
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === cards.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change every 5 seconds

    return () => clearInterval(interval);
  }, [cards.length]);

  return (
    <>
      <div className={`relative w-full flex justify-center py-4 ${className}`}>
        {cards.map((card, index) => (
          <div
            key={index}
            className={`absolute top-0 transition-transform duration-500 ease-in-out ${
              index === activeIndex
                ? "translate-y-0 z-20"
                : "translate-y-4 z-10"
            } ${index < activeIndex ? "opacity-0" : "opacity-100"}`}
            style={{
              transitionDelay: index < activeIndex ? "0ms" : "500ms",
              zIndex: cards.length - index,
            }}
          >
            <div
              className={`max-w-full rounded-2xl bg-[#FFFFFF] py-5 px-6 text-[#192025] ${CardClassName}`}
            >
              <div className="text-[#192025] flex justify-between mb-4">
                <div className="text-[#192025] font-semibold">Reviews</div>
                <Link href="#">
                  <div className="flex-shrink-0 hover:text-[#828688] text-sm relative group">
                    {" "}
                    <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#192025] scale-x-0 group-active:scale-x-100 transition-transform origin-left"></span>
                  </div>
                </Link>
              </div>
              <div className="flex items-center mb-4">
                <Image
                  src={card.profileImage}
                 
                  
                  alt="Profile"
                  className="w-10 h-10 rounded-full mr-3 object-cover"
                />
                <div>
                  <div className="text-sm font-semibold">{card.title}</div>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={`${
                          i < card.rating ? "text-yellow-500" : "text-gray-300"
                        } text-sm`}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="text-[0.8rem] mb-4">{card.desc}</div>
              <div className="flex flex-wrap gap-3">
                {card.tags?.map((tag, idx) => (
                  <div
                    key={idx}
                    className="mt-4 w-fit py-1 px-3 rounded-full bg-[#c0b6b36c] text-[#192025] text-[0.6rem] sm:text-[0.7rem] font-medium"
                  >
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
