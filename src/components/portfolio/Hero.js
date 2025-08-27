
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react"
import { Instagram } from "lucide-react";
import hero from "../portfolio/portfolioprofile.png"
import { Button } from "../ui/Button"

const Hero = () => {
  return (
    <section className="min-h-screen hero-gradient flex items-center justify-center relative overflow-hidden
                sm:top-0 top-20">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
      // style={{ backgroundImage: `url(${heroBg})` }}
      ></div>

      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10"></div>
      <div className="absolute top-40 right-20 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float"></div>
      <div
        className="absolute bottom-20 left-20 w-96 h-96 bg-primary-glow/10 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "1s" }}
      ></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col-reverse md:flex-row items-center md:items-start gap-10 animate-slide-up">

          {/* Text + Buttons Section */}
          <div className="flex-1 text-center md:text-left">
            <div className="mb-8">
              <h1 className="text-4xl md:text-6xl font-bold mb-4">
                <span className="text-gradient">Sivaram</span> Chippala
              </h1>
              <h2 className="text-xl md:text-2xl text-muted-foreground mb-6">
                React Developer & Frontend Specialist
              </h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-2xl leading-relaxed">
                Passionate React developer with 22+ months of experience building scalable web applications
                using modern technologies. Specialized in React, Next.js, and AWS cloud services.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-row flex-wrap items-center justify-center md:justify-start gap-4 mb-12">
              <a href="mailto:chippalasivaram418@gmail.com">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-accent text-accent hover:bg-accent hover:text-accent-foreground flex items-center"
                >
                  <Mail className="h-5 w-5" />
                  <span className="hidden sm:inline ml-2">Get In Touch</span>
                </Button>
              </a>

              <Button
                variant="outline"
                size="lg"
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground flex items-center"
                onClick={() => window.open("https://github.com/sivaramchippala", "_blank")}
              >
                <Github className="h-5 w-5" />
                <span className="hidden sm:inline ml-2">GitHub</span>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground flex items-center"
                onClick={() => window.open("https://www.linkedin.com/in/sivaram-chippala", "_blank")}
              >
                <Linkedin className="h-5 w-5" />
                <span className="hidden sm:inline ml-2">LinkedIn</span>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground flex items-center"
                onClick={() =>
                  window.open(
                    "https://www.instagram.com/ram__for__you__?igsh=MWs4MHZ4NzExdjI0aA==",
                    "_blank"
                  )
                }
              >
                <Instagram className="h-5 w-5" />
                <span className="hidden sm:inline ml-2">Instagram</span>
              </Button>
            </div>


            {/* Location + Chevron */}
            <div>
              <p className="text-muted-foreground mb-4">
                Based in Guntur, Andhra Pradesh, India
              </p>
              <div className="w-full flex justify-center sm:justify-start animate-bounce">
                <ChevronDown className="h-8 w-8 text-accent" />
              </div>
            </div>
          </div>

          {/* Profile Image on Right Side */}
          <div className="flex-shrink-0 mr-0 md:mr-8 order-2 w-full md:w-auto">
            <img
              src={hero} // use "/profile.jpg" if inside public
              alt="Sivaram Chippala"
              className="w-full 
               max-w-[140px] sm:max-w-[180px] md:max-w-[220px] lg:max-w-[350px] xl:max-w-[350px]
               aspect-square object-cover rounded-2xl
               border-2 border-transparent 
               transition-all duration-500 hover:scale-105 hover:border-gradient hover:shadow-glow
               mx-auto custom-image"
            />
          </div>
        </div>
      </div>


    </section >
  )
}

export default Hero
