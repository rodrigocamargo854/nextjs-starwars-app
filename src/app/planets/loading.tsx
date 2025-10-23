"use client"; 

import { useEffect, useState } from "react";

const messages = [
  "We're fetching your data, thanks for waiting!",
  "Just a moment, organizing everything for you.",
  "Almost there! Your information is loading.",
  "Hold tight! We're processing your request.",
];

export default function Loading() {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []); 

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      
      <div className="mb-8 text-center h-16"> 
        
        <h2 className="text-xl font-semibold text-zinc-700">
          Please wait a moment...
        </h2>
        
        <p className="text-zinc-500 mt-2 transition-opacity duration-1000 ease-in-out">
          {messages[currentMessageIndex]}
        </p>
      </div>

      <div className="flex flex-col gap-4 p-8 w-full max-w-lg bg-white rounded-xl shadow-lg">
        <div className="animate-pulse h-12 bg-zinc-200 rounded-lg" />
        <div className="animate-pulse h-12 bg-zinc-200 rounded-lg" />
        <div className="animate-pulse h-12 bg-zinc-200 rounded-lg" />
        <div className="animate-pulse h-12 w-3/4 bg-zinc-200 rounded-lg" />
      </div>
      
    </div>
  );
}