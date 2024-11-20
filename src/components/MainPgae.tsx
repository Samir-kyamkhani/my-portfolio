import Card from "./Card";
import HomeProjectCard from "./HomeProjectCard";
import TestimonialsCard from "./TestimonialsCard";
import About from "./About";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import HomeServicesCard from "./HomeServicesCard";
import Link from "next/link";

const item = [
  {
    id: "1",
    title: "Lightroom preset v2",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    img: "/cam2.jpg",
    tag: "Full Stack",
  },
  {
    id: "2",
    title: "Lightroom preset v2",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    img: "/cam2.jpg",
    tag: "Full Stack",
  },
  {
    id: "3",
    title: "Lightroom preset v2",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    img: "/cam2.jpg",
    tag: "Full Stack",
  },
  {
    id: "4",
    title: "Lightroom preset v2",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
    img: "/cam2.jpg",
    tag: "Full Stack",
  },
];

const cardData = [
  {
    title: "William",
    desc: "Samir Kayamkhani provided an exceptional service in creating a professional website for my small business. I highly recommend Samir Kayamkhani for anyone looking to raise their online presence.",
    // tags: ["React", "Node.js", "JavaScript"],
    profileImg: "/William.jpg",
    rating: 4,
  },
  {
    title: "Christopher",
    desc: "I am extremely impressed by Samir Kayamkhani. They created a stunning sales landing page website for me, perfectly capturing my brand identity and vision. Now i have a strong online presence represents my business. Thank you for your exceptional work!",
    // tags: ["UI/UX", "Design", "Figma"],
    profileImg: "/Christopher.jpg",
    rating: 5,
  },
  // Add more card objects here
];

export default function MainPage() {
  return (
    <>
      {" "}
      <div className="w-full flex justify-center bg-[#F1F1F1] scroll-smooth">
        <div className="w-full max-w-[952px]  px-4 py-6 sm:px-6 md:px-8 lg:px-0 ">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Card
              title="Helping SaaS businesses with High-impact Saas Solutions and Websites that Drive Success"
              desc="Transforming your vision into reality with expert web development, SaaS Solutions, and tailored E-commerce solutions. Let's build something extraordinary together."
              tags={["Developers", "Let's", "Build", "Together"]}
              CardClassName="shadow-lg"
            />
            <div className="hidden sm:block ">
              <HomeProjectCard project={item} />
            </div>
            <div className="sm:hidden mt-[-1.1rem] mb-[14.5rem] sm:mt-[-12rem] md:mt-[-16rem] lg:ml-[-2rem]  ">
              <TestimonialsCard cards={cardData} CardClassName="shadow-lg" />
            </div>
            <div className="sm:hidden">
              <HomeProjectCard project={item} CardClassName="sm:hidden" />
            </div>
            <div className="hidden sm:block sm:mt-[-8rem] sm:mb-[16rem] sm:max-w-full md:mt-[-15rem] md:mb-[14rem] lg:mt-[-18rem]">
              <TestimonialsCard cards={cardData} CardClassName="shadow-lg" />
            </div>
          </div>
          <div className="sm:mt-10 lg:mt-0">
            <HomeServicesCard />
          </div>
          <About />
          <div>
            <div className="flex justify-center w-full">
              <div className="w-full max-w-[17rem] sm:max-w-[25rem]  min-w-full h-fit shadow-lg rounded-2xl bg-white text-[#192025] overflow-hidden flex flex-col mt-4  p-4 px-4">
                <div className="w-full h-24  object-cover rounded-2xl bg-[#FBFBFC] text-[2rem] flex justify-between  sm:justify-center items-center gap-2 pl-2 font-bold">
                  Let's Work together.
                </div>
                <div className="mt-4">
                  <Link href="/contact-info">
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
    </>
  );
}
