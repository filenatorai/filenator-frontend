import { HeroSection } from "@/components/HeroSection"
import { CTASection } from "@/components/CTASection"
import ToolsSection from "@/components/ToolsSection"
import ExamToolsSection from "@/components/ExamResourceCard"

export default function Home() {
  return (
    <main>
      <HeroSection />      
      <ToolsSection />
      <ExamToolsSection />
      <CTASection />
    </main>
  )
}
