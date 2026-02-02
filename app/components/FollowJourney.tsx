
import Link from "next/link";
import { dmSerif } from "../utils/fonts";

export default function FollowJourney() {
  return (
    <div className="w-full px-4 py-16 md:px-8">
      <div className="mx-auto max-w-4xl overflow-hidden rounded-3xl bg-black">
        <div className="px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className={`${dmSerif.className} text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl`}>
              Follow the Journey
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg/8 text-pretty text-gray-300">
              Join me as I build DepDok in public. Get updates, behind-the-scenes insights, and be part of the development process.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="https://x.com/hudy09"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-black shadow-xs hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >
                Follow on X
              </Link>
              <Link
                href="https://www.threads.com/@hudy9x"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm/6 font-semibold text-white hover:text-gray-200"
              >
                Follow on Threads
                <span aria-hidden="true"> →</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
