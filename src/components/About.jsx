import { motion } from 'framer-motion';
import {
    GraduationCap,
    Code2,
    Trophy,
    Briefcase,
    MapPin,
    User,
    Users
} from 'lucide-react';
import profileImage from './photo/about/about.jpeg';

const highlights = [
    {
        icon: GraduationCap,
        title: 'B.Tech CSE',
        description: 'SISTEC Bhopal (2023-2027)',
        emoji: '🎓',
    },
    {
        icon: Code2,
        title: 'Full-Stack Developer',
        description: 'React.js, Django & AI Integration',
        emoji: '💻',
    },
    {
        icon: Trophy,
        title: 'Hackathon Winner',
        description: 'Multiple victories with innovative solutions',
        emoji: '🏆',
    },
    {
        icon: Users,
        title: 'Team Leader',
        description: 'Led 4+ hackathon teams to success',
        emoji: '👥',
    },
    {
        icon: Briefcase,
        title: 'Freelancer',
        description: 'Mobile app development with React Native',
        emoji: '🚀',
    },
];

const About = () => {
    return (
        <section id="about" className="section relative overflow-hidden" style={{ background: '#f8fafc' }}>
            {/* Subtle background pattern */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-30"
                    style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 70%)' }} />
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full opacity-30"
                    style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 70%)' }} />
            </div>

            <div className="container-custom relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="section-title">
                        About <span className="gradient-text">Me</span>
                    </h2>
                    <p className="section-subtitle">
                        A passionate developer dedicated to creating impactful digital solutions
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Column - Photo + Bio */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        {/* Profile Photo */}
                        <div className="flex justify-center lg:justify-start">
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                className="relative"
                            >
                                {/* Gradient border ring */}
                                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-400 via-violet-500 to-fuchsia-500 opacity-70 blur-sm" />
                                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-cyan-400 via-violet-500 to-fuchsia-500 opacity-40" />

                                <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-full overflow-hidden border-4 border-white shadow-soft-xl">
                                    <img
                                        src={profileImage}
                                        alt="Sumit Mewada"
                                        className="w-full h-full object-cover"
                                        loading="lazy"
                                        onError={(e) => {
                                            e.target.onerror = null;
                                            e.target.src = '/placeholder.jpg';
                                        }}
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-cyan-500 to-violet-600 -z-10">
                                        <User size={80} className="text-white/80" />
                                    </div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Bio Card */}
                        <div className="card p-8 card-gradient-top">
                            <p className="text-body leading-relaxed text-lg">
                                I'm <span className="font-semibold text-heading">Sumit Mewada</span>, a dedicated
                                Computer Science Engineering student with a passion for building
                                <span className="gradient-text font-semibold"> innovative digital solutions</span>.
                                Currently pursuing my B.Tech at SAGAR INSTITUTE OF SCIENCE
                                AND TECHNOLOGY, I specialize in
                                <span className="gradient-text font-semibold"> full-stack development</span> with
                                expertise in React.js, Django, and AI integration.
                            </p>
                            <p className="text-body leading-relaxed text-lg mt-4">
                                With experience in leading hackathon teams to victory and delivering real-world
                                solutions, I bring both
                                <span className="gradient-text font-semibold"> technical expertise and leadership skills</span> to
                                every project.
                            </p>
                            <div className="mt-6 flex items-center gap-2 text-muted">
                                <MapPin size={18} className="text-accent-violet" />
                                <span className="font-medium">Bhopal, Madhya Pradesh, India</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column - Highlight Cards */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-5"
                    >
                        {highlights.map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -4 }}
                                className="card p-6 card-gradient-top group"
                            >
                                <div className="flex items-center gap-3 mb-3">
                                    <span className="text-2xl">{item.emoji}</span>
                                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/10 to-violet-500/10 flex items-center justify-center group-hover:from-cyan-500 group-hover:to-violet-500 transition-all duration-300">
                                        <item.icon size={20} className="text-accent-violet group-hover:text-white transition-colors" />
                                    </div>
                                </div>
                                <h3 className="text-lg font-bold text-heading font-grotesk mb-1">
                                    {item.title}
                                </h3>
                                <p className="text-muted text-sm leading-relaxed">
                                    {item.description}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
