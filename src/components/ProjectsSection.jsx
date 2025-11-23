import { ArrowRight, Github } from "lucide-react"

const projects = [
    {
        id: 1,
        title: "CTF Write-ups",
        description: "A collection of write-ups for various Capture The Flag (CTF) boxes, detailing the challenges faced and solutions implemented for different platforms like HackTheBox, TryHackMe, TCM Security.",
        tags: ["metasploit", "nmap", "burpsuite", "johntheripper", "sqlmap"],
        githubURL: "https://github.com/PanagiotisTselentis/CTF-Writeups"
    },
    {
        id: 2,
        title: "Automated Security Lifecycle: From AI-Powered Hardening to Adversary Emulation",
        description: "Developed a Python framework that leverages a generative AI to automatically create and apply PowerShell scripts for system hardening based on CIS security benchmarks. To validate the effectiveness of these controls, the framework then integrates with MITRE Caldera to programmatically deploy agents and execute automated adversary emulation scenarios against the hardened machine.",
        tags: ["python", "powershell", "generativeAI", "CISBenchmarks", "MITRECaldera"],
        githubURL: "GIVE URL HERE"
    }
]

export const ProjectsSection = () => {
    return <section id="projects" className="py-24 px-4 relative">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Featured <span className="text-primary"> Projects </span></h2>

            <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                Here are some of the projects I've worked on, showcasing my skills and expertise in various technologies.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projects.map((project, key) => (
                    <div key={key} className="group bg-card shadow-md rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
                        <div className="p-6">
                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tags.map((tag, index) => (
                                    <span key={index} className="bg-primary/10 text-primary px-2 py-1 rounded-full text-sm">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                            {project.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                        <div className="flex justify-between items-center">
                                <div className="flex space-x-3">
                                    <a href={project.githubURL} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors duration-300">
                                        <Github />
                                    </a>
                                </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="text-center mt-12">
                <a className="cosmic-button w-fit flex items-center mx-auto gap-2" href="https://github.com/PanagiotisTselentis" target="_blank" rel="noopener noreferrer">
                    Check Out My GitHub <ArrowRight size={16} />
                </a>
            </div>
        </div>
    </section>
}