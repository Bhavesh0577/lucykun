import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const experiences = [
  {
    company: "Broadridge",
    role: "Intern",
    date: "Present",
    description: "Contributing to the development of mission-critical financial services platforms. Leveraging modern web technologies to build scalable, high-performance applications while ensuring code quality and best practices.",
    skills: ["Scrum", "Agile", "Kafka", "Java", "Spring Boot"]
  }
];

export default function Experience() {
  return (
    <section>
      <h2 className="title mb-12">Experience</h2>
      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="group relative border-l-2 border-muted pl-6 pb-6 last:pb-0"
          >
            <div className="absolute -left-[9px] top-0 h-4 w-4 rounded-full border-2 border-muted bg-background group-hover:border-primary transition-colors" />
            
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
              <h3 className="font-semibold text-lg">{exp.role}</h3>
              <Badge variant="secondary" className="w-fit">
                {exp.date}
              </Badge>
            </div>
            
            <div className="mb-4">
              <a 
              href="https://www.broadridge.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-medium text-foreground hover:text-primary transition-colors underline-offset-4 hover:underline"
              >
              {exp.company}
              </a>
            </div>

            <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
              {exp.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {exp.skills.map((skill) => (
                <Badge key={skill} variant="outline" className="text-xs font-normal">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
