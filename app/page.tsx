import { Hero } from "@/components/hero"
import { SubscribeSection } from "@/components/subscribe-section"
import { NavigationCards } from "@/components/navigation-cards"
import { FeaturesSection } from "@/components/features-section"
import { TechSpecs } from "@/components/tech-specs"
import { Footer } from "@/components/footer"
import { Sub } from "@radix-ui/react-dropdown-menu" 

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <Hero />
      <SubscribeSection />
      <NavigationCards />
      <FeaturesSection />
      <TechSpecs />
      <Footer />
    </div>
  )
}
