import styles from "./App.module.css"
import SiteHeader from "./components/SiteHeader"
import HeroSection from "./components/HeroSection"
import FeaturesSection from "./components/FeaturesSection"
import TestimonialsSection from "./components/TestimonialsSection"
import ContactSection from "./components/ContactSection"
import SiteFooter from "./components/SiteFooter"

function App() {
  return (
    <div className={styles.pageWrapper}>
      <SiteHeader />
      <main>
        <HeroSection />
        <FeaturesSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </div>
  )
}

export default App
