
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center px-4 pt-16 text-center sm:pt-24 lg:px-8">
      <div className="relative mb-8 h-24 w-24 overflow-hidden rounded-2xl shadow-xl sm:h-32 sm:w-32">
        <Image
          src="/app-icon.png"
          alt="DepDok App Icon"
          fill
          className="object-cover"
          priority
        />
      </div>
      <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-black sm:text-5xl md:text-6xl">
        The lightweight, offline-first editor for developers.
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-8 text-gray-500">
        Manage .md, .mermaid, and .todo files with ease. No cloud, no internet—just your files, your way.
      </p>
      <div className="mt-10 flex flex-col items-center gap-x-6 gap-y-4 sm:flex-row">
        <Link
          href="#"
          className="rounded-full bg-black px-8 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        >
          Download for Desktop
        </Link>
        <Link
          href="https://github.com/depdok/depdok"
          className="rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        >
          View on GitHub
        </Link>
      </div>
    </section>
  );
}
