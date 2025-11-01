import { useState, useEffect } from "react";
import { cn } from "../lib/utils";
import { Menu, X } from "lucide-react";
import {HashLink} from "react-router-hash-link";

const navItems = [
    { name: 'Home', href: '#hero'},
    { name: 'Skills', href: '#skills'},
    { name: 'Projects', href: '#projects'},
    { name: 'Contact', href: '#contact'},
];

export const Navbar = () => {
    const[isScrolled, setIsScrolled] = useState(false);
    const[isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.screenY > 10)
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    return ( 
        <nav className={cn("fixed w-full z-40 transition-all duration-300", isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-md" : "py-5 bg-transparent")}>

            <div className="container flex items-center justify-between">
                <HashLink smooth to="#hero" className="text-xl font-bold text-primary flex items-center">
                <span className="relative z-10">
                    <span className="text-glow text-foreground">Panagiotis Tselentis</span> Portfolio
                </span>
                </HashLink>


                {/* Desktop Navigation Links */}
                <div className="hidden md:flex space-x-8">
                    {navItems.map((item, key) => (
                        <HashLink
                            key={key}
                            smooth
                            to={item.href}
                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        >
                            {item.name}
                        </HashLink>

                    ))}
                </div>

                {/* Mobile Menu Button */}

                <button 
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                    className="md:hidden p-2 text-foreground z-50"
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                <div className={cn("fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center space-y-8 transition-all duration-300 md:hidden", 
                    isMenuOpen 
                    ? "opacity-100 pointer-events-auto"
                    : "opacity-0 pointer-events-none"
                    )}
                >
                    <div className="flex flex-col space-y-8 text-xl">
                    {navItems.map((item, key) => (
                        <HashLink
                            key={key}
                            smooth
                            to={item.href}
                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        >
                            {item.name}
                        </HashLink>
                    ))}
                </div>
                </div>
            </div>
        </nav>
    );
}