"use client";
import Navbar from "./components/Navbar";
import "remixicon/fonts/remixicon.css";
import "./globals.css";
import Footer from "./components/Footer";
import LocomotiveScroll from "locomotive-scroll";
import { useEffect } from "react";

export default function RootLayout({ children }) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const locomotiveScroll = new LocomotiveScroll();
    }
  }, []);

  return (
    <html lang="en">
      <head>
        <title>Raman | Expert Full Stack Developer & AI Integrator</title>
        <meta
          name="description"
          content="Raman is a highly skilled Full Stack Developer with 10+ years of experience in building scalable, user-centric web applications using React, Next.js, Node.js, Laravel, and cutting-edge AI integrations like ChatGPT and GPT-3."
        />
        <meta
          name="keywords"
          content="Full Stack Developer, React Developer, Next.js, Node.js, Laravel, Tailwind CSS, Vue.js, AI Integration, GPT-3, ChatGPT, OpenAI, MongoDB, PostgreSQL, MySQL, AWS, DigitalOcean, Stripe Integration, PayPal, GraphQL, Software Development, Scalable Applications, Web Performance"
        />
        <meta name="author" content="Raman" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
