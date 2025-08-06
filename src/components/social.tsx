import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";

const SocialLinks = () => {
  const socialLinks = [
    {
      name: "LinkedIn",
      username: "ncdai",
      url: "https://linkedin.com/in/ncdai",
      color: "bg-blue-600",
      textColor: "text-white"
    },
    {
      name: "GitHub", 
      username: "ncdai",
      url: "https://github.com/ncdai",
      color: "bg-gray-900 dark:bg-gray-100",
      textColor: "text-white dark:text-gray-900"
    },
    {
      name: "X",
      username: "@iamncdai",
      url: "https://x.com/iamncdai",
      color: "bg-black dark:bg-white",
      textColor: "text-white dark:text-black"
    },
    {
      name: "daily.dev",
      username: "@ncdai",
      url: "https://app.daily.dev/ncdai",
      color: "bg-purple-600",
      textColor: "text-white"
    },
    {
      name: "YouTube",
      username: "@ncdai",
      url: "https://www.youtube.com/@ncdai",
      color: "bg-red-600",
      textColor: "text-white"
    },
    {
      name: "Zalo",
      username: "Quaric",
      url: "https://zalo.me/2353934240045322830",
      color: "bg-blue-500",
      textColor: "text-white"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-foreground mb-8 prose-headings">
          Social Links
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {socialLinks.map((link, index) => (
            <Card key={index} className="group hover:shadow-medium transition-all duration-300 overflow-hidden">
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-6 h-full"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-10 h-10 rounded-lg ${link.color} ${link.textColor} flex items-center justify-center font-bold text-sm`}>
                    {link.name.slice(0, 2)}
                  </div>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200" />
                </div>
                
                <div className="space-y-1">
                  <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-200">
                    {link.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {link.username}
                  </p>
                </div>
              </a>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialLinks;