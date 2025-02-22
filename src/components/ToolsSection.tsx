"use client";

import { FilePlus, FileMinus, FileText, FileImage, FileCheck, Scale } from "lucide-react";
import ToolCard from "./ToolCard";
const tools = [
  {
    title: "Merge PDF",
    description: "Combine multiple PDFs into one file",
    icon: FilePlus,
  },
  {
    title: "Split PDF",
    description: "Extract pages from your PDF",
    icon: FileMinus,
  },
  {
    title: "Word to PDF",
    description: "Convert Word to PDF format",
    icon: FileText,
  },
  {
    title: "PDF to JPG",
    description: "Convert PDF to image format",
    icon: FileImage,
  },
  {
    title: "Compress PDF",
    description: "Reduce PDF file size",
    icon: Scale,
  },
  {
    title: "PDF to Word",
    description: "Convert PDF to Word format",
    icon: FileCheck,
  },
];
const ToolsSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">PDF Tools</h2>
          <p className="mt-4 text-lg text-gray-600">
            Everything you need to work with PDF in one place
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => (
            <ToolCard
              key={tool.title}
              {...tool}
              onClick={() => console.log(`Clicked ${tool.title}`)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default ToolsSection;