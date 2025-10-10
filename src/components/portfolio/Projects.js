import { Card } from "../ui/Card";
import { Button } from "../ui/Button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "../ui/Tabs";
import { ExternalLink, Github, Server, Database, Cloud, FileText, Badge, PhoneCall, FolderOpen, LayoutDashboard, User } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Envelope Manager",
      description: "A collaborative web application for designing and managing envelopes and letter templates with a team of 4 developers.",
      icon: <FileText className="h-8 w-8" />,
      technologies: ["React", "AWS Cognito", "AWS Lambda", "REST APIs", "Responsive Design"],
      features: [
        "Seamless envelope design with secure user management",
        "Dynamic data handling with API integration and document preview/download"
      ],
      color: "accent"
    },
    {
      title: "Vehicle Maintenance Data Processing App",
      description: "Next.js application for collecting and organizing structured vehicle data across different car makes and models.",
      icon: <Database className="h-8 w-8" />,
      technologies: ["Next.js", "JSON Processing", "Data Validation", "Automated Retrieval"],
      features: [
        "Automated, secure data retrieval with custom cleaning and validation",
        "Dynamic JSON generation with structured formatting and privacy compliance"
      ]
      ,
      color: "primary-glow"
    },
    {
      title: "HTML-to-PDF Generation with AWS Lambda",
      description: "Serverless solution for dynamic PDF generation with field replacement and document merging capabilities.",
      icon: <Cloud className="h-8 w-8" />,
      technologies: ["AWS Lambda", "MongoDB", "S3", "PDF Processing", "Serverless"],
      features: [
        "Personalized document generation with dynamic templates and multi-user PDF support",
        "Secure file handling with document merging and AWS S3 integration"
      ],
      color: "orange-400"
    },
    {
      title: "Redaction Application",
      description: "React-based PDF redaction system with secure authentication and cloud storage integration.",
      icon: <Server className="h-8 w-8" />,
      technologies: ["React", "AWS Cognito", "AWS S3", "PDF Processing", "Authentication"],
      features: [
        "Secure authentication with sensitive data protection",
        "Real-time PDF processing with preview, redaction, and cloud storage"
      ],
      color: "purple-400"
    },
    {
      title: "AWS Connect – Shark Unlock Call Management",
      description: "Cloud-based customer support automation system for managing lockout, calibration, billing, and removal requests with Zoho Desk integration.",
      icon: <PhoneCall className="h-8 w-8" />,
      technologies: ["AWS Connect", "AWS Lambda", "Zoho Desk", "REST APIs"],
      features: [
        "User verification via AWS Connect workflows with fallback options for alternate numbers or new registration",
        "Automated IVR flows with Zoho Desk ticketing and AWS Lambda–based multi-language support"
      ],
      color: "teal-400"
    },
    {
      title: "File Manager – S3 Bucket Management App",
      description: "React-based file manager with secure S3 integration for uploading, organizing, and managing documents in the cloud.",
      icon: <FolderOpen className="h-8 w-8" />,
      technologies: ["React.js", "AWS S3", "AWS Cognito", "REST APIs", "HTML", "CSS", "JavaScript", "Git/GitHub"],
      features: [
        "Drag-and-drop file management with AWS S3 integration for full CRUD operations",
        "Secure authentication with AWS Cognito and role-based access logging"
      ],
      color: "blue-500"
    },


  ];
  const ownProjects = [
    {
      title: "Customer Dashboard with Telegram Bot Integration",
      description: "Interactive React dashboard integrated with Telegram chatbot and Google Sheets automation for managing customer data and communications.",
      icon: <LayoutDashboard className="h-8 w-8" />,
      technologies: ["React.js", "Telegram Bot API", "n8n", "Google Sheets", "Gmail API"],
      features: [
        "Real-time customer updates through Telegram bot with two-way communication synced to dashboard UI",
        "Automated data management and notifications with Google Sheets + Gmail integration"
      ],
      color: "emerald-400"
    },
    {
      title: "Automated Talent Screening (ATS) System",
      description: "An end-to-end React & n8n workflow for candidate application processing, AI-powered resume analysis, and automated HR notifications.",
      icon: <User className="h-8 w-8" />,
      technologies: ["React.js", "n8n", "Google Gemini AI", "Google Sheets", "Gmail API", "PDF Processing"],
      features: [
        "AI-powered resume analysis with compatibility scoring, ATS score, and automated recommendation",
        "Automated candidate and HR notifications via Gmail, with data tracked in Google Sheets"
      ],
      color: "cyan-400"
    },
    {
  title: "TextBin – Secure Text Sharing Platform",
  description: "A React-based platform for quickly sharing and retrieving text snippets using unique share codes, with backend storage on MongoDB and deployment via AWS Amplify, designed for developers and teams to collaborate securely.",
  icon: <FileText className="h-8 w-8" />,
  technologies: ["React.js", "CSS", "REST API", "MongoDB", "AWS Amplify", "Git"],
  features: [
    "Share text securely with unique, auto-generated codes stored in MongoDB for persistent access",
    "Retrieve shared text using a code, copy to clipboard, and manage multiple entries efficiently with real-time updates"
  ],
  color: "violet-400"
}
  ];

  const academicProjects = [
    {
      title: "Child Rescue System Against Bore-Well",
      description: "Robotic rescue system with dual arms, camera, and communication for borewell emergencies.",
      technologies: ["IoT", "Robotics", "Servo Motors", "Camera Integration"]
    },
    {
      title: "E-Notice Board",
      description: "IoT-based dynamic notice display system with wireless control via mobile interface.",
      technologies: ["NodeMCU", "P10 Display", "IoT", "Mobile Interface"]
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      'accent': 'bg-accent/10 text-accent border-accent/30',
      'primary-glow': 'bg-primary-glow/10 text-primary-glow border-primary-glow/30',
      'orange-400': 'bg-orange-400/10 text-orange-400 border-orange-400/30',
      'purple-400': 'bg-purple-400/10 text-purple-400 border-purple-400/30'
    };
    return colorMap[color] || 'bg-accent/10 text-accent border-accent/30';
  };

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-6"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A showcase of my professional and academic projects demonstrating technical expertise
          </p>
        </div>
        {/* Tabs */}
        <Tabs defaultValue="professional" className="w-full">
          <TabsList className="flex justify-center mb-10">
            <TabsTrigger value="professional">Professional Projects</TabsTrigger>
            <TabsTrigger value="own">Own Projects</TabsTrigger>
          </TabsList>

          {/* Professional Projects */}
          <TabsContent value="professional">
            <div className="mb-20">
              <h3 className="text-2xl font-bold mb-8 text-center text-accent">Professional Projects</h3>
              <div className="grid lg:grid-cols-2 gap-8">
                {projects.map((project, index) => (
                  <Card
                    key={project.title}
                    className="card-gradient p-8 border-border/50 card-hover animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-start gap-4 mb-6">
                      <div className={`p-3 rounded-lg ${getColorClasses(project.color)} flex-shrink-0`}>
                        {project.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold mb-2 text-accent">{project.title}</h4>
                        <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h5 className="font-semibold mb-3">Key Features:</h5>
                      <ul className="space-y-2">
                        {project.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-muted-foreground text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h5 className="font-semibold mb-3">Technologies:</h5>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="inline-block bg-blue-50 text-blue-700 border border-blue-200 rounded-full px-3 py-1 text-sm font-medium hover:bg-blue-100 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                    </div>

                    <div className="flex gap-3">
                      {/* <Button variant="outline" size="sm" className="border-accent text-accent hover:bg-accent hover:text-accent-foreground">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Details
                  </Button>
                  <Button variant="outline" size="sm" className="border-muted text-muted-foreground hover:bg-muted hover:text-muted-foreground">
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button> */}
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>
          {/* Own Projects */}
          <TabsContent value="own">
            <div className="mb-20">
              <h3 className="text-2xl font-bold mb-8 text-center text-accent">Own Projects</h3>
              <div className="grid lg:grid-cols-2 gap-8">
                {ownProjects.map((project, index) => (
                  <Card
                    key={project.title}
                    className="card-gradient p-8 border-border/50 card-hover animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex items-start gap-4 mb-6">
                      <div className={`p-3 rounded-lg ${getColorClasses(project.color)} flex-shrink-0`}>
                        {project.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold mb-2 text-accent">{project.title}</h4>
                        <p className="text-muted-foreground leading-relaxed">{project.description}</p>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h5 className="font-semibold mb-3">Key Features:</h5>
                      <ul className="space-y-2">
                        {project.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-muted-foreground text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h5 className="font-semibold mb-3">Technologies:</h5>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="inline-block bg-blue-50 text-blue-700 border border-blue-200 rounded-full px-3 py-1 text-sm font-medium hover:bg-blue-100 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

        </Tabs>
        {/* Academic Projects */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center text-accent">Academic Projects</h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {academicProjects.map((project, index) => (
              <Card
                key={project.title}
                className="card-gradient p-6 border-border/50 card-hover animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h4 className="text-lg font-bold mb-3 text-accent">{project.title}</h4>
                <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="inline-block bg-blue-50 text-blue-700 border border-blue-200 rounded-full px-3 py-1 text-sm font-medium hover:bg-blue-100 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>


              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
