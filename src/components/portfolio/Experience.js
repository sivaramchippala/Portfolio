
import { Badge, Building2, Calendar, MapPin } from "lucide-react";
import { Card } from "../ui/Card";

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-section-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Professional <span className="text-gradient">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-6"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            My journey in software development and the impact I've made
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="card-gradient p-8 border-border/50 card-hover animate-slide-up">
            <div className="flex flex-col md:flex-row md:items-start gap-6">
              <div className="flex-1">
                <div className="flex items-start gap-3 mb-4">
                  <Building2 className="h-6 w-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-2xl font-bold text-accent mb-1">
                      Associate Software Developer
                    </h3>
                    <p className="text-xl font-semibold mb-2">
                      Dharani Info Technologies
                    </p>
                    <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>Nov 2023 - Present</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        <span>Guntur, Andhra Pradesh</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mb-6">
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    Working as a React.js developer for 22+ months, focusing on
                    Enterprise Web Applications development with modern
                    technologies and best practices.
                  </p>
                </div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-accent">
                      Key Responsibilities
                    </h4>
                    <ul className="space-y-2">
                      {[
                        "Developed modern, responsive web applications using React.js, Next.js, HTML, CSS, JavaScript, Bootstrap, and jQuery.",
                        "Implemented state management with Context API and Redux, and integrated RESTful APIs with secure AWS Cognito authentication.",
                        "Worked with cloud services including AWS Lambda, S3, DynamoDB, and API Gateway.",
                        "Collaborated with cross-functional teams and prepared test cases for quality assurance and feature development.",
               
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold mb-3 text-accent">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "React.js",
                        "Next.js",
                        "JavaScript",
                        "HTML5",
                        "CSS3",
                        "Bootstrap",
                        "AWS Cognito",
                        "AWS Lambda",
                        "AWS S3",
                        "DynamoDB",
                        "API Gateway",
                        "MongoDB",
                        "Redux",
                        "Context API",
                        "Git/GitHub",
                        "AWS Connect",
                      ].map((tech) => (
                        <span
                          key={tech}
                          className="inline-block bg-gray-100 text-gray-800 border border-gray-300 rounded-full px-3 py-1 text-sm font-medium hover:bg-gray-200 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                  </div>

                  {/* <div>
                    <h4 className="text-lg font-semibold mb-3 text-accent">
                      Achievements
                    </h4>
                    <ul className="space-y-2">
                      {[
                        "Successfully delivered multiple enterprise-level web applications",
                        "Improved application performance through code optimization techniques",
                        "Contributed to team efficiency through effective collaboration and communication",
                        "Maintained high code quality standards with comprehensive testing",
                      ].map((achievement, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-primary-glow rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground">
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div> */}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;
