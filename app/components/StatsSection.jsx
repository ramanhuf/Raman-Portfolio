"use client";
import { motion, useInView } from "motion/react";
import { useEffect, useState, useRef } from "react";

const stats = [
  {
    id: 1,
    icon: "ri-emotion-laugh-line text-amber-500",
    value: 90,
    suffix: "+",
    label: "Happy Clients",
  },
  {
    id: 3,
    icon: "ri-briefcase-line text-cyan-500",
    value: 10,
    suffix: "+",
    label: "Years of Experience",
  },
  {
    id: 2,
    icon: "ri-book-shelf-line text-lime-500",
    value: 150,
    suffix: "+",
    label: "Project Complete",
  },
];

const Counter = ({ value, suffix }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    const duration = 4000;
    const incrementTime = 50;

    let timer = setInterval(() => {
      start += Math.ceil(end / (duration / incrementTime));
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

const StatsSection = () => {
  return (
    <div className="bg-neutral-800 mt-28 text-white py-16">
      <div className="container mx-auto grid grid-cols-2 md:grid-cols-3 gap-10 text-center">
        {stats.map((stat, index, arr) => (
          <div
            key={stat.id}
            className={`flex flex-col items-center 
            ${
              arr.length - 1 === index
                ? "justify-self-center col-span-2 md:col-span-1 md:justify-self-auto"
                : ""
            }`}
          >
            <i className={`${stat.icon} text-4xl md:text-5xl`}></i>
            <div className="text-3xl font-bold mt-2">
              <Counter value={stat.value} suffix={stat.suffix} />
            </div>
            <p className="text-sm md:text-base">{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsSection;
