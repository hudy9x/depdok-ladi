"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const FEATURES = [
  { id: 'markdown', label: 'Markdown', image: '/markdown/markdown-3.png' },
  { id: 'diff', label: 'Diff', image: '/diff/Screenshot 2026-04-08 at 22.15.06 1.png' },
  { id: 'excalidraw', label: 'Excalidraw', image: '/excalidraw/excalidraw.png' },
  { id: 'kanban', label: 'Kanban', image: '/kanban/kanban-1.png' },
  { id: 'logger', label: 'Logger', image: '/logger/logger.png' },
  { id: 'mermaid', label: 'Mermaid', image: '/mermaid/mermaid-1.png' },
  { id: 'plantuml', label: 'PlantUML', image: '/plantuml/plantuml-1.png' },
  { id: 'week', label: 'Week', image: '/week/week-1.png' },
];

export default function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [timerKey, setTimerKey] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % FEATURES.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [timerKey]);

  const resetTimer = () => setTimerKey((k) => k + 1);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? FEATURES.length - 1 : prev - 1));
    resetTimer();
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % FEATURES.length);
    resetTimer();
  };

  return (
    <section className="mt-8 flex w-full flex-col items-center justify-center px-4 pb-8 sm:mt-12 md:px-8">
      {/* Navigation Bar */}
      <div className="mb-8 flex w-full max-w-5xl items-center justify-between gap-4">
        <button
          onClick={handlePrev}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 shadow-sm transition-colors hover:bg-gray-50 focus:outline-none"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
        </button>

        <div className="flex flex-1 overflow-x-auto no-scrollbar justify-center space-x-2 md:space-x-4">
          <div className="flex bg-[#F9F5F0] p-1.5 rounded-full border border-[#EBE4D5] shadow-inner items-center overflow-x-auto no-scrollbar flex-nowrap w-max space-x-1">
            {FEATURES.map((feature, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={feature.id}
                  onClick={() => { setActiveIndex(index); resetTimer(); }}
                  className={`flex shrink-0 items-center rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 ${isActive
                    ? "bg-white text-[#2B6CB0] shadow-sm ring-1 ring-gray-200"
                    : "text-gray-500 hover:text-gray-900"
                    }`}
                >
                  {feature.label}
                </button>
              );
            })}
          </div>
        </div>

        <button
          onClick={handleNext}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 shadow-sm transition-colors hover:bg-gray-50 focus:outline-none"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </button>
      </div>

      {/* Preview Image Area */}
      <div className="relative aspect-[16/10] w-full max-w-5xl overflow-hidden" style={{ filter: "drop-shadow(0 25px 50px rgba(0, 0, 0, 0.15))" }}>
        {FEATURES.map((feature, index) => {
          const isActive = index === activeIndex;
          return (
            <div
              key={feature.id}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${isActive ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
            >
              <Image
                src={feature.image}
                alt={`${feature.label} Preview`}
                fill
                className="object-cover object-top"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1152px"
                priority={isActive}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}
