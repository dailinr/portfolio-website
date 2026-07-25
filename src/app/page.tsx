import Navbar from '../components/shared/Navbar'
import Sidebar from '../components/shared/Sidebar'
import Hero from '../components/sections/Hero'
import ExperienceSection from '../components/sections/ExperienceSection'

export default function Page() {
  return (
    <main className="bg-background text-foreground">
      <Navbar />
      <Sidebar />
      <Hero />
      <ExperienceSection />
    </main>
  )
}
