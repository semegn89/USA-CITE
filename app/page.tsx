import Header from '@/components/Header'
import Hero from '@/components/Hero'
import HowItWorks from '@/components/HowItWorks'
import Services from '@/components/Services'
import About from '@/components/About'
import Contact from '@/components/Contact'
import QuoteForm from '@/components/QuoteForm'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main id="main-content">
      <Header />
      <Hero />
      <HowItWorks />
      <Services />
      <About />
      <Contact />
      <QuoteForm />
      <Footer />
    </main>
  )
}
