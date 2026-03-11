import { Badge } from "@/components/ui/badge";

const experiences = [
  {
    company: "Broadridge",
    companyUrl: "https://www.broadridge.com/",
    role: "Intern",
    date: "Present",
    description: "Built and shipped an internal tool that handles real production traffic — including a custom load balancer — actively used by an internal team of 50–60 people. The tool is currently being expanded to support cross-functional teams across the org.",
    skills: ["TypeScript", "Next.js", "React", "Node.js", "Python", "FastAPI", "PostgreSQL"]
  }
];

export default function Experience() {
  return (
    <section>
      <h2 className="title mb-12">Experience</h2>
      <div className="space-y-4">
        {experiences.map((exp, index) => (
          <div
            key={index}
            className="group relative rounded-xl border border-border bg-muted/20 p-5 transition-all duration-300 hover:border-muted-foreground/30 hover:bg-muted/40 hover:shadow-sm"
          >
            {/* Timeline dot on the left edge */}
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-1">
              <div>
                <h3 className="font-semibold text-base leading-snug">{exp.role}</h3>
                <a
                  href={exp.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-0.5 inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors underline-offset-4 hover:underline"
                >
                  {exp.company}
                  <svg className="h-3 w-3 opacity-60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
                </a>
              </div>

              {/* Current role badge with pulsing dot */}
              <div className="flex items-center gap-1.5 rounded-full border border-green-500/30 bg-green-500/10 px-2.5 py-0.5 w-fit shrink-0">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
                </span>
                <span className="text-xs font-medium text-green-600 dark:text-green-400">{exp.date}</span>
              </div>
            </div>

            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              {exp.description}
            </p>

            <div className="mt-4 flex flex-wrap gap-1.5">
              {exp.skills.map((skill) => (
                <Badge key={skill} variant="secondary" className="text-xs font-normal px-2 py-0.5">
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
