
import Image from "next/image";
import Link from "next/link";
import { dmSerif } from "../utils/fonts";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center px-4 pt-16 text-center sm:pt-24 lg:px-8">
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
      <h1 className={`max-w-4xl text-4xl leading-16 font-bold tracking-tight text-black sm:text-5xl md:text-6xl ${dmSerif.className}`}>
        Lightweight, offline-first<br /> editor for developers.
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-500">
        A desktop editor for developers who value privacy. Write markdown with live preview, create Mermaid diagrams, and organize tasks with auto-kanban boards. Everything works offline—no cloud, no internet required. Your files, your way.
      </p>
      <div className="mt-10 flex flex-col items-center gap-x-6 gap-y-4 sm:flex-row">
        <Link
          href="#"
          className="rounded-full bg-black px-8 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Download for Desktop
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
