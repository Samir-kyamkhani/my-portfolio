import Image from "next/image";
import React from "react";

export default function ProjectCard({
  title,
  description,
  img,
  rating,
  tags,
  CardClassName,
  className,
}: {
  title: string;
  description: string;
  img: string;
  rating: number;
  tags: string[];
  className?: string;
  CardClassName?: string;
}) {
  return (
    <>
      <div className={`w-full flex justify-center${className}`}>
        <div className="w-full max-w-[952px] flex justify-center">
          <div
            className={`rounded-2xl  py-5 px-6 text-[#192025] ${CardClassName}`}
          >
            <div className="flex flex-col items-center bg-white rounded-lg min-w-[300px] max-w-[300px] h-[482px] max-h-[482px] shadow-lg">
              <Image
                alt="img"
                src={img}
                className="aspect-square object-cover rounded-t-lg"
              />
              <div className="w-full p-4">
                <div className="text-base sm:text-lg md:text-xl font-semibold">
                  {title}
                </div>
                <div className="text-xs sm:text-sm md:text-base mt-2">
                  {description}
                </div>
                <div className="flex mt-2">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`${
                        i < rating ? "text-yellow-500" : "text-gray-300"
                      } text-sm`}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {tags.slice(0, 3).map((tag, idx) => (
                    <div
                      key={idx}
                      className="py-1 px-3 rounded-full bg-[#F1F1F1] text-[#192025] text-xs sm:text-sm font-medium"
                    >
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
