"use client";

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';

import { getFeatureIcon } from '../FeatureIcons';

export interface CarouselFeature {
  id: string;
  label: string;
  heading: string;
  subheading: string;
  image: string;
}

const FEATURES: CarouselFeature[] = [
  {
    id: 'markdown',
    label: 'Markdown',
    heading: 'Write technical docs\nwithout losing your place.',
    subheading: 'A full-featured Markdown editor with live preview, outline navigation, minimap structure view, and active heading highlights so long documents stay easy to write and explore.',
    image: '/markdown/markdown-3.png',
  },
  {
    id: 'mermaid',
    label: 'Mermaid',
    heading: 'Turn ideas into diagrams\nas fast as you can think.',
    subheading: 'Create flowcharts, sequence diagrams, and other Mermaid visuals with live editing and instant preview, all inside the same workspace as your docs.',
    image: '/mermaid/mermaid-1.png',
  },
  {
    id: 'plantuml',
    label: 'PlantUML',
    heading: 'Edit technical diagrams\nwith less friction.',
    subheading: 'Build UML and technical diagrams with interactive preview, click into elements to edit faster, add or remove parts visually, and jump back to the exact source line.',
    image: '/plantuml/plantuml-1.png',
  },
  {
    id: 'logger',
    label: 'Logger',
    heading: 'See live logs\nwithout leaving your app.',
    subheading: 'Open a .logger file, stream logs from your code into a tiny local viewer, and filter fast with multi-keyword search like error, timeout, or specific user IDs.',
    image: '/logger/logger.png',
  },
  {
    id: 'excalidraw',
    label: 'Excalidraw',
    heading: 'Sketch rough ideas\nthe way developers actually work.',
    subheading: 'Create and edit hand-drawn style diagrams and whiteboards directly in DepDok with smooth save handling and file watching for a reliable workflow.',
    image: '/excalidraw/excalidraw.png',
  },
  {
    id: 'todo',
    label: 'Todo',
    heading: 'Turn scattered tasks\ninto a clear workflow.',
    subheading: 'Manage your work with todo files that automatically organize into Kanban boards and Week view, so planning feels lightweight instead of complicated.',
    image: '/kanban/kanban-1.png',
  },
  {
    id: 'diff',
    label: 'Diff',
    heading: 'Compare changes side by side\nwith clarity.',
    subheading: 'Review before-and-after differences in supported .format files, making JSON, XML, and other structured content easier to inspect and understand.',
    image: '/diff/Screenshot 2026-04-08 at 22.15.06 1.png',
  },
];

interface CarouselProps {
  onChange?: (feature: CarouselFeature) => void;
  autoSwitchSeconds?: number;
}

export default function Carousel({ onChange, autoSwitchSeconds = 8 }: CarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const goTo = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  // Notify parent whenever active feature changes
  useEffect(() => {
    onChange?.(FEATURES[activeIndex]);
  }, [activeIndex, onChange]);

  // Interval loop — triggers slide advance
  useEffect(() => {
    if (autoSwitchSeconds <= 0) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % FEATURES.length);
    }, autoSwitchSeconds * 1000);
    return () => clearInterval(interval);
  }, [activeIndex, autoSwitchSeconds]);

  const handlePrev = () => goTo(activeIndex === 0 ? FEATURES.length - 1 : activeIndex - 1);
  const handleNext = () => goTo((activeIndex + 1) % FEATURES.length);

  return (
    <section className="mt-8 flex w-full flex-col items-center justify-center px-4 pb-8 sm:mt-12 md:px-8">


      {/* Navigation Bar — below the image */}
      <div className="flex w-full max-w-5xl items-center justify-between gap-4">
        <button
          onClick={handlePrev}
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 shadow-sm transition-colors hover:bg-gray-50 focus:outline-none"
        >
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
        </button>

        <div className="flex flex-1 overflow-x-auto justify-center">
          <div className="flex bg-[#F9F5F0] p-1.5 rounded-full items-center flex-nowrap w-max space-x-1">
            {FEATURES.map((feature, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={feature.id}
                  onClick={() => goTo(index)}
                  className={`flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 ${isActive
                    ? "bg-white text-primary shadow-sm ring-1 ring-gray-200"
                    : "text-gray-500 hover:text-gray-900"
                    }`}
                >
                  {getFeatureIcon(feature.id, "w-4 h-4")}
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
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
        </button>
      </div>

      {/* Preview Image Area */}
      <div
        className="relative mt-8 aspect-[16/10] w-full max-w-5xl overflow-hidden mb-6"
        style={{ filter: "drop-shadow(0 25px 50px rgba(0, 0, 0, 0.15))" }}
      >
        {FEATURES.map((feature, index) => {
          const isActive = index === activeIndex;
          return (
            <div
              key={feature.id}
              className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${isActive ? "opacity-100 z-10" : "opacity-0 z-0"}`}
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

        {/* Circular Progress Ring */}
        {autoSwitchSeconds > 0 && (() => {
          const size = 20;
          const strokeW = 3;
          const radius = (size - strokeW) / 2;
          const circumference = 2 * Math.PI * radius;
          return (
            <div className="absolute bottom-7 right-7 z-20">
              <style>{`
                @keyframes progressRing {
                  0% { stroke-dashoffset: ${circumference}; }
                  100% { stroke-dashoffset: 0; }
                }
              `}</style>
              <svg width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
                {/* Track */}
                <circle
                  cx={size / 2}
                  cy={size / 2}
                  r={radius}
                  fill="rgba(0,0,0,0.25)"
                  stroke="var(--primary)"
                  strokeWidth={strokeW}
                />
                {/* Progress */}
                <circle
                  key={activeIndex}
                  cx={size / 2}
                  cy={size / 2}
                  r={radius}
                  fill="none"
                  stroke="#2B6CB0"
                  strokeWidth={strokeW}
                  strokeLinecap="round"
                  strokeDasharray={circumference}
                  strokeDashoffset={circumference}
                  style={{ animation: `progressRing ${autoSwitchSeconds}s linear forwards` }}
                />
              </svg>
            </div>
          );
        })()}
      </div>


    </section>
  );
}
