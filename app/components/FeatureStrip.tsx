
export default function FeatureStrip() {
  const features = [
    "Markdown",
    "Mermaid Diagrams",
    "Auto-Kanban",
    "Multi-tab Support",
  ];

  return (
    <div className="flex flex-wrap items-center justify-center gap-3 px-4 py-8 sm:gap-4">
      {features.map((feature) => (
        <div
          key={feature}
          className="flex items-center rounded-full bg-gray-100 px-4 py-1.5 text-sm font-medium text-gray-600"
        >
          {feature}
        </div>
      ))}
    </div>
  );
}
