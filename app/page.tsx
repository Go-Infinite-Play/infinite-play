import Navigation from "@/components/Navigation"
import Hero from "@/components/Hero"
import TrustBar from "@/components/TrustBar"
import ProblemSection from "@/components/ProblemSection"
import Services from "@/components/Services"
import Process from "@/components/Process"
import ExpertiseSection from "@/components/ExpertiseSection"
import WorkflowShowcase from "@/components/WorkflowShowcase"
import ResultsSection from "@/components/ResultsSection"
import About from "@/components/About"
import CTA from "@/components/CTA"
import Footer from "@/components/Footer"

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navigation />
      <main>
        <Hero />
        <TrustBar />
        <ProblemSection />
        <Services />
        <Process />
        <ExpertiseSection />
        <WorkflowShowcase />
        <ResultsSection />
        <About />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
