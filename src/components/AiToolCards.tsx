"use client";

import Link from "next/link";
import { FileText, Code, Image } from "lucide-react"; // Import relevant icons

const tools = [
  {
    title: "Text Compare",
    description: "Highly Accurate Text Comparer",
    url: "/tools/text-compare",
    icon: <FileText className="w-5 h-5 text-white" />, // FileText icon for text-based tools
  },
  {
    title: "Code Formatter",
    description: "Beautify and format your code",
    url: "/tools/code-formatter",
    icon: <Code className="w-5 h-5 text-white" />, // Code icon for coding tools
  },
  {
    title: "Image Enhancer",
    description: "AI-powered image enhancement",
    url: "/tools/image-enhancer",
    icon: <Image className="w-5 h-5 text-white" />, // Image icon for image processing tools
  },
];

const AiToolsSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">AI Tools</h2>
          <p className="mt-4 text-lg text-gray-600">
            Everything you need to work with AI in one place
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => (
            <Link href={tool.url} key={tool.title}>
              <div className="group cursor-pointer p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100 animate-fade-up">
                <div className="flex items-center gap-4 mb-4">
                  <div
                    className="rounded-full p-2 group-hover:scale-110 transition-transform duration-200"
                    style={{ backgroundColor: "#2D336B" }}
                  >
                    {tool.icon}
                  </div>
                  <h3 className="text-lg font-semibold">{tool.title}</h3>
                </div>
                <p className="text-sm text-gray-600 mb-3">{tool.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AiToolsSection;
