import { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Mail,
    Phone,
    MapPin,
    Send,
    Linkedin,
    Github,
    CheckCircle,
    AlertCircle
} from 'lucide-react';

const contactInfo = [
    { icon: Mail, label: 'Email', value: 'sumitmewada736@gmail.com', href: 'mailto:sumitmewada736@gmail.com' },
    { icon: Phone, label: 'Phone', value: '+91 98765 43210', href: 'tel:+919876543210' },
    { icon: MapPin, label: 'Location', value: 'Bhopal, Madhya Pradesh', href: null },
];

const socialLinks = [
    { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/sumit-mewadaa420', color: 'hover:bg-blue-600 hover:text-white hover:border-blue-600' },
    { icon: Github, label: 'GitHub', href: 'https://github.com/Sumit785-dot', color: 'hover:bg-gray-800 hover:text-white hover:border-gray-800' },
];

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [status, setStatus] = useState({ type: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    access_key: '89a9f062-0dea-4d88-8ace-5eb51aa92735',
                    name: formData.name,
                    email: formData.email,
                    message: formData.message,
                    subject: `New Contact Form Message from ${formData.name}`,
                }),
            });
            const result = await response.json();
            if (result.success) {
                setStatus({ type: 'success', message: 'Thank you! Your message has been sent successfully.' });
                setFormData({ name: '', email: '', message: '' });
            } else {
                setStatus({ type: 'error', message: 'Failed to send message. Please try again.' });
            }
        } catch (error) {
            setStatus({ type: 'error', message: 'Something went wrong. Please try again later.' });
        }
        setIsSubmitting(false);
        setTimeout(() => setStatus({ type: '', message: '' }), 5000);
    };

    return (
        <section id="contact" className="section bg-white relative overflow-hidden">
            {/* Subtle background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full opacity-20"
                    style={{ background: 'radial-gradient(circle, rgba(6,182,212,0.08) 0%, transparent 70%)' }} />
                <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-20"
                    style={{ background: 'radial-gradient(circle, rgba(217,70,239,0.06) 0%, transparent 70%)' }} />
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
                        Get In <span className="gradient-text">Touch</span>
                    </h2>
                    <p className="section-subtitle">
                        Have a project in mind? Let's work together to bring your ideas to life!
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="card p-8 card-gradient-top h-full" style={{ background: '#f8fafc' }}>
                            <h3 className="text-xl font-bold text-heading font-grotesk mb-8">Contact Information</h3>

                            <div className="space-y-6">
                                {contactInfo.map((item) => (
                                    <div key={item.label} className="flex items-start gap-4">
                                        <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 shadow-soft"
                                            style={{ background: 'linear-gradient(135deg, #06b6d4, #8b5cf6)' }}>
                                            <item.icon size={20} className="text-white" />
                                        </div>
                                        <div>
                                            <p className="text-muted text-sm font-medium">{item.label}</p>
                                            {item.href ? (
                                                <a href={item.href} className="text-heading hover:text-accent-violet transition-colors font-medium">
                                                    {item.value}
                                                </a>
                                            ) : (
                                                <p className="text-heading font-medium">{item.value}</p>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-10 pt-6 border-t border-surface-300">
                                <p className="text-muted text-sm font-medium mb-4">Follow me on</p>
                                <div className="flex gap-3">
                                    {socialLinks.map((social) => (
                                        <motion.a
                                            key={social.label}
                                            href={social.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.1, y: -2 }}
                                            className={`w-11 h-11 rounded-xl bg-white border border-surface-300 flex items-center justify-center text-body transition-all duration-300 shadow-sm ${social.color}`}
                                        >
                                            <social.icon size={20} />
                                        </motion.a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <form onSubmit={handleSubmit} className="card p-8 card-gradient-top">
                            <h3 className="text-xl font-bold text-heading font-grotesk mb-8">Send a Message</h3>

                            <div className="space-y-5">
                                <div>
                                    <label htmlFor="contact-name" className="block text-sm text-body font-medium mb-2">Your Name</label>
                                    <input type="text" id="contact-name" name="name" value={formData.name} onChange={handleChange} required className="form-input-light" placeholder="John Doe" />
                                </div>

                                <div>
                                    <label htmlFor="contact-email" className="block text-sm text-body font-medium mb-2">Email Address</label>
                                    <input type="email" id="contact-email" name="email" value={formData.email} onChange={handleChange} required className="form-input-light" placeholder="john@example.com" />
                                </div>

                                <div>
                                    <label htmlFor="contact-message" className="block text-sm text-body font-medium mb-2">Message</label>
                                    <textarea id="contact-message" name="message" value={formData.message} onChange={handleChange} required rows={5} className="form-input-light resize-none" placeholder="Tell me about your project..." />
                                </div>

                                {status.message && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className={`flex items-center gap-2 p-4 rounded-xl ${
                                            status.type === 'success'
                                                ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                                                : 'bg-red-50 text-red-700 border border-red-200'
                                        }`}
                                    >
                                        {status.type === 'success' ? <CheckCircle size={18} /> : <AlertCircle size={18} />}
                                        <span className="text-sm font-medium">{status.message}</span>
                                    </motion.div>
                                )}

                                <motion.button
                                    type="submit"
                                    disabled={isSubmitting}
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full btn-gradient flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isSubmitting ? (
                                        <>
                                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <Send size={18} />
                                            Send Message
                                        </>
                                    )}
                                </motion.button>
                            </div>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
