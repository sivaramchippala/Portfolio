import About from "./components/portfolio/About"
import Contact from "./components/portfolio/Contact"
import Experience from "./components/portfolio/Experience"
import Hero from "./components/portfolio/Hero"
import Navigation from "./components/portfolio/Navigation"
import Projects from "./components/portfolio/Projects"
import Skills from "./components/portfolio/Skills"


const App = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div id="hero">
        <Hero />
      </div>
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
