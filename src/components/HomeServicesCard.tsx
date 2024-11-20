import React from "react";
import Card from "./Card";
import { FaStore } from "react-icons/fa";
import Link from "next/link";
import { MdMiscellaneousServices } from "react-icons/md";

export default function HomeServicesCard() {
  return (
    <>
      <div className="w-full flex justify-center bg-[#F5F4F0] py-4 mt-[-1rem]">
        <div className="w-full max-w-[952px]  px-4 py-6 sm:px-6 md:px-8 lg:px-0 bg-white rounded-2xl shadow-lg">
          <div className="flex justify-between sm:px-6">
            <div className="text-[#192025] font-semibold">
              Services offering
            </div>
            <Link href="/service-offerings">
              <div className="flex-shrink-0 hover:text-[#1E3B0B] hover:font-semibold text-sm relative group">
                View more
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-[#192025] scale-x-0 group-active:scale-x-100 transition-transform origin-left"></span>
              </div>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2  sm:gap-4">
            <Card
              icon={MdMiscellaneousServices}
              title="SaaS Application"
              desc="Unlock the full potential of your ideas with tailored SaaS applications that are scalable, secure, and perfectly aligned with your business needs."
              rating={5}
            />
            <Card
              icon={FaStore}
              title="E-commerce store"
              desc="Get more client just by building and optimize stores that stand out in the competitive e-commerce landscape."
              rating={5}
            />
          </div>
        </div>
      </div>
    </>
  );
}
