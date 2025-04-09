import React from "react";
import PageHeading from "../components/PageHeading";

const page = () => {
  return (
    <main className="w-full min-h-screen pt-10">
    <PageHeading text="The Mind Behind" colorText="the Code" />
  
    <section className="w-[90%] mx-auto mt-10">
      <h3 className="text-lg md:text-2xl font-bold mt-5">About Me</h3>
      <p className="text-sm md:text-base mt-3">
        I’ve been building websites and web apps for over 10 years now — not because I had to, but because I genuinely enjoy it. What started as curiosity quickly turned into a career, and I’ve been coding ever since. I work on both the front-end and back-end, using tools like <span className="font-bold">React, Next.js, Laravel, Node.js</span> and others depending on the project.
      </p>
    </section>
  
    <section className="w-[90%] mx-auto mt-10">
      <h3 className="text-lg md:text-2xl font-bold mt-5">My Approach</h3>
      <p className="text-sm md:text-base mt-3">
        I don’t believe in one-size-fits-all. Every product is different, so I take time to understand what the client actually needs before jumping into the code. Most of the time, I’m using <span className="font-bold">Tailwind CSS, Bootstrap,</span> or something custom to bring designs to life. And on the backend, it’s about writing clean, secure code that performs well — using databases like <span className="font-bold">MongoDB, MySQL, PostgreSQL</span>, etc.
      </p>
    </section>
  
    <section className="w-[90%] mx-auto mt-10">
      <h3 className="text-lg md:text-2xl font-bold mt-5">AI & Smart Features</h3>
      <p className="text-sm md:text-base mt-3">
        Lately, I’ve been working more with AI integrations — mostly with <span className="font-bold">OpenAI, GPT-3</span>, and a few custom setups for clients. It’s exciting stuff, but I’m always focused on making it useful instead of just cool. Smart doesn’t have to be complicated.
      </p>
    </section>
  
    <section className="w-[90%] mx-auto mt-10">
      <h3 className="text-lg md:text-2xl font-bold mt-5">Tools I Work With</h3>
      <p className="text-sm md:text-base mt-3">
        I’m comfortable across platforms — WordPress, Shopify, Webflow — and I’m big on clean deployment setups with <span className="font-bold">Git</span>, <span className="font-bold">Bitbucket</span>, and cloud services like <span className="font-bold">AWS</span> and <span className="font-bold">DigitalOcean</span>. I like systems that scale and don’t break randomly at 2 AM.
      </p>
    </section>
  
    <section className="w-[90%] mx-auto mt-10">
      <h3 className="text-lg md:text-2xl font-bold mt-5">Payments & E-Commerce</h3>
      <p className="text-sm md:text-base mt-3">
        I’ve done plenty of payment integrations — <span className="font-bold">Stripe, PayPal, Apple Pay, Google Pay, Afterpay</span>, you name it. Whether it’s for one-time purchases or subscription setups, I try to make the flow simple and reliable for users.
      </p>
    </section>
  
    <section className="w-[90%] mx-auto mt-10">
      <h3 className="text-lg md:text-2xl font-bold mt-5">Let’s Collaborate</h3>
      <p className="text-sm md:text-base mt-3">
        I’m always up for interesting projects — whether you’ve got a detailed plan or just a rough idea. If you’re looking for someone who writes clean code, communicates well, and actually cares about the end result, let’s connect.
      </p>
    </section>
    </main>
  );
};

export default page;
