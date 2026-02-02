
import Image from "next/image";

export default function AppDemo() {
  return (
    <section className="mt-8 flex w-full justify-center px-4 pb-8 sm:mt-12 md:px-8">
      <div className="relative aspect-[16/10] w-full max-w-5xl overflow-hidden rounded-xl bg-gray-100 shadow-2xl ring-1 ring-gray-900/10">
        <Image
          src="/Screenshot 2026-02-02 at 22.08.32.png"
          alt="DepDok Application Screenshot"
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1152px"
          priority
        />
      </div>
    </section>
  );
}
