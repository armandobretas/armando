import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Skills } from '@/components/Skills';
import { Experience } from '@/components/Experience';
import { Projects } from '@/components/Projects';
import { Differentials } from '@/components/Differentials';
import { Contact } from '@/components/Contact';
import { Footer } from '@/components/Footer';
import { Education } from '@/components/Education';
import { ParticlesBackground } from '@/components/ParticlesBackground';

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <ParticlesBackground />
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Differentials />
      <Education />
      <Contact />
      <Footer />
    </main>
  );
}
