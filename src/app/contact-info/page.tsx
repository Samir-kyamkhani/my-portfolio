"use client";

import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaLocationDot, FaXTwitter } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { MdAddCall } from "react-icons/md";
import { useForm } from "@formspree/react";

const InlineWidget = dynamic(
  () => import("react-calendly").then((mod) => mod.InlineWidget),
  { ssr: false }
);

export default function Page() {
  const [showCalendly, setShowCalendly] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    setShowCalendly(true);
  }, []);

  const [state, handleSubmit] = useForm("xrbqglyr");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <div className="w-full flex justify-center min-w-[21rem] bg-[#F5F4F0]">
        <div className="w-full max-w-[952px] px-4 py-6 sm:px-6 md:px-8 lg:px-0">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="flex justify-center w-full">
              <div className="w-full max-w-[20rem] rounded-2xl text-[#192025] flex flex-col mt-4 lg:mt-0">
                <div className="rounded-2xl py-5 px-6 text-[#192025]">
                  <div className="grid gap-8 lg:gap-16 px-2 text-[1.2rem] font-medium mb-4">
                    Contact Info
                  </div>
                  <div className="grid gap-8 lg:gap-16 px-2 text-[1.2rem]">
                    <ContactItem
                      icon={<IoIosMail />}
                      label="Mail Us"
                      text="Samirkayamkhani.dev"
                      p="@gmail.com"
                    />
                    <ContactItem
                      icon={<MdAddCall />}
                      label="Contact Us"
                      text="+91 8764675841"
                    />
                    <ContactItem
                      icon={<FaLocationDot />}
                      label="Location"
                      text="Jaipur, Rajasthan India"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col lg:col-span-2 w-full justify-center items-center">
              <div className="w-full bg-white rounded-2xl py-5 px-6 text-[#192025]">
                <div className="font-semibold text-[1.5rem] mt-4 sm:mt-0 mb-4 text-center lg:text-left">
                  {"Let's work"}{" "}
                  <span className="text-[#1E3B0B]">together.</span>
                </div>
                <div className="mt-4 overflow-hidden">
                  {showCalendly && (
                    <InlineWidget
                      url="https://calendly.com/samirkayamkhani-dev/30min?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=1e3b0b"
                      styles={{
                        width: "100%",
                        height: "700px",
                        overflow: "hidden",
                      }}
                    />
                  )}
                  <style jsx global>{`
                    .calendly-inline-widget,
                    .calendly-inline-widget iframe,
                    .calendly-inline-widget .calendar-view {
                      overflow: hidden !important;
                    }
                    .calendly-inline-widget iframe::-webkit-scrollbar {
                      display: none;
                    }
                    .calendly-inline-widget iframe {
                      -ms-overflow-style: none;
                      scrollbar-width: none;
                    }
                  `}</style>
                </div>

                {isSubmitted ? (
                  <div className="text-[#1E3B0B] text-center font-semibold sm:text-xl md:text-2xl">
                    {"Your message has been sent! I'll contact you soon."}
                  </div>
                ) : (
                  <form className="grid gap-4 lg:gap-7" onSubmit={handleSubmit}>
                    <input
                      name="name"
                      placeholder="Name *"
                      type="text"
                      className="w-full rounded-lg bg-[#FBFBFC] text-[1rem] p-3 outline-none border border-black/10"
                      onChange={handleChange}
                      value={formData.name}
                      required
                    />
                    <input
                      name="email"
                      placeholder="Email *"
                      type="email"
                      className="w-full rounded-lg bg-[#FBFBFC] text-[1rem] p-3 outline-none border border-black/10"
                      onChange={handleChange}
                      value={formData.email}
                      required
                    />
                    <input
                      name="subject"
                      placeholder="Your Subject *"
                      type="text"
                      className="w-full rounded-lg bg-[#FBFBFC] text-[1rem] p-3 outline-none border border-black/10"
                      onChange={handleChange}
                      value={formData.subject}
                      required
                    />
                    <textarea
                      name="message"
                      placeholder="Your Message *"
                      className="w-full rounded-lg bg-[#FBFBFC] text-[1rem] p-3 outline-none border border-black/10"
                      onChange={handleChange}
                      value={formData.message}
                      required
                    />
                    <button
                      type="submit"
                      className="w-full mt-4 bg-[#1E3B0B] text-white text-[1rem] font-medium p-3 rounded-lg hover:bg-[#1a330a] transition-all"
                    >
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>

            <div>
              <div className="flex justify-center w-full lg:mt-[-50rem]">
                <div className="w-full max-w-[17rem] sm:max-w-[20rem] md:max-w-[18rem] min-w-full h-fit shadow-lg rounded-2xl bg-white text-[#192025] overflow-hidden flex flex-col mt-4 p-4 px-4">
                  <div className="w-full h-24 object-cover rounded-full bg-[#FBFBFC] px-3 text-[2rem] flex justify-between items-center gap-2">
                    <Link
                      target="_blank"
                      href="https://www.instagram.com/samirkayamkhani.dev"
                      rel="noopener noreferrer"
                    >
                      <div className="rounded-full bg-white hover:text-[2.2rem] w-full p-2 flex items-center justify-center">
                        <FaInstagram />
                      </div>
                    </Link>
                    <Link
                      target="_blank"
                      href="https://www.facebook.com/share/hKHFJRoUkgXPkcBD/?mibextid=qi20mg"
                      rel="noopener noreferrer"
                    >
                      <div className="rounded-full bg-white hover:text-[2.2rem] w-full p-2 flex items-center justify-center">
                        <FaFacebook />
                      </div>
                    </Link>
                    <Link
                      target="_blank"
                      href="https://www.linkedin.com/in/samirkayamkhani"
                      rel="noopener noreferrer"
                    >
                      <div className="rounded-full bg-white hover:text-[2.2rem] w-full p-2 flex items-center justify-center">
                        <FaLinkedin />
                      </div>
                    </Link>
                    <Link
                      target="_blank"
                      href="https://x.com/samirkyamkhani"
                      rel="noopener noreferrer"
                    >
                      <div className="rounded-full bg-white hover:text-[2.2rem] w-full p-2 flex items-center justify-center">
                        <FaXTwitter />
                      </div>
                    </Link>
                  </div>
                  <div className="mt-4">
                    <div className="text-[0.8rem] font-semibold text-[#BCBCBC]">
                      STAY WITH ME
                    </div>
                    <Link href="contact-info">
                      <div className="text-[1rem] font-semibold mt-1 mb-1 flex justify-between items-center">
                        Profiles
                        <IoArrowForwardCircleOutline className="text-2xl" />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function ContactItem({
  icon,
  label,
  text,
  p,
}: {
  icon: React.ReactNode;
  label: string;
  text: string;
  p?: string;
}) {
  return (
    <div className="flex items-center gap-4 text-[1.2rem]">
      <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-white">
        {icon}
      </div>
      <div>
        <div className="text-[0.8rem] text-[#BCBCBC]">{label}</div>
        <div className="text-[1rem]">{text}</div>
        {p && <div className="text-[1rem]">{p}</div>}
      </div>
    </div>
  );
}
