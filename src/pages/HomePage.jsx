import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import NowLearning from "../components/NowLearning/NowLearning";
import Skills from "../components/Skills/Skills";
import Projects from "../components/Projects/Projects";
import ContactCTA from "../components/ContactCTA/ContactCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <NowLearning />
      <Skills />
      <Projects limit={3} showViewAll title="Featured Projects" subtitle="— a few things I've built" />
      <ContactCTA />
    </>
  );
}
