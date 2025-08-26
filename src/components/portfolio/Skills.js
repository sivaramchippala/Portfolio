
import { Badge } from "../ui/Badge";
import { Card } from "../ui/Card";


const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["React", "Next.js", "JavaScript", "HTML5", "CSS3", "Bootstrap", "jQuery", "Responsive Design"],
      color: "bg-accent/20 text-accent border-accent/30"
    },
    {
      title: "Backend & Database",
      skills: ["Node.js", "MongoDB", "SQL Server", "RESTful APIs", "AXIOS", "API Integration"],
      color: "bg-emerald-500/10 text-emerald-600 border-emerald-400/40"
    },
    {
      title: "Cloud & DevOps",
      skills: ["AWS Lambda", "AWS S3", "AWS Cognito", "DynamoDB", "IAM Roles", "API Gateway", "CloudWatch", "EventBridge"],
      color: "bg-orange-400/20 text-orange-400 border-orange-400/30"
    },
    {
      title: "Tools & Technologies",
      skills: ["Git/GitHub", "Bitbucket", "Visual Studio Code", "Postman", "Jira", "TypeScript"],
      color: "bg-green-400/20 text-green-400 border-green-400/30"
    },
    {
      title: "Core Expertise",
      skills: ["State Management", "Context API", "Redux", "Authentication", "Code Optimization", "Debugging", "Testing"],
      color: "bg-purple-400/20 text-purple-400 border-purple-400/30"
    },
    {
      title: "Programming Languages",
      skills: ["JavaScript", "Python", "C#", "Java", "SQL"],
      color: "bg-red-400/20 text-red-400 border-red-400/30"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 xl:px-20">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-6"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A comprehensive overview of the technologies and tools I work with
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card
              key={category.title}
              className="card-gradient p-6 card-hover border-border/50 shadow-lg rounded-2xl
                         animate-slide-up hover:scale-[1.02] "
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-bold mb-4 text-gradient">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className={`${category.color} transition-all duration-200 
                                hover:scale-105 hover:shadow-md`}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Additional Skills */}
        <div className="mt-16 text-center animate-fade-in">
          <Card className="card-gradient p-8 border-border/50 max-w-4xl mx-auto hover:scale-[1.01] transition-transform">
            <h3 className="text-2xl font-bold mb-6 text-gradient">Additional Skills</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold mb-3">Soft Skills</h4>
                <div className="flex flex-wrap gap-2">
                  {["Problem Solving", "Team Collaboration", "Communication", "Adaptability", "Self-Learning"].map((skill) => (
                    <Badge key={skill} variant="outline" className="bg-accent/10 text-accent border-accent/30 hover:scale-105 transition">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-3">Specializations</h4>
                <div className="flex flex-wrap gap-2">
                  {["Manual Testing", "Prompt Engineering", "AWS Integration", "UI/UX Implementation"].map((skill) => (
                    <Badge key={skill} variant="outline" className="bg-accent/10 text-accent border-accent/30 hover:scale-105 transition">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
