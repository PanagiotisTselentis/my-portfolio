import { HeroSection } from "../components/HeroSection";
import { Navbar } from "../components/Navbar";
import { StarBackground } from "../components/StarBackground";
import { ThemeToggle } from "../components/ThemeToggle";

export const Home = () => {
    return ( 
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">

            {/* Theme Toggle Button */}
            <ThemeToggle />

            {/* Background Animation */}
            <StarBackground />

            {/*Navbar Component */}
            <Navbar />

            {/* Main Content Section */}
            <main>
                <HeroSection />
            </main>


            {/* Footer Component */}
        </div>
    );
}
    