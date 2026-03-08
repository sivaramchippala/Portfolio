
import {
  ChevronDown,
  Github,
  Linkedin,
  Mail,
} from "lucide-react"
import { Instagram } from "lucide-react";
import { FaAws, FaBootstrap, FaCss3Alt, FaDatabase, FaGitAlt, FaGithub, FaHtml5, FaJs, FaNodeJs, FaReact } from "react-icons/fa6"
import { SiMongodb, SiNextdotjs, SiTypescript } from "react-icons/si"
import hero from "../portfolio/portfolioprofile.png"
import { Button } from "../ui/Button"
const outerRadius = 150
const innerRadius = 110
const Hero = () => {
  const outerRingSkills = [
    { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
    { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
    { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
    { name: "React", icon: FaReact, color: "#61DAFB" },
    { name: "Next.js", icon: SiNextdotjs, color: "#FFFFFF" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "Bootstrap", icon: FaBootstrap, color: "#7952B3" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "Git", icon: FaGitAlt, color: "#F05032" },
    { name: "GitHub", icon: FaGithub, color: "#FFFFFF" },
  ]

  const innerRingSkills = [
    { name: "Node.js", icon: FaNodeJs, color: "#5FA04E" },
    { name: "AWS", icon: FaAws, color: "#FF9900" },
    { name: "S3", icon: FaDatabase, color: "#569A31" },
    { name: "Git", icon: FaGitAlt, color: "#F05032" },
    { name: "GitHub", icon: FaGithub, color: "#FFFFFF" },
    { name: "React", icon: FaReact, color: "#61DAFB" },
  ]

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
                    "https://www.instagram.com/ramai.world?igsh=em1laDAxbzlsaTF6",
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
          <div className="flex-shrink-0 mr-4 md:mr-8 order-2 w-full md:w-auto">
            <div className="relative mx-auto h-[300px] w-[300px] sm:h-[330px] sm:w-[330px] md:h-[360px] md:w-[360px]">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent/20 via-primary/10 to-cyan-400/20 blur-2xl scale-90"></div>

              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 pointer-events-none">
                  <div
                    className="relative w-full h-full animate-spin"
                    style={{ animationDuration: "30s" }}
                  >
                    {outerRingSkills.map((skill, index) => {
                      const Icon = skill.icon
                      const angle = (360 / outerRingSkills.length) * index

                      return (
                        <div
                          key={skill.name}
                          className="absolute left-1/2 top-1/2"
                          style={{
                            transform: `translate(-50%, -50%) rotate(${angle}deg) translate(${outerRadius}px) rotate(-${angle}deg)`
                          }}
                        >
                          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-accent/40 bg-background/70 backdrop-blur-sm shadow-lg">
                            <Icon className="h-4 w-4" style={{ color: skill.color }} />
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </div>

                <div
                  className="absolute inset-0 animate-spin"
                  style={{ animationDuration: "20s", animationDirection: "reverse" }}
                >
                  {innerRingSkills.map((skill, index) => {
                    const Icon = skill.icon
                    const angle = (360 / innerRingSkills.length) * index

                    return (
                      <div
                        key={skill.name}
                        className="absolute left-1/2 top-1/2"
                        style={{
                          transform: `translate(-50%, -50%) rotate(${angle}deg) translate(${innerRadius}px) rotate(-${angle}deg)`
                        }}
                      >
                        <div className="flex h-9 w-9 items-center justify-center rounded-full border border-cyan-300/40 bg-background/55 backdrop-blur-sm shadow-lg">
                          <Icon className="h-4 w-4" style={{ color: skill.color }} />
                        </div>
                      </div>
                    )
                  })}
                </div>
              </div>

              <div className="absolute left-1/2 top-1/2 z-10 w-[150px] h-[150px] sm:w-[170px] sm:h-[170px] md:w-[190px] md:h-[190px] -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-accent/60 bg-transparent shadow-[0_0_60px_hsl(195_100%_60%_/_0.25)] overflow-hidden">
                <img
                  src={hero}
                  alt="Sivaram Chippala"
                  className="h-full w-full object-cover rounded-full bg-transparent mix-blend-multiply transition-all duration-500 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </div>
      </div>


    </section >
  )
}

export default Hero
