import React from "react";

export default function Card({
  title,
  desc,
  tags,
  icon,
  rating,
  CardClassName,
  className,
  fontclass,
}: {
  title: string;
  desc: string;
  tags?: any;
  icon?: React.ElementType;
  rating?: number;
  className?: string;
  CardClassName?: string;
  fontclass?: string;
}) {
  return (
    <>
      <div className={`w-full flex justify-center  py-4 ${className}`}>
        <div className="w-full max-w-[952px] ">
          <div
            className={`max-w-[25rem] min-w-full rounded-2xl bg-[#FFFFFF] py-5 px-6 text-[#192025] ${CardClassName}`}
          >
            {icon ? (
              <div className="flex items-center mb-4">
                {React.createElement(icon, {
                  className: "w-8 h-8 rounded-full mr-3 ",
                })}
                <div>
                  <div className={`text-lg font-semibold ${fontclass}`}>
                    {title}
                  </div>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <span
                        key={i}
                        className={`${
                          rating !== undefined && i < rating
                            ? "text-yellow-500"
                            : "text-gray-300"
                        } text-sm`}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className={`text-lg font-semibold mb-3 ${fontclass}`}>
                {title}
              </div>
            )}
            <div className="text-[0.8rem]">{desc}</div>
            <div className="flex flex-wrap gap-3">
              {tags?.map((tag: string, idx: number) => (
                <div
                  key={idx}
                  className="mt-4 w-fit py-1 px-3 rounded-full bg-[#F1F1F1] text-[#192025] text-[0.6rem] sm:text-[0.7rem] font-medium"
                >
                  {tag}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
