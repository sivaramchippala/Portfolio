
import { Mail, Phone, MapPin, Linkedin, Github, Send } from "lucide-react";
import { Card } from "../ui/Card";
import { Button } from "../ui/Button";
import { Input } from "../ui/Input";
import { Textarea } from "../ui/Textarea";
import emailjs from "emailjs-com";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      label: "Email",
      value: "chippalasivaram418@gmail.com",
      href: "mailto:chippalasivaram418@gmail.com",
      color: "accent"
    },
    {
      icon: <Phone className="h-6 w-6" />,
      label: "Phone",
      value: "+91 9347595717",
      href: "tel:+919347595717",
      color: "primary-glow"
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      label: "Location",
      value: "Guntur, Andhra Pradesh, India",
      href: "#",
      color: "orange-400"
    },
    {
      icon: <Linkedin className="h-6 w-6" />,
      label: "LinkedIn",
      value: "sivaram-chippala",
      href: "https://www.linkedin.com/in/sivaram-chippala",
      color: "blue-400"
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      'accent': 'bg-accent/10 text-accent border-accent/30',
      'primary-glow': 'bg-primary-glow/10 text-primary-glow border-primary-glow/30',
      'orange-400': 'bg-orange-400/10 text-orange-400 border-orange-400/30',
      'blue-400': 'bg-blue-400/10 text-blue-400 border-blue-400/30'
    };
    return colorMap[color] || 'bg-accent/10 text-accent border-accent/30';
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,     // 🔹 Replace with EmailJS Service ID
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,    // 🔹 Replace with EmailJS Template ID
        form,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY      // 🔹 Replace with EmailJS Public Key
      )
      .then(
        (result) => {
          console.log("Message sent:", result.text);
          alert("✅ Message sent successfully!");
          form.reset();
        },
        (error) => {
          console.error("Error:", error.text);
          alert("❌ Failed to send message. Please try again.");
        }
      );
  }

  return (
    <section id="contact" className="py-20 bg-section-bg">
      <div className="container mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-accent mx-auto rounded-full mb-6"></div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects. Let's connect and discuss how we can work together!
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-stretch">
          {/* Contact Information */}
          <div className="animate-slide-up h-full">
            <Card className="card-gradient p-8 border-border/50 h-full">
              <h3 className="text-2xl font-bold mb-6 text-accent">Contact Information</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Feel free to reach out through any of the following channels. I typically respond within 24 hours.
              </p>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className={`p-3 rounded-lg ${getColorClasses(info.color)} flex-shrink-0`}>
                      {info.icon}
                    </div>
                    <div>
                      <p className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
                        {info.label}
                      </p>
                      <a
                        href={info.href}
                        className="text-foreground hover:text-accent transition-colors duration-200"
                        target={info.href.startsWith('http') ? '_blank' : undefined}
                        rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      >
                        {info.value}
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Social Links */}
              <div className="mt-8 pt-8 border-t border-border">
                <h4 className="font-semibold mb-4 text-accent">Connect on Social</h4>
                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                    asChild
                  >
                    <a href="https://www.linkedin.com/in/sivaram-chippala" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="mr-2 h-5 w-5" />
                      LinkedIn
                    </a>
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-muted text-muted-foreground hover:bg-muted hover:text-muted-foreground"
                    asChild
                  >
                    <a href="https://github.com/sivaramchippala" target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-5 w-5" />
                      GitHub
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-up h-full" style={{ animationDelay: '0.2s' }}>
            <Card className="card-gradient p-8 border-border/50 h-full">
              <h3 className="text-2xl font-bold mb-8 text-accent">Send a Message</h3>
              <form
                className="space-y-6"
                onSubmit={handleSubmit}
              >
                {/* Name & Email */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex flex-col">
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name
                    </label>
                    <Input
                      id="name"
                      name="user_name"
                      placeholder="Your name"
                      className="bg-background/50 border-border focus:border-accent focus:ring-1 focus:ring-accent rounded-md"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <Input
                      id="email"
                      name="user_email"
                      type="email"
                      placeholder="your.email@example.com"
                      className="bg-background/50 border-border focus:border-accent focus:ring-1 focus:ring-accent rounded-md"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="flex flex-col">
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    placeholder="What's this about?"
                    className="bg-background/50 border-border focus:border-accent focus:ring-1 focus:ring-accent rounded-md"
                  />
                </div>

                {/* Message */}
                <div className="flex flex-col">
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project or opportunity..."
                    rows={6}
                    className="bg-background/50 border-border focus:border-accent focus:ring-1 focus:ring-accent resize-none rounded-md"
                  />
                </div>

                {/* Submit Button */}
                <div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full mt-4 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold glow-effect rounded-md"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Send Message
                  </Button>
                </div>
              </form>

            </Card>
          </div>

        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center animate-fade-in">
          <Card className="card-gradient p-8 border-border/50 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-accent">Ready to Start Your Project?</h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              I'm currently available for new opportunities and would love to discuss how I can contribute to your team or project.
              Whether you need a React developer for a short-term project or a long-term collaboration, let's talk!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground font-semibold glow-effect"
                asChild
              >
                <a href="mailto:chippalasivaram418@gmail.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Email Me
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-accent text-accent hover:bg-accent hover:text-accent-foreground"
                asChild
              >
                <a href="https://www.linkedin.com/in/sivaram-chippala" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-5 w-5" />
                  Connect on LinkedIn
                </a>
              </Button>
            </div>
          </Card>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-20 pt-8 border-t border-border text-center">
        <p className="text-muted-foreground">
          © 2024 Sivaram Chippala. Built with React, JavaScript, and Tailwind CSS.
        </p>
      </footer>
    </section>
  );
};

export default Contact;
