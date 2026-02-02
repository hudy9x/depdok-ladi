"use client";

import { useState } from "react";

export default function FeatureStrip() {
  const features = [
    {
      name: "Markdown",
      screenshot: "/Screenshot 2026-02-02 at 22.08.01.png",
      alt: "Markdown editor with live preview"
    },
    {
      name: "Mermaid Diagrams",
      screenshot: "/Screenshot 2026-02-02 at 22.08.20.png",
      alt: "Mermaid sequence diagram editor"
    },
    {
      name: "Auto-Kanban",
      screenshot: "/Screenshot 2026-02-02 at 22.08.12.png",
      alt: "Todo kanban board organized by days"
    },
    {
      name: "Multi-tab Support",
      screenshot: "/Screenshot 2026-02-02 at 22.08.32.png",
      alt: "Settings and preferences modal"
    },
  ];

  const [selectedFeature, setSelectedFeature] = useState(features[0]);

  return (
    <div className="w-full px-4 py-6">


      {/* Screenshot display */}
      <div className="mt-8 flex justify-center">
        <img
          src={selectedFeature.screenshot}
          alt={selectedFeature.alt}
          className="max-w-full rounded-xl transition-opacity duration-300"
          style={{
            maxHeight: "600px",
            filter: "drop-shadow(0 25px 50px rgba(0, 0, 0, 0.15))"
          }}
        />
      </div>

      {/* Feature badges */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
        {features.map((feature) => (
          <button
            key={feature.name}
            onClick={() => setSelectedFeature(feature)}
            className={`flex items-center rounded-full px-4 py-1.5 text-sm font-medium transition-all ${selectedFeature.name === feature.name
              ? "bg-black text-white shadow-md"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
          >
            {feature.name}
          </button>
        ))}
      </div>

    </div>
  );
}
