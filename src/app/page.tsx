import { HeroSection } from "@/components/HeroSection"
import { CTASection } from "@/components/CTASection"
import ToolsSection from "@/components/ToolsSection"
import ExamToolsSection from "@/components/ExamResourceCard"
import AiToolsSection from "@/components/AiToolCards"

export default function Home() {
  return (
    <main>
      <HeroSection />      
      <ToolsSection />
      <ExamToolsSection />
      <AiToolsSection />
      <CTASection />
    </main>
  )
}
