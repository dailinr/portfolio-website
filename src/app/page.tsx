import Navbar from '../components/shared/Navbar'
import Sidebar from '../components/shared/Sidebar'
import Hero from '../components/sections/Hero'
import ExperienceSection from '../components/sections/ExperienceSection'
import ProjectsSection from '../components/sections/ProjectsSection'

export default function Page() {
  return (
    <main className="bg-background text-foreground">
      <Navbar />
      <Sidebar />
      <Hero />
      <ExperienceSection />
      <ProjectsSection />
    </main>
  )
}
