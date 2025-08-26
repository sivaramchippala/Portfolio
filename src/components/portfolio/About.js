import { Card } from "../ui/Card"


const About = () => {
  return (
    <section id="about" className="py-20 bg-section-bg">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-gradient">Me</span>
            </h2>
            <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-stretch">
            <div className="animate-slide-up">
              <Card className="card-gradient p-8 card-hover border-border/50 h-full">
                <h3 className="text-2xl font-bold mb-4 text-accent">My Journey</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  I'm a dedicated React developer with 22+ months of hands-on experience at Dharani Info Technologies,
                  where I've been instrumental in building and maintaining enterprise-level web applications.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  My expertise spans the entire frontend development lifecycle, from creating reusable components
                  to implementing complex state management solutions using Context API and Redux.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  I'm passionate about creating seamless user experiences and staying current with the latest
                  technologies in the React ecosystem.
                </p>
              </Card>
            </div>

            <div className="animate-slide-up" style={{ animationDelay: "0.2s" }}>
              <Card className="card-gradient p-8 card-hover border-border/50 h-full">
                <h3 className="text-2xl font-bold mb-4 text-accent">What I Do</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">
                      Build responsive, user-friendly web applications using React and Next.js
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">
                      Integrate RESTful APIs and manage application state effectively
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">
                      Implement authentication systems using AWS Cognito
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">
                      Work with cloud services including AWS Lambda, S3, and DynamoDB
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-muted-foreground">
                      Collaborate effectively in team environments using Git/GitHub
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>


          <div className="mt-16 animate-fade-in">
            <Card className="card-gradient p-10 border border-border/50 shadow-lg rounded-2xl">
              <h3 className="text-3xl font-bold mb-8 text-accent text-center">Education</h3>

              <div className="grid md:grid-cols-3 gap-6 text-center">
                {/* B.Tech */}
                <div className="bg-background/40 p-6 rounded-xl shadow-sm border border-border/40 
                      hover:shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer">
                  <h4 className="text-lg font-semibold mb-2">Bachelor of Technology - ECE</h4>
                  <p className="text-muted-foreground text-sm">
                    Chalapathi Institute of Technology (JNTU-K) <br />Guntur, Andhra Pradesh •  2023
                  </p>
                  <p className="text-accent font-medium mt-2">7.73 CGPA</p>
                </div>

                {/* Class XII */}
                <div className="bg-background/40 p-6 rounded-xl shadow-sm border border-border/40 
                      hover:shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer">
                  <h4 className="text-lg font-semibold mb-2">Class XII</h4>
                  <p className="text-muted-foreground text-sm">
                    Narayana Junior College <br />Repalle, Andhra Pradesh • 2019
                  </p>
                  <p className="text-accent font-medium mt-2">9.8 CGPA</p>
                </div>

                {/* Class X */}
                <div className="bg-background/40 p-6 rounded-xl shadow-sm border border-border/40 
                      hover:shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer">
                  <h4 className="text-lg font-semibold mb-2">Class X</h4>
                  <p className="text-muted-foreground text-sm">
                    Bhashyam High School <br /> Repalle, Andhra Pradesh • 2017
                  </p>
                  <p className="text-accent font-medium mt-2">9.5 GPA</p>
                </div>
              </div>
            </Card>
          </div>




        </div>
      </div>
    </section>
  )
}

export default About
