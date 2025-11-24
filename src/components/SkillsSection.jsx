// ...existing code...
import { useState } from "react";
import { cn } from "../lib/utils";

const skills = [
    // Recon / Reconnaissance
    { name: "OSINT (Google, Shodan)", level: 70, category: "Recon" },
    { name: "Nmap / Port Scanning", level: 75, category: "Recon" },
    { name: "Subdomain Discovery", level: 60, category: "Recon" },

    // Web Application
    { name: "Burp Suite", level: 70, category: "Web" },
    { name: "SQL Injection", level: 60, category: "Web" },
    { name: "XSS (Cross-Site Scripting)", level: 60, category: "Web" },
    { name: "OWASP Top 10", level: 65, category: "Web" },

    // Network / Exploitation
    { name: "Metasploit Basics", level: 60, category: "Network" },
    { name: "Wireshark / Traffic Analysis", level: 60, category: "Network" },
    { name: "Service/Fingerprint Analysis", level: 65, category: "Network" },

    // Scripting / Tools
    { name: "Python (scripting)", level: 80, category: "Scripting" },
    { name: "Bash", level: 75, category: "Scripting" },
    { name: "PowerShell (basic)", level: 55, category: "Scripting" },
    { name: "Git & GitHub", level: 70, category: "Scripting" },
];

const categories = ["All", "Recon", "Web", "Network", "Scripting"];

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredSkills = skills.filter(
        (skill) => activeCategory === "All" || skill.category === activeCategory
    );

    return(
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary">Skills</span>
                </h2>

                {/* Category Filters */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {categories.map((category, key) => (
                        <button
                            key={key}
                            onClick={() => setActiveCategory(category)}
                            className={cn(
                                "px-5 py-2 rounded-full transition-colors duration-300",
                                activeCategory === category
                                    ? "bg-primary text-foreground"
                                    : "bg-background/50 text-foreground/80 hover:bg-primary/70 hover:text-foreground"
                            )}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredSkills.map((skill, key) => (
                        <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                            <div className="text-left mb-4">
                                <h3 className="font-semibold text-lg">{skill.name}</h3>
                            </div>

                            <div className="w-full bg-background/20 rounded-full overflow-hidden h-4">
                                <div
                                    className="bg-primary h-2 rounded-full origin-left transition-all duration-700"
                                    style={{ width: skill.level + "%" }}
                                />
                            </div>

                            <div className="text-right mt-1">
                                <span className="text-sm text-muted-foreground">{skill.level}%</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
// ...existing code...