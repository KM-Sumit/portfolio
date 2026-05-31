import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Achievements', href: '#achievements' },
    { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (e, href) => {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
        setIsOpen(false);
    };

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
                scrolled
                    ? 'glass-nav shadow-soft'
                    : 'bg-white/50 backdrop-blur-sm'
            }`}
        >
            {/* Gradient bottom border */}
            <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-cyan-400 via-violet-500 to-fuchsia-500 opacity-60" />

            <div className="container-custom">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <motion.a
                        href="#home"
                        onClick={(e) => handleNavClick(e, '#home')}
                        className="text-2xl md:text-3xl font-bold font-grotesk"
                        whileHover={{ scale: 1.05 }}
                    >
                        <span className="gradient-text">Sumit</span>
                        <span className="text-heading">.</span>
                    </motion.a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => handleNavClick(e, link.href)}
                                className="relative px-4 py-2 text-sm font-medium text-body hover:text-heading transition-colors group"
                                whileHover={{ y: -1 }}
                            >
                                {link.name}
                                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 rounded-full bg-gradient-to-r from-cyan-400 via-violet-500 to-fuchsia-500 transition-all duration-300 group-hover:w-3/4" />
                            </motion.a>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 rounded-xl text-heading hover:bg-surface-200 transition-colors"
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Navigation - Full Screen Overlay */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.3 }}
                            className="fixed inset-0 top-16 bg-white/95 backdrop-blur-xl md:hidden z-40"
                        >
                            <div className="flex flex-col items-center justify-center h-full gap-2 -mt-16">
                                {navLinks.map((link, index) => (
                                    <motion.a
                                        key={link.name}
                                        href={link.href}
                                        onClick={(e) => handleNavClick(e, link.href)}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.08, duration: 0.4 }}
                                        className="text-2xl font-grotesk font-semibold text-heading hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-cyan-500 hover:via-violet-500 hover:to-fuchsia-500 transition-all py-3"
                                    >
                                        {link.name}
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    );
};

export default Navbar;
