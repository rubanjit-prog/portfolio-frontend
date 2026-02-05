import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Navbar() {
    const location = useLocation();
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    const links = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Projects", path: "/projects" },
        { name: "Contact", path: "/contact" },
    ];

    return (
        <motion.nav
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`fixed top-0 left-0 w-full z-50 transition-all ${scrolled
                    ? "bg-black/90 backdrop-blur border-b border-white/10"
                    : "bg-transparent"
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                {/* Logo */}
                <Link to="/" className="text-xl font-bold tracking-wide">
                    Ruban<span className="text-blue-500"> Jit</span>
                </Link>

                {/* Nav links */}
                <div className="hidden md:flex gap-8">
                    {links.map((link) => {
                        const isActive = location.pathname === link.path;

                        return (
                            <Link
                                key={link.path}
                                to={link.path}
                                className="relative text-sm font-medium text-gray-300 hover:text-white transition"
                            >
                                {link.name}

                                {/* Animated underline */}
                                {isActive && (
                                    <motion.span
                                        layoutId="navbar-underline"
                                        className="absolute -bottom-1 left-0 w-full h-[2px] bg-blue-500"
                                    />
                                )}
                            </Link>
                        );
                    })}
                </div>

                {/* CTA */}
                <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="/contact"
                    className="hidden md:inline-block px-4 py-2 rounded-lg bg-blue-500 text-black font-semibold"
                >
                    Hire Me
                </motion.a>
            </div>
        </motion.nav>
    );
}
