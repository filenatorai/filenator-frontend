"use client";

import { GraduationCap } from "lucide-react";
const exam = [
    {
        title: "UPSC",
        description: "Civil Services Examination Tool",
    },
    {
        title: "MPPSC",
        description: "State Services Examination Tool",
    },
    {
        title: "Banking",
        description: "Bank PO and Clerk Tool",
    },
    {
        title: "SSC",
        description: "Staff Selection Commission Tool",
    },
];
const ExamToolsSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Exam helper Tools</h2>
          <p className="mt-4 text-lg text-gray-600">
            Everything you need to work with Exam in one place
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {exam.map((exam) => (
                <div
                key={exam.title}
                className="group cursor-pointer p-6 bg-white rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 border border-gray-100 animate-fade-up"
                >
                <div className="flex items-center gap-4 mb-4">
                    <div className="rounded-full bg-accent p-2 group-hover:scale-110 transition-transform duration-200">
                    {/* <GraduationCap className="w-5 h-5 text-primary" /> */}
                    {/* <GraduationCap className="w-5 h-5" style={{ color: "#2D336B" }} /> */}
                    <div
                    className="rounded-full p-2 group-hover:scale-110 transition-transform duration-200"
                    style={{ backgroundColor: "#2D336B" }}
                    >
                    <GraduationCap className="w-5 h-5 text-white" />
                    </div>
                    </div>
                    <h3 className="text-lg font-semibold">{exam.title}</h3>
                </div>
                <p className="text-sm text-gray-600 mb-3">{exam.description}</p>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};
export default ExamToolsSection;