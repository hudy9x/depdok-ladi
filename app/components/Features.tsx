
import Image from "next/image";

export default function Features() {
  const features = [
    {
      title: "Markdown Editor",
      description: "Write and preview markdown with live rendering. Perfect for documentation, notes, and content creation.",
      image: "/Screenshot 2026-02-02 at 22.08.01.png",
      alt: "Markdown editor with live preview"
    },
    {
      title: "Smart Todo Management",
      description: "Organize tasks by day with an intuitive kanban-style interface. Stay productive with automatic daily organization.",
      image: "/Screenshot 2026-02-02 at 22.08.12.png",
      alt: "Todo kanban board organized by days"
    },
    {
      title: "Mermaid Diagrams",
      description: "Create sequence diagrams, flowcharts, and more with Mermaid syntax. Visualize complex ideas effortlessly.",
      image: "/Screenshot 2026-02-02 at 22.08.20.png",
      alt: "Mermaid sequence diagram editor"
    }
  ];

  return (
    <section className="w-full px-4 py-16 md:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-black sm:text-4xl">
            Everything you need to stay productive
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Powerful features designed for developers who value simplicity and control
          </p>
        </div>

        <div className="grid gap-12 lg:gap-16">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`flex flex-col gap-8 lg:flex-row lg:items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
            >
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-black">
                  {feature.title}
                </h3>
                <p className="mt-3 text-lg leading-relaxed text-gray-600">
                  {feature.description}
                </p>
              </div>
              <div className="flex-1">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl border border-gray-200 bg-gray-50 shadow-lg">
                  <Image
                    src={feature.image}
                    alt={feature.alt}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
