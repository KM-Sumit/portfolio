import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Briefcase, Calendar, ChevronLeft, ChevronRight, X, ExternalLink } from 'lucide-react';
import freelanceProjectImage from './photo/freelans/05ce30ff-abbd-40d2-8e26-6535825aad61.jpeg';
import visionProjectImage from './photo/freelans/vision.jpg';

const experiences = [
    {
        id: 1,
        type: 'Freelancing',
        title: 'Mobile App Developer',
        company: 'Freelance',
        duration: '2024 - Present',
        description: 'Developing mobile applications using React Native with Supabase backend. Working directly with clients to deliver tailored solutions that meet their business needs.',
        deliverables: [
            'Built cross-platform mobile apps with React Native',
            'Integrated Supabase for real-time database and authentication',
            'Delivered projects on time with client satisfaction',
            'Provided ongoing maintenance and support',
        ],
        images: [
            freelanceProjectImage,
            'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&h=500&fit=crop',
            'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=500&fit=crop',
        ],
        disableLightbox: true,
    },
    {
        id: 2,
        type: 'Internship',
        title: 'Software Development Intern',
        company: 'Ibotix',
        duration: 'Summer 2024',
        description: 'Developed an AI-powered Call Assistant to solve critical customer support challenges. Built an intelligent system that listens to customer problems and provides automated solutions using AI technology.',
        deliverables: [
            'Built AI Call Assistant for automated customer support',
            'Reduced support team workload through intelligent problem resolution',
            'Integrated AI for natural language understanding',
            'Improved customer satisfaction with instant problem-solving',
        ],
        images: [
            'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=500&fit=crop',
        ],
    },

    {
        id: 3,
        type: 'Freelance Project',
        title: 'Full Stack Developer',
        company: 'Vision Institute MP',
        duration: '2024',
        description: 'Developed a comprehensive educational coaching platform for Vision Institute. Built a fully functional website featuring course management, video lectures, study material downloads, and an integrated payment gateway for seamless transactions.',
        deliverables: [
            'Built full-stack application using HTML, CSS, JavaScript, and Node.js',
            'Integrated secure payment gateway for course and notes purchases',
            'Created an interactive student review and rating system',
            'Implemented responsive design and optimized for SEO',
        ],
        link: 'https://visioninstitutemp.in/',
        images: [
            visionProjectImage,
        ],
    },
];

const ImageGallery = ({ images, title, disableLightbox = false }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const nextImage = (e) => { e?.stopPropagation(); setCurrentIndex((prev) => (prev + 1) % images.length); };
    const prevImage = (e) => { e?.stopPropagation(); setCurrentIndex((prev) => (prev - 1 + images.length) % images.length); };

    return (
        <>
            <div className="relative group overflow-hidden rounded-xl">
                <motion.img
                    key={currentIndex}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    src={images[currentIndex]}
                    alt={`${title} - Image ${currentIndex + 1}`}
                    className={`w-full h-48 object-cover ${disableLightbox ? 'cursor-default' : 'cursor-pointer'}`}
                    loading="lazy"
                    onClick={() => !disableLightbox && setLightboxOpen(true)}
                />

                {images.length > 1 && (
                    <>
                        <button onClick={prevImage} className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-white/80 text-slate-700 opacity-0 group-hover:opacity-100 transition-all hover:bg-white shadow-md">
                            <ChevronLeft size={16} />
                        </button>
                        <button onClick={nextImage} className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-white/80 text-slate-700 opacity-0 group-hover:opacity-100 transition-all hover:bg-white shadow-md">
                            <ChevronRight size={16} />
                        </button>
                    </>
                )}

                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                    {images.map((_, index) => (
                        <span key={index} className={`w-1.5 h-1.5 rounded-full transition-all ${index === currentIndex ? 'bg-white w-4' : 'bg-white/60'}`} />
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {lightboxOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="lightbox-overlay"
                        onClick={() => setLightboxOpen(false)}
                    >
                        <button onClick={() => setLightboxOpen(false)} className="absolute top-4 right-4 p-2 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors">
                            <X size={24} />
                        </button>
                        <div className="relative max-w-4xl max-h-[80vh] w-full mx-4">
                            <img src={images[currentIndex]} alt={`${title} - Image ${currentIndex + 1}`} className="w-full h-full object-contain rounded-lg" onClick={(e) => e.stopPropagation()} />
                            {images.length > 1 && (
                                <>
                                    <button onClick={prevImage} className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors">
                                        <ChevronLeft size={28} />
                                    </button>
                                    <button onClick={nextImage} className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors">
                                        <ChevronRight size={28} />
                                    </button>
                                </>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

const Experience = () => {
    return (
        <section id="experience" className="section bg-white relative overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-20"
                    style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 70%)' }} />
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
                        Work <span className="gradient-text">Experience</span>
                    </h2>
                    <p className="section-subtitle">
                        My professional journey in software development
                    </p>
                </motion.div>

                {/* Timeline */}
                <div className="relative max-w-4xl mx-auto">
                    {/* Timeline line */}
                    <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[3px] bg-gradient-to-b from-cyan-400 via-violet-500 to-fuchsia-500 -translate-x-1/2 rounded-full" />

                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={exp.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className={`relative flex flex-col md:flex-row gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                            >
                                {/* Timeline dot */}
                                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 top-8">
                                    <div className="timeline-dot" />
                                </div>

                                {/* Content */}
                                <div className={`ml-16 md:ml-0 md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:pr-4' : 'md:pl-4'}`}>
                                    <div className="card overflow-hidden" style={{ borderLeft: '4px solid transparent', borderImage: 'linear-gradient(to bottom, #06b6d4, #8b5cf6) 1' }}>
                                        <div className="p-6">
                                            <div className="flex items-center gap-2 mb-4 flex-wrap">
                                                <span className={`px-3 py-1 text-xs font-semibold rounded-full ${exp.type === 'Freelancing'
                                                        ? 'bg-emerald-50 text-emerald-600 border border-emerald-200'
                                                        : 'bg-blue-50 text-blue-600 border border-blue-200'
                                                    }`}>
                                                    {exp.type}
                                                </span>
                                                <span className="flex items-center gap-1.5 text-xs text-muted font-medium">
                                                    <Calendar size={12} />
                                                    {exp.duration}
                                                </span>
                                            </div>

                                            <h3 className="text-xl font-bold text-heading font-grotesk mb-1">{exp.title}</h3>
                                            <p className="text-accent-violet text-sm mb-4 flex items-center gap-2 font-medium">
                                                <Briefcase size={14} />
                                                {exp.company}
                                            </p>

                                            <p className="text-muted text-sm mb-4 leading-relaxed">{exp.description}</p>

                                            <ul className="space-y-2">
                                                {exp.deliverables.map((item, i) => (
                                                    <li key={i} className="flex items-start gap-2 text-sm text-body">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500 mt-2 shrink-0" />
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>

                                            {exp.link && (
                                                <a href={exp.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-sm font-semibold text-cyan-600 hover:text-cyan-700 transition-colors mt-4 bg-cyan-50 px-3 py-1.5 rounded-lg border border-cyan-100">
                                                    <ExternalLink size={16} />
                                                    View Live Website
                                                </a>
                                            )}
                                        </div>

                                        <div className="px-6 pb-6">
                                            <ImageGallery images={exp.images} title={exp.title} disableLightbox={exp.disableLightbox} />
                                        </div>
                                    </div>
                                </div>

                                {/* Spacer for the other side */}
                                <div className="hidden md:block md:w-[calc(50%-2rem)]" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
