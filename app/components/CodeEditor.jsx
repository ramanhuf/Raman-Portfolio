"use client";
import React, { useState, useEffect } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism-tomorrow.css";

const CodeEditor = () => {
  const originalCode = `const profile = {
    name: "Raman",
    title: "Full-Stack Developer",
    hardWorker: true,
    quickLearner: true,
    problemSolver: true,
    yearsOfExperience: 10+,
    hireable: function () {
      return (
        this.hardWorker &&
        this.quickLearner &&
        this.yearsOfExperience >= 10+
      );
    },
  };`;

  const [typedCode, setTypedCode] = useState("");
  const typingSpeed = 40;

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= originalCode.length) {
        setTypedCode(originalCode.substring(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, typingSpeed);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    Prism.highlightAll();
  }, [typedCode]);

  return (
    <pre className="!bg-transparent !px-3 !py-2 h-full text-base overflow-auto">
      <code 
        className="language-javascript block h-full" 
        dangerouslySetInnerHTML={{ __html: typedCode }}
      ></code>
    </pre>
  );
};

export default CodeEditor;