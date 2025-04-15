"use client";
import dynamic from "next/dynamic";
import React, { useEffect, useRef, useState } from "react";
import SectionHeading from "./components/SectionHeading";
import Image from "next/image";
import { motion } from "motion/react";
import MacHeader from "./components/MacHeader";
import HomeCard from "./components/HomeCard";
import Cards from "./components/Cards/Cards";
import StatsSection from "./components/StatsSection";
import { ToastContainer } from "react-toastify";
import { handleContactForm } from "./form";
import LoadingSpinner from "./components/LoadingSpinner";
import ReCAPTCHA from "react-google-recaptcha";
const CodeEditor = dynamic(() => import("./components/CodeEditor"), {
  ssr: false,
});

const HomePage = () => {
  const [isSending, setSending] = useState(false);
  const formRef = useRef(null);
  const recaptchaRef = useRef(null);

  const handleScroll = () => {
    formRef.current?.scrollIntoView({ behavior: "smooth" });
  };


  return (
    <main className="w-full">
      <ToastContainer theme="dark" />

      <section className="hero bg-neutral-800 w-full py-10 ">
        <div className="flex flex-col lg:flex-row items-center w-[90%] gap-10 mx-auto">
          <div className="w-full lg:w-1/2 relative">
            <span className="animate-bounce bg-blue-300/20 capitalize py-1 ml-10 mb-3 px-2 rounded-sm inline-block text-sm border-[1px] border-blue-500/20 text-blue-500">
              Performance optimization
            </span>
            <motion.h1
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.5,
                ease: [0.87, 0, 0.13, 1],
                staggerChildren: 0.5,
              }}
              className="text-4xl md:text-6xl font-bold"
            >
              Hello!,
              <br />
              <span className="text-gradient"> I’m Raman</span>
            </motion.h1>
            <p className="text-sm md:text-base mt-5">
            I’m a Full-Stack Developer with over 10 years of experience building clean, efficient, and scalable web applications. I’ve worked with teams, startups, and solo founders — helping turn ideas into solid digital products. I care about the details, write code that lasts, and always aim to build things that make a real impact.
            </p>
            <span className="capitalize animate-bounce-fast duration-200 bg-green-300/20 py-1 mt-5 px-2 rounded-sm inline-block text-sm border-[1px] border-green-500/20 text-green-500">
              Security Awareness
            </span>
            <span className="capitalize animate-bounce-slow duration-200 absolute right-0 bottom-5 bg-amber-300/20 py-1 mt-5 px-2 rounded-sm inline-block text-sm border-[1px] border-amber-500/20 text-amber-500">
              Strong UI/UX sense
            </span>
            <span className="capitalize animate-bounce-fast duration-250 absolute right-0 top-20 bg-lime-300/20 py-1 mt-5 px-2 rounded-sm inline-block text-sm border-[1px] border-lime-500/20 text-lime-500">
              Otimized Code
            </span>
            <span className="capitalize animate-bounce duration-250 absolute left-40 md:left-1/2 -bottom-8 md:bottom-3 lg:-bottom-10 bg-rose-300/20 py-1 mt-5 px-2 rounded-sm inline-block text-sm border-[1px] border-rose-500/20 text-rose-500">
              Scalability
            </span>
          </div>
          <div className="w-full lg:w-1/2 bg-neutral-900 rounded-lg overflow-hidden">
            <MacHeader extention="reactjs" text="index" />
            <div className="h-[24rem] grid items-center">
              <CodeEditor />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full mt-15 md:mt-24">
        <SectionHeading text="My Professional" colorText="Skillset" />
        <Cards />
      </section>

      <StatsSection />

      <section className="mt-5 lg:mt-28">
        <div className="w-[90%] mx-auto flex flex-col lg:flex-row items-center">
        <div className="w-full lg:w-1/2 lg:h-96 mb-10 lg:mb-0">
            <Image
              src="/images/about.svg"
              width={400}
              height={300}
              alt="about-img"
              className="w-full h-full"
            />
          </div>
          <div className="w-full lg:w-1/2 pr-1">
            <SectionHeading
              align="text-left"
              text="Crafting Impactful"
              colorText="Web Experiences"
            />
            <p className="text-sm md:text-base mt-3">
            I bring ideas to life through innovative, high-performance web solutions tailored for modern business needs. Every project is built with precision—balancing intuitive design, top-tier security, and scalable architecture to ensure lasting impact.
            </p>
            <p className="text-sm md:text-base mt-3">
            From interactive websites to complex digital platforms, I specialize in delivering custom solutions across industries. With a focus on cutting-edge technology and future-ready practices, I strive to create digital products that are not only functional but also unforgettable.
            </p>
            <p className="text-sm md:text-base mt-3">
              Would you like me to fine-tune it further or add a more
              personalized touch?
            </p>
            <button
              onClick={handleScroll}
              className="bg-teal-500 cursor-pointer px-5 py-2 font-semibold rounded-lg mt-4"
            >
              Let’s Connect
            </button>
          </div>
        </div>
      </section>

      <section className="mt-15 md:mt-28 bg-neutral-800 py-10">
        <SectionHeading text="Things I’ve" colorText="Developed, 
        and Delivered" />
        <HomeCard />
      </section>

      <section className="w-full mt-15 md:mt-24">
        <div className="flex flex-col-reverse lg:flex-row gap-y-8 items-center w-[90%] mx-auto">
          <div className="w-full lg:w-1/2 bg-neutral-900 rounded-lg border-[1px] border-neutral-200/10 overflow-hidden">
            <MacHeader extention="reactjs" text="Contact" />
            <div
              ref={formRef}
              className="grid items-center bg-neutral-900 py-5 px-5 md:px-15"
            >
              <form
                className="w-full grid gap-3"
                onSubmit={(e) => handleContactForm(e, setSending, recaptchaRef)}
              >
                {[
                  {
                    type: "text",
                    name: "name",
                    length: 3,
                    placeholder: "Your Name",
                    pattern: "^[a-zA-Z\\s]{3,}$",
                  },
                  {
                    type: "email",
                    name: "email",
                    length: 3,
                    placeholder: "Your Email",
                    pattern: "^[\\w.-]+@[\\w.-]+\\.[a-zA-Z]{2,}$",
                  },
                  {
                    type: "tel",
                    name: "phone",
                    length: 3,
                    placeholder: "Phone No",
                    pattern: "^[0-9]{10}$",
                  },
                  {
                    type: "text",
                    name: "subject",
                    length: 10,
                    placeholder: "Subject",
                    pattern: "^.{10,}$",
                  },
                ].map((field, ind) => (
                  <input
                    key={`field${ind}`}
                    type={field.type}
                    minLength={field.length}
                    placeholder={field.placeholder}
                    name={field.name}
                    pattern={field.pattern}
                    className="w-full h-11 outline-none rounded-lg py-1 px-2 bg-neutral-800 border-[1px] border-neutral-700"
                  />
                ))}

                <textarea
                  minLength={20}
                  name="message"
                  placeholder="Your Message"
                  className="w-full min-h-20 max-h-30 outline-none rounded-lg py-2 px-2 bg-neutral-800 border-[1px] border-neutral-700"
                ></textarea>

                <div className="flex justify-center">
                  <ReCAPTCHA
                    ref={recaptchaRef}
                    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}
                    theme="dark"
                    size="normal"
                  />
                </div>
                <button
                  disabled={isSending}
                  className="bg-teal-500 disabled:bg-teal-400 cursor-pointer py-2 font-semibold rounded-lg mt-3"
                >
                  {isSending ? <LoadingSpinner /> : "Send Message"}
                </button>
              </form>
            </div>
          </div>
          <div className="w-full lg:w-1/2 grid lg:place-items-center">
            <div className="w-fit">
              <SectionHeading
                align="text-left"
                text="Get in"
                colorText="Touch"
              />
              {[
                {
                  label: "Email",
                  text: "ramanhuf.mehta29@gmail.com",
                  colors: "bg-rose-500/20 text-rose-500",
                  href: "mailto:ramanhuf.mehta29@gmail.com",
                  icon: "ri-mail-send-line",
                },
                {
                  label: "Location",
                  text: "Chandigarh, India",
                  colors: "bg-indigo-500/20 text-indigo-500",
                  href: "https://maps.app.goo.gl/mYuvYExNHsNYbpnT7",
                  icon: "ri-map-pin-line",
                },
                {
                  label: "Contact No",
                  text: " +91-9888462990",
                  colors: "bg-green-500/20 text-green-500",
                  href: "tel:+919888462990",
                  icon: "ri-customer-service-2-line",
                },
              ].map((link) => (
                <a
                  key={link.label}
                  target="_blank"
                  href={link.href}
                  className="flex items-stretch gap-3 mt-8"
                >
                  <span
                    className={`grid w-12 place-items-center shrink-0 rounded-lg ${link.colors}`}
                  >
                    <i className={`${link.icon} text-xl`}></i>
                  </span>
                  <p className="text-sm md:text-base font-regular leading-[1.1]">
                    <span className="block font-semibold text-lg">
                      {link.label}
                    </span>
                    {link.text}
                  </p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
