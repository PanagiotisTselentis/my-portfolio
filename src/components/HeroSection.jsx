import { ArrowDown } from "lucide-react";
import { HashLink } from "react-router-hash-link";

export const HeroSection = () => {
    return (
         <section 
         id="hero" 
         className="relative min-h-screen flex flex-col items-center justify-center px-4"
         >
            <div className="container max-w-4xl mx-auto text-center z-10">
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                        <span className="opacity-0 animate-fade-in">Hi, I'm </span>
                        <span className="text-primary opacity-0 animate-fade-in-delay-1">Panagiotis </span>
                        <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">Tselentis</span>
                    </h1>

                    <p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
                        I'm a passionate cybersecurity graduate with a knack for problem-solving and a love for technology.
                    </p>

                    <div className="pt-6 flex flex-wrap justify-center gap-4 opacity-0 animate-fade-in-delay-4">
                    {/* View My Projects */}
                    <HashLink
                        smooth
                        to="#projects"
                        className="px-8 py-3 rounded-full bg-primary text-white font-medium hover:bg-primary/90 transition-all duration-300 hover:scale-105 active:scale-95"
                    >
                        View My Projects
                    </HashLink>

                        {/* Download Resume */}
                        <a
                            href="https://drive.google.com/uc?export=download&id=18rRjGAvoLeh-kSX8mpTR8XNqpPgRxZQR"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-8 py-3 rounded-full border border-primary text-primary font-medium hover:bg-primary hover:text-white hover:shadow-[0_0_20px_rgba(139,92,246,0.5)] transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2"
                        >
                            <ArrowDown className="h-4 w-4" />
                            Download Resume
                        </a>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                <span className="text-sm text-muted-foreground mb-2">Scroll Down</span>
                <ArrowDown className="h-5 w-5 text-primary"/>
            </div>
         </section>
    );
}