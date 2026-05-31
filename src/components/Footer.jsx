import { motion } from 'framer-motion';
import { Heart, ArrowUp, Linkedin, Github, Mail } from 'lucide-react';

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const currentYear = new Date().getFullYear();

    return (
        <footer className="relative" style={{ background: '#f1f5f9' }}>
            {/* Gradient top line */}
            <div className="h-[2px] bg-gradient-to-r from-cyan-400 via-violet-500 to-fuchsia-500" />

            <div className="container-custom py-12">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Logo & Copyright */}
                    <div className="text-center md:text-left">
                        <motion.a
                            href="#home"
                            onClick={(e) => { e.preventDefault(); scrollToTop(); }}
                            className="text-2xl font-bold font-grotesk inline-block mb-2"
                            whileHover={{ scale: 1.05 }}
                        >
                            <span className="gradient-text">Sumit</span>
                            <span className="text-heading">.</span>
                        </motion.a>
                        <p className="text-muted text-sm font-medium">
                            &copy; {currentYear} Sumit Mewada. Engineering digital excellence.
                        </p>
                    </div>

                    {/* Made with love */}
                    <div className="flex items-center gap-1.5 text-muted text-sm font-medium">
                        <span>Innovating with</span>
                        <Heart size={14} className="text-red-500 fill-red-500 animate-pulse" />
                        <span>from Bhopal, India</span>
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center gap-3">
                        <motion.a
                            href="https://www.linkedin.com/in/sumit-mewadaa420"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1, y: -2 }}
                            className="w-10 h-10 rounded-xl bg-white border border-surface-300 flex items-center justify-center text-body hover:text-white hover:bg-blue-600 hover:border-blue-600 transition-all shadow-sm"
                        >
                            <Linkedin size={18} />
                        </motion.a>
                        <motion.a
                            href="https://github.com/Sumit785-dot"
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.1, y: -2 }}
                            className="w-10 h-10 rounded-xl bg-white border border-surface-300 flex items-center justify-center text-body hover:text-white hover:bg-gray-800 hover:border-gray-800 transition-all shadow-sm"
                        >
                            <Github size={18} />
                        </motion.a>
                        <motion.a
                            href="mailto:sumitmewada736@gmail.com"
                            whileHover={{ scale: 1.1, y: -2 }}
                            className="w-10 h-10 rounded-xl bg-white border border-surface-300 flex items-center justify-center text-body hover:text-white hover:bg-red-500 hover:border-red-500 transition-all shadow-sm"
                        >
                            <Mail size={18} />
                        </motion.a>
                    </div>
                </div>
            </div>

            {/* Scroll to top button */}
            <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="fixed bottom-8 right-8 w-12 h-12 rounded-full text-white flex items-center justify-center shadow-colored-lg z-40 transition-shadow"
                style={{ background: 'linear-gradient(135deg, #06b6d4, #8b5cf6)' }}
                aria-label="Scroll to top"
            >
                <ArrowUp size={20} />
            </motion.button>
        </footer>
    );
};

export default Footer;
