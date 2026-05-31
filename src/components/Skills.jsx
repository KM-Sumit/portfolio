import { motion } from 'framer-motion';

const skillCategories = [
    {
        title: 'Languages',
        gradient: 'from-blue-500 to-blue-600',
        skills: ['C', 'C++', 'Python', 'Java', 'JavaScript', 'TypeScript'],
    },
    {
        title: 'Frontend',
        gradient: 'from-cyan-500 to-cyan-600',
        skills: ['React.js', 'Next.js', 'Tailwind CSS', 'Bootstrap', 'HTML/CSS'],
    },
    {
        title: 'Backend',
        gradient: 'from-emerald-500 to-emerald-600',
        skills: ['Node.js', 'Express.js', 'Django', 'Flask', 'FastAPI'],
    },
    {
        title: 'Databases',
        gradient: 'from-violet-500 to-violet-600',
        skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Supabase'],
    },
    {
        title: 'AI/ML & Data Science',
        gradient: 'from-fuchsia-500 to-fuchsia-600',
        skills: [
            'Deep Learning (CNN)',
            'Computer Vision',
            'OpenCV',
            'OpenAI API',
            'Gemini API',
            'LangChain',
            'HuggingFace',
            'Pandas',
            'NumPy',
            'Scikit-learn',
            'TensorFlow',
            'Matplotlib',
        ],
    },
    {
        title: 'Tools & DevOps',
        gradient: 'from-orange-500 to-orange-600',
        skills: ['Git', 'GitHub', 'VS Code', 'Linux', 'Docker', 'Vercel'],
    },
];

const Skills = () => {
    return (
        <section id="skills" className="section bg-white relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-20 left-0 w-[400px] h-[400px] rounded-full opacity-20"
                    style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.1) 0%, transparent 70%)' }} />
                <div className="absolute bottom-20 right-0 w-[500px] h-[500px] rounded-full opacity-20"
                    style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)' }} />
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
                        My <span className="gradient-text">Skills</span>
                    </h2>
                    <p className="section-subtitle">
                        Technologies and tools I work with to build amazing projects
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {skillCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: categoryIndex * 0.08 }}
                            className="card p-6 card-gradient-top"
                        >
                            {/* Category Badge */}
                            <div className={`inline-flex px-4 py-1.5 rounded-full bg-gradient-to-r ${category.gradient} text-white text-sm font-semibold mb-5 shadow-sm`}>
                                {category.title}
                            </div>

                            {/* Skills */}
                            <div className="flex flex-wrap gap-2">
                                {category.skills.map((skill, skillIndex) => (
                                    <motion.span
                                        key={skill}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: categoryIndex * 0.05 + skillIndex * 0.03 }}
                                        className="skill-pill"
                                    >
                                        {skill}
                                    </motion.span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
