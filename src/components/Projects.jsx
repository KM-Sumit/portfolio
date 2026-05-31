import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, X, ChevronLeft, ChevronRight } from 'lucide-react';
import freelanceProjectImage from './photo/freelans/05ce30ff-abbd-40d2-8e26-6535825aad61.jpeg';

// Share Console images
import consoleImg from './photo/project/console.jpeg';
import console2Img from './photo/project/console2.jpeg';

const projects = [
    {
        id: 1,
        title: 'Body Language Detection System',
        role: 'AI Developer',
        description: 'An AI-powered Deep Learning application that analyzes human body language from uploaded videos. The system extracts key frames, processes them through a custom-trained CNN model, and generates a confidence score based on posture and gestures. (Model optimization in progress)',
        tech: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'CNN', 'NumPy', 'Pandas'],
        github: 'https://github.com/Sumit785-dot/body-language-detector',
        live: null,
        images: [
            'https://images.unsplash.com/photo-1527474305487-b87b222841cc?w=800&h=500&fit=crop',
            'https://images.unsplash.com/photo-1507146426996-ef05306b995a?w=800&h=500&fit=crop',
            'https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=800&h=500&fit=crop',
        ],
    },
    {
        id: 2,
        title: 'AI-Powered Group Discussion Platform',
        role: 'Team Lead',
        description: 'Advanced online GD practice platform featuring 1-on-1 and 1-on-7 AI participant modes. Includes AI teacher for roadmap creation, daily 15-minute English conversation practice, and comprehensive feedback system.',
        tech: ['React.js', 'Tailwind CSS', 'Django', 'Python', 'OpenAI', 'Eleven Labs TTS'],
        github: 'https://github.com/Sumit785-dot/ai-gd-platform',
        live: null,
        images: [
            'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=800&h=500&fit=crop',
            'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop',
            'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&h=500&fit=crop',
        ],
    },
    {
        id: 3,
        title: 'Share Console - Lab Monitoring System',
        role: 'Team Lead',
        description: 'Real-time lab monitoring platform for teachers to view and manage 70+ student consoles simultaneously. Features live code viewing, real-time editing, error detection, and student progress tracking.',
        tech: ['React.js', 'Node.js', 'Socket.io', 'WebRTC', 'MongoDB', 'Express.js'],
        github: 'https://github.com/Sumit785-dot/share-console',
        live: 'https://compiler-share.vercel.app/code/7OT7N8',
        images: [consoleImg, console2Img],
    },
    {
        id: 4,
        title: 'Adobe Hackathon – AI PDF Analyzer',
        role: 'Team Lead',
        description: 'Intelligent PDF analysis tool that generates professional summaries and provides role-specific insights. Adapts content based on user profession with Google Gemini API integration and Azure TTS.',
        tech: ['Next.js', 'Node.js', 'Express.js', 'MongoDB', 'Gemini API', 'Azure TTS'],
        github: 'https://github.com/Sumit785-dot/ai-pdf-analyzer',
        live: null,
        images: [
            'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&h=500&fit=crop',
            'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=500&fit=crop',
            'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=500&fit=crop',
        ],
    },
    {
        id: 5,
        title: 'Healthcare Mobile App',
        role: 'Freelance',
        description: 'Mobile application for healthcare services enabling patients to contact doctors, request medical suggestions, and conduct online health checkups.',
        tech: ['React Native', 'Supabase', 'JavaScript'],
        github: null,
        live: null,
        images: [
            freelanceProjectImage,
            'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=500&fit=crop',
            'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=500&fit=crop',
        ],
    },
    {
        id: 6,
        title: 'Education Info Portal',
        role: 'Team Lead',
        description: 'Comprehensive education platform providing subject-wise notes and video lectures for all engineering branches including CSE, Civil, and Mechanical.',
        tech: ['HTML', 'CSS', 'JavaScript', 'React.js', 'Tailwind CSS'],
        github: 'https://github.com/Sumit785-dot/education-portal',
        live: null,
        images: [
            'https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=800&h=500&fit=crop',
            'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&h=500&fit=crop',
            'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&h=500&fit=crop',
        ],
    },
];

const ImageGallery = ({ images, projectTitle }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const nextImage = (e) => { e?.stopPropagation(); setCurrentIndex((prev) => (prev + 1) % images.length); };
    const prevImage = (e) => { e?.stopPropagation(); setCurrentIndex((prev) => (prev - 1 + images.length) % images.length); };

    return (
        <div className="relative group overflow-hidden rounded-t-2xl">
            <motion.img
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                src={images[currentIndex]}
                alt={`${projectTitle} - Image ${currentIndex + 1}`}
                className="w-full h-48 sm:h-56 object-cover"
                loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

            {images.length > 1 && (
                <>
                    <button onClick={prevImage} className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 text-slate-700 opacity-0 group-hover:opacity-100 transition-all hover:bg-white shadow-lg">
                        <ChevronLeft size={18} />
                    </button>
                    <button onClick={nextImage} className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 text-slate-700 opacity-0 group-hover:opacity-100 transition-all hover:bg-white shadow-lg">
                        <ChevronRight size={18} />
                    </button>
                </>
            )}

            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                {images.map((_, index) => (
                    <button key={index} onClick={(e) => { e.stopPropagation(); setCurrentIndex(index); }}
                        className={`w-2 h-2 rounded-full transition-all ${index === currentIndex ? 'bg-white w-5' : 'bg-white/60'}`} />
                ))}
            </div>
        </div>
    );
};

const Projects = () => {
    return (
        <section id="projects" className="section relative overflow-hidden" style={{ background: '#f8fafc' }}>
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full opacity-20"
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
                        Featured <span className="gradient-text">Projects</span>
                    </h2>
                    <p className="section-subtitle">
                        A showcase of my best work in web development, AI integration, and mobile apps
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="card overflow-hidden card-gradient-top">
                                <ImageGallery images={project.images} projectTitle={project.title} />

                                <div className="p-6">
                                    <div className="flex items-start justify-between gap-3 mb-3">
                                        <h3 className="text-lg font-bold text-heading font-grotesk">{project.title}</h3>
                                        <span className="shrink-0 px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-cyan-50 to-violet-50 text-accent-violet border border-violet-200">
                                            {project.role}
                                        </span>
                                    </div>

                                    <p className="text-muted text-sm mb-4 leading-relaxed">{project.description}</p>

                                    <div className="flex flex-wrap gap-2 mb-5">
                                        {project.tech.map((tech) => (
                                            <span key={tech} className="px-2.5 py-1 text-xs font-medium bg-surface-200 text-body rounded-lg">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex gap-3">
                                        {project.github && (
                                            <motion.a
                                                href={project.github}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                whileHover={{ scale: 1.05 }}
                                                className="flex items-center gap-2 px-4 py-2 rounded-xl bg-surface-200 text-body hover:text-heading hover:bg-surface-300 transition-all text-sm font-medium"
                                            >
                                                <Github size={16} />
                                                View Code
                                            </motion.a>
                                        )}
                                        {project.live && (
                                            <motion.a
                                                href={project.live}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                whileHover={{ scale: 1.05 }}
                                                className="flex items-center gap-2 px-4 py-2 rounded-xl text-white text-sm font-medium"
                                                style={{ background: 'linear-gradient(135deg, #06b6d4, #8b5cf6)' }}
                                            >
                                                <ExternalLink size={16} />
                                                Live Demo
                                            </motion.a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
