import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
    Phone,
    Mail,
    Linkedin,
    Github,
    Download,
    ArrowDown,
    Sparkles
} from 'lucide-react';

const roles = [
    'Team Leader',
    'Full-Stack Developer',
    'AI Enthusiast',
    'Hackathon Winner',
    'React Specialist',
];

const Hero = () => {
    const [roleIndex, setRoleIndex] = useState(0);
    const [displayText, setDisplayText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentRole = roles[roleIndex];
        let timeout;

        if (!isDeleting) {
            if (displayText.length < currentRole.length) {
                timeout = setTimeout(() => {
                    setDisplayText(currentRole.slice(0, displayText.length + 1));
                }, 80);
            } else {
                timeout = setTimeout(() => setIsDeleting(true), 2000);
            }
        } else {
            if (displayText.length > 0) {
                timeout = setTimeout(() => {
                    setDisplayText(currentRole.slice(0, displayText.length - 1));
                }, 40);
            } else {
                setIsDeleting(false);
                setRoleIndex((prev) => (prev + 1) % roles.length);
            }
        }

        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, roleIndex]);

    const socialLinks = [
        { icon: Phone, href: 'tel:+919876543210', label: 'Phone', color: 'hover:text-emerald-500' },
        { icon: Mail, href: 'mailto:sumitmewada736@gmail.com', label: 'Email', color: 'hover:text-red-500' },
        { icon: Linkedin, href: 'https://www.linkedin.com/in/sumit-mewadaa420', label: 'LinkedIn', color: 'hover:text-blue-600' },
        { icon: Github, href: 'https://github.com/Sumit785-dot', label: 'GitHub', color: 'hover:text-gray-900' },
    ];

    const handleScrollToProjects = () => {
        document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center relative overflow-hidden noise-bg"
        >
            {/* Animated gradient orbs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{ x: [0, 50, 0], y: [0, -30, 0], scale: [1, 1.2, 1] }}
                    transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute top-20 -left-20 w-[500px] h-[500px] rounded-full gradient-orb"
                    style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.15) 0%, transparent 70%)' }}
                />
                <motion.div
                    animate={{ x: [0, -40, 0], y: [0, 40, 0], scale: [1, 1.1, 1] }}
                    transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute top-40 -right-20 w-[600px] h-[600px] rounded-full gradient-orb"
                    style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)' }}
                />
                <motion.div
                    animate={{ x: [0, 30, 0], y: [0, -40, 0] }}
                    transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute bottom-20 left-1/3 w-[400px] h-[400px] rounded-full gradient-orb"
                    style={{ background: 'radial-gradient(circle, rgba(217,70,239,0.1) 0%, transparent 70%)' }}
                />
            </div>

            {/* Floating 3D Shapes */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Sphere */}
                <motion.div
                    animate={{ y: [-20, 20, -20], rotate: [0, 360] }}
                    transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute top-32 right-[15%] w-16 h-16 rounded-full hidden lg:block"
                    style={{
                        background: 'linear-gradient(135deg, #06b6d4, #8b5cf6)',
                        boxShadow: '0 20px 40px -10px rgba(6,182,212,0.3), inset 0 -4px 8px rgba(0,0,0,0.1)',
                    }}
                />
                {/* Cube */}
                <motion.div
                    animate={{ y: [10, -15, 10], rotate: [0, 45, 0] }}
                    transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                    className="absolute top-[60%] left-[10%] w-12 h-12 rounded-xl hidden lg:block"
                    style={{
                        background: 'linear-gradient(135deg, #8b5cf6, #d946ef)',
                        boxShadow: '0 20px 40px -10px rgba(139,92,246,0.3), inset 0 -4px 8px rgba(0,0,0,0.1)',
                    }}
                />
                {/* Ring */}
                <motion.div
                    animate={{ y: [-10, 20, -10], rotate: [0, -180, -360] }}
                    transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
                    className="absolute top-[25%] left-[8%] w-20 h-20 rounded-full hidden lg:block"
                    style={{
                        border: '4px solid transparent',
                        borderImage: 'linear-gradient(135deg, #06b6d4, #d946ef) 1',
                        borderRadius: '50%',
                        borderStyle: 'solid',
                        borderWidth: '3px',
                        borderColor: 'rgba(139,92,246,0.3)',
                    }}
                />
                {/* Small dots */}
                <motion.div
                    animate={{ y: [0, -25, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                    className="absolute bottom-[30%] right-[8%] w-4 h-4 rounded-full hidden lg:block"
                    style={{ background: '#06b6d4', boxShadow: '0 8px 20px rgba(6,182,212,0.4)' }}
                />
                <motion.div
                    animate={{ y: [0, 15, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
                    className="absolute top-[45%] right-[20%] w-3 h-3 rounded-full hidden lg:block"
                    style={{ background: '#d946ef', boxShadow: '0 8px 20px rgba(217,70,239,0.4)' }}
                />
            </div>

            <div className="container-custom text-center relative z-10 pt-20">
                {/* Status Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mb-8"
                >
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-emerald-50 border border-emerald-200 text-sm text-emerald-700 font-medium"
                    >
                        <span className="relative flex h-2.5 w-2.5">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
                        </span>
                        Available for opportunities
                    </motion.div>
                </motion.div>

                {/* Main Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold font-grotesk mb-6 text-heading leading-tight">
                        Hi, I'm{' '}
                        <span className="gradient-text-shimmer">Sumit Mewada</span>
                    </h1>
                </motion.div>

                {/* Typing Effect */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-xl sm:text-2xl md:text-3xl text-body mb-4 font-light h-10"
                >
                    <span className="font-mono text-lg sm:text-xl md:text-2xl">
                        <span className="text-accent-violet">{'<'}</span>
                        {' '}{displayText}
                        <motion.span
                            animate={{ opacity: [1, 0] }}
                            transition={{ duration: 0.5, repeat: Infinity }}
                            className="text-accent-cyan font-bold"
                        >
                            |
                        </motion.span>
                        {' '}
                        <span className="text-accent-violet">{'/>'}</span>
                    </span>
                </motion.div>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                    className="text-muted max-w-2xl mx-auto mb-10 text-lg leading-relaxed"
                >
                    Crafting innovative digital experiences with React, Django, and AI integration.
                    Passionate about building solutions that make a difference.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
                >
                    <motion.button
                        onClick={handleScrollToProjects}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn-gradient flex items-center gap-2 text-base"
                    >
                        View Projects
                        <ArrowDown size={18} />
                    </motion.button>
                    <motion.a
                        href="/resume.pdf"
                        download
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn-outline flex items-center gap-2 text-base"
                    >
                        <Download size={18} />
                        Download Resume
                    </motion.a>
                </motion.div>

                {/* Social Links */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="flex items-center justify-center gap-3"
                >
                    {socialLinks.map((social, index) => (
                        <motion.a
                            key={social.label}
                            href={social.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.9 + index * 0.1, type: 'spring' }}
                            whileHover={{ scale: 1.15, y: -3 }}
                            className={`p-3 rounded-xl bg-surface-200/80 text-body ${social.color} transition-all duration-300 hover:shadow-soft`}
                            aria-label={social.label}
                        >
                            <social.icon size={20} />
                        </motion.a>
                    ))}
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="flex flex-col items-center gap-2 text-muted"
                >
                    <span className="text-xs tracking-widest uppercase font-medium">Scroll</span>
                    <ArrowDown size={16} />
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
