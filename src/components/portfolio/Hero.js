
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react"
import { Instagram } from "lucide-react";

// import heroBg from "@/assets/hero-bg.jpg"
import { Button } from "../ui/Button"

const Hero = () => {
  return (
    <section className="min-h-screen hero-gradient flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
      // style={{ backgroundImage: `url(${heroBg})` }}
      ></div>

      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10"></div>
      <div className="absolute top-20 right-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float"></div>
      <div
        className="absolute bottom-20 left-20 w-96 h-96 bg-primary-glow/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center animate-slide-up">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              <span className="text-gradient">Sivaram</span> Chippala
            </h1>
            <h2 className="text-2xl md:text-3xl text-muted-foreground mb-6">
              React Developer & Frontend Specialist
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Passionate React developer with 22+ months of experience building scalable web applications
              using modern technologies. Specialized in React, Next.js, and AWS cloud services.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a href="mailto:chippalasivaram418@gmail.com">
              <Button
                size="lg"
                variant="outline"
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
              >
                <Mail className="mr-2 h-5 w-5" />
                Get In Touch
              </Button>
            </a>


            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                size="lg"
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                onClick={() => window.open("https://github.com/sivaramchippala", "_blank")}
              >
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </Button>
            </div>
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                size="lg"
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                onClick={() => window.open("https://www.linkedin.com/in/sivaram-chippala", "_blank")}
              >
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </Button>
            </div>
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                size="lg"
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                onClick={() => window.open("https://www.instagram.com/ram__for__you__?igsh=MWs4MHZ4NzExdjI0aA==", "_blank")}
              >
                <Instagram className="mr-2 h-5 w-5" />
                Instagram
              </Button>
            </div>

          </div>

          <div className="text-center">
            <p className="text-muted-foreground mb-4">
              Based in Guntur, Andhra Pradesh, India
            </p>
            <div className="animate-bounce">
              <ChevronDown className="h-8 w-8 text-accent mx-auto" />
            </div>
          </div>
        </div>
      </div>
    </section >
  )
}

export default Hero
