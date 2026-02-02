
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import FeatureStrip from "./components/FeatureStrip";
import FollowJourney from "./components/FollowJourney";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white font-sans text-black">
      <Navbar />
      <main className="flex flex-1 flex-col items-center">
        <Hero />
        <FeatureStrip />
        <FollowJourney />
      </main>
      <footer className="w-full py-8 text-center text-sm text-gray-400">
        <p>&copy; {new Date().getFullYear()} DepDok. All rights reserved.</p>
      </footer>
    </div>
  );
}
