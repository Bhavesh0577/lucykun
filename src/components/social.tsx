import { Card } from "@/components/ui/card";
import { ArrowUpRight, Github, Linkedin, Twitter, Youtube, Code2, MessageCircle } from "lucide-react";
import Link from "next/link";

const SocialLinks = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      username: "ncdai",
      url: "https://linkedin.com/in/ncdai",
      icon: Linkedin,
    },
    {
      name: "GitHub",
      username: "ncdai",
      url: "https://github.com/ncdai",
      icon: Github,
    },
    {
      name: "X (Twitter)",
      username: "@iamncdai",
      url: "https://x.com/iamncdai",
      icon: Twitter,
    },
    {
      name: "daily.dev",
      username: "@ncdai",
      url: "https://app.daily.dev/ncdai",
      icon: Code2,
    },
    {
      name: "YouTube",
      username: "@ncdai",
      url: "https://www.youtube.com/@ncdai",
      icon: Youtube,
    },
    {
      name: "Zalo",
      username: "Quaric",
      url: "https://zalo.me/2353934240045322830",
      icon: MessageCircle,
    }
  ];

  return (
    <section className="py-12">
        <h2 className="title mb-8">Connect with me</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {socialLinks.map((link, index) => (
            <Link
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group"
            >
              <Card className="p-4 flex items-center justify-between hover:bg-muted/50 transition-colors duration-200">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-background rounded-md border group-hover:border-foreground/20 transition-colors">
                    <link.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-medium text-sm leading-none">{link.name}</h3>
                    <p className="text-xs text-muted-foreground mt-1">{link.username}</p>
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
              </Card>
            </Link>
          ))}
        </div>
    </section>
  );
};

export default SocialLinks;