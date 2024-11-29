import React from "react";
import Card from "./Card";
import Image from "next/image";

export default function About() {
  return (
    <>
      <div className="w-full flex justify-center bg-[#F5F4F0] py-4 mt-[-1rem] sm:mt-[-1rem]">
        <div className="w-full max-w-[952px] px-4 py-6 sm:px-6 md:px-8 lg:px-8 bg-white rounded-2xl grid grid-cols-1 sm:grid-cols-2 gap-0">
          {/* First Column: Custom Card */}
          <div className="flex justify-center w-full">
            <div className="w-full max-w-[17rem] sm:max-w-[20rem] md:max-w-[25rem] h-fit shadow-lg rounded-2xl bg-white text-[#192025] overflow-hidden flex flex-col mt-4 sm:ml-[-3rem] md:ml-[-4rem]">
              {/* Header */}
              <div className="bg-white px-4 py-2 flex items-center gap-2">
                <div className="w-9 h-9  overflow-hidden  border-black/5 border-2   bg-cover bg-center rounded-full ">
                  <Image
                  alt="profile"
                    src="/profile.jpg"
                    className="scale-[3] object-cover mt-5 ml-[-0.7rem]"
                  />
                </div>

                <div className="text-sm sm:text-base font-semibold capitalize">
                  Samir Kayamkhani
                </div>
              </div>
              {/* Image */}
              <Image
                src="/cam2.jpg"
                className="w-full h-auto aspect-square object-cover"
                alt="Sameer"
              />
              {/* Footer */}
              <div className="bg-white px-4 py-3 flex items-center">
                <div className="text-sm sm:text-base font-normal capitalize">
                  Passionate Full-Stack Developer
                </div>
              </div>
            </div>
          </div>
          {/* Second Column: Card Component */}
          <div className="flex justify-center">
            <Card
              title="About Me"
              desc="At the core of my work is a simple philosophy: build with passion, deliver with excellence. I'm Samir Khan, a full-stack developer with a mission to create digital solutions that not only meet client needs but exceed their expectations. With years of experience I've honed my skills in Web development, SaaS application and E-commerce platforms. What sets me apart is my commitment to quality, innovation, and a user-centric approach in everything I do. My goal is to help businesses grow by providing them with a strong online presence and digital tools that work flawlessly. Let's connect and create something amazing together."
              tags={["Let's", "Connect", "Build", "Together"]}
              CardClassName="shadow-lg w-full sm:w-auto"
            />
          </div>
        </div>
      </div>
    </>
  );
}
