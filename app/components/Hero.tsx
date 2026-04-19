"use client";

import Image from "next/image";
import Link from "next/link";
import { dmSerif } from "../utils/fonts";
import { useEffect, useState } from "react";
import Carousel, { CarouselFeature } from "./Carousel/Carousel";
import { event } from "../utils/gtag";

export default function Hero() {
  const [downloadUrl, setDownloadUrl] = useState("https://github.com/hudy9x/depdok-ladi/releases/latest");
  const [platform, setPlatform] = useState("macOS");
  const [activeFeature, setActiveFeature] = useState<CarouselFeature | null>(null);
  const [textVisible, setTextVisible] = useState(true);
  const [version, setVersion] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("depdok-version") || "v0.0.1";
    }
    return "v0.0.1";
  });

  useEffect(() => {
    const fetchLatestVersion = async () => {
      try {
        const response = await fetch("https://api.github.com/repos/hudy9x/depdok-ladi/releases/latest");
        const data = await response.json();
        const latestVersion = data.tag_name; // e.g., "v0.0.2"

        setVersion(latestVersion);
        localStorage.setItem("depdok-version", latestVersion);

        const userAgent = window.navigator.userAgent.toLowerCase();
        const isMac = /mac|iphone|ipad|ipod/.test(userAgent);
        const isWindows = /win/.test(userAgent);

        // Extract version number without 'v' prefix for file names
        const versionNumber = latestVersion.replace('v', '');

        if (isWindows) {
          setDownloadUrl(`https://github.com/hudy9x/depdok-ladi/releases/download/${latestVersion}/Depdok_${versionNumber}_x64-setup.exe`);
          setPlatform("Windows");
        } else if (isMac) {
          setDownloadUrl(`https://github.com/hudy9x/depdok-ladi/releases/download/${latestVersion}/Depdok_${versionNumber}_aarch64.dmg`);
          setPlatform("macOS");
        }
      } catch (error) {
        console.error("Failed to fetch latest version:", error);
        // Fallback to default values already set in state
      }
    };

    fetchLatestVersion();
  }, []);

  const handleFeatureChange = (feature: CarouselFeature) => {
    setTextVisible(false);
    setTimeout(() => {
      setActiveFeature(feature);
      setTextVisible(true);
    }, 200);
  };

  const handleDownloadClick = () => {
    console.log('Sending GA event:', { action: 'download', category: 'App', label: platform });
    event({
      action: "download",
      category: "App",
      label: platform,
    });
  };

  return (
    <section className="flex flex-col items-center justify-center px-4 pt-16 text-center sm:pt-24 lg:px-8">
      <div className="mb-8 inline-block rounded-full border border-orange-200 bg-orange-100 px-3 py-1 text-xs font-medium text-orange-600">
        {version}
      </div>
      <div
        className="relative mb-8 h-24 w-24 overflow-hidden rounded-2xl sm:h-32 sm:w-32"
        style={{ filter: "drop-shadow(0 20px 40px rgba(0, 0, 0, 0.15))" }}
      >
        <Image
          src="/app-icon.png"
          alt="DepDok App Icon"
          fill
          className="object-cover"
          priority
        />
      </div>

      <h1 className={`max-w-4xl text-3xl leading-10 sm:leading-16 font-bold tracking-tight text-black sm:text-5xl ${dmSerif.className} transition-opacity duration-200 whitespace-pre-line`} style={{ opacity: textVisible ? 1 : 0 }}>
        {activeFeature ? activeFeature.heading : 'Lightweight, offline-first\neditor for developers.'}
      </h1>
      <p className="mt-6 max-w-2xl text-base sm:text-lg leading-8 text-gray-500 transition-opacity duration-200" style={{ opacity: textVisible ? 1 : 0 }}>
        {activeFeature ? activeFeature.subheading : 'A desktop editor for developers who value privacy. Write markdown with live preview, create Mermaid diagrams, and organize tasks with auto-kanban boards. Everything works offline—no cloud, no internet required. Your files, your way.'}
      </p>

      <div className="w-full flex justify-center mb-12">
        <Carousel onChange={handleFeatureChange} />
      </div>


      <div className="mt-10 flex flex-col items-center gap-x-6 gap-y-4 sm:flex-row">
        <Link
          href={downloadUrl}
          onClick={handleDownloadClick}
          className="rounded-full bg-black px-8 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Download for {platform} (Beta)
        </Link>
        <Link
          href="https://x.com/hudy09"
          className="rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        >
          Follow my journey
        </Link>
      </div>
    </section>
  );
}
