
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex w-full items-center justify-between px-6 py-4 md:px-12">
      <div className="flex items-center gap-2">
        <div className="relative h-8 w-8 overflow-hidden rounded-lg">
          <Image
            src="/app-icon.png"
            alt="DepDok Logo"
            fill
            className="object-cover"
          />
        </div>
        <span className="text-lg font-semibold tracking-tight text-black">
          DepDok
        </span>
      </div>
      <Link
        href="https://github.com/depdok/depdok" // Placeholder URL
        className="rounded-full border border-gray-200 px-4 py-1.5 text-sm font-medium text-gray-700 transition-colors hover:border-gray-300 hover:bg-gray-50"
      >
        Follow on GitHub
      </Link>
    </nav>
  );
}
