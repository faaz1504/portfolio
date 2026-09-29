import React, { useState, useRef } from 'react';
import { Mail, MapPin, Send, MessageSquare, CheckCircle, AlertCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    from_name: '',
    from_email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg(null);

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    // Check if environment variables are missing
    if (!serviceId || !templateId || !publicKey) {
      setLoading(false);
      setErrorMsg('Missing EmailJS keys in .env file or dev server needs a restart.');
      return;
    }
    console.log('Public Key being sent:', publicKey);

    emailjs
      .sendForm(
        serviceId,
        templateId,
        formRef.current,
        publicKey // Pass publicKey directly as a string here
      )
      .then(
        (result) => {
          setLoading(false);
          setSubmitted(true);
          setFormData({
            from_name: '',
            from_email: '',
            subject: '',
            message: ''
          });
        },
        (error) => {
          setLoading(false);
          // Log both error.text and error to inspect full details
          console.error('EmailJS Error Status:', error.status);
          console.error('EmailJS Error Response:', error.text);
          setErrorMsg(`Failed to send message: ${error.text || 'Check EmailJS dashboard setup'}`);
        }
      );
  };
  return (
    <section id="contact" className="py-24 scroll-mt-24 relative z-10 bg-slate-950/70 border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-semibold text-cyan-400 mb-4">
            <MessageSquare className="w-4 h-4" />
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4 break-words">
            Contact Me
          </h2>
          <p className="text-base sm:text-lg text-slate-400 max-w-2xl">
            Interested in working together or discussing MERN stack opportunities? Feel free to reach out!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 max-w-5xl mx-auto items-start">

          {/* Left Info Column */}
          <div className="lg:col-span-2 space-y-6">
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-800 space-y-6">
              <h3 className="text-xl font-bold text-white mb-2">
                Let's Connect
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                I am actively seeking MERN stack internships and entry-level developer roles. Reach out directly or connect via social platforms.
              </p>

              <div className="space-y-4 pt-2">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="flex items-center gap-4 p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-500/40 transition-colors group overflow-hidden"
                >
                  <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 group-hover:scale-110 transition-transform shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-xs font-medium text-slate-400">Email Address</div>
                    <div className="text-sm font-semibold text-white group-hover:text-cyan-300 truncate">
                      {personalInfo.email}
                    </div>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800">
                  <div className="p-2.5 rounded-xl bg-purple-500/10 text-purple-400 shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="text-xs font-medium text-slate-400">Location</div>
                    <div className="text-sm font-semibold text-white truncate">
                      {personalInfo.location}
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-4 border-t border-slate-800">
                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                  Social Profiles
                </div>
                <div className="flex items-center gap-3">
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-cyan-500/40 transition-colors"
                    title="GitHub Profile"
                  >
                    <GithubIcon className="w-5 h-5" />
                  </a>
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:border-cyan-500/40 transition-colors"
                    title="LinkedIn Profile"
                  >
                    <LinkedinIcon className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Contact Form Column */}
          <div className="lg:col-span-3">
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-slate-800">
              {submitted ? (
                <div className="py-12 text-center space-y-4">
                  <div className="w-16 h-16 bg-emerald-500/10 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/20">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Message Sent!</h3>
                  <p className="text-slate-300 text-sm max-w-md mx-auto">
                    Thank you for reaching out! Your message has been dispatched via EmailJS and I will get back to you shortly.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2.5 rounded-full text-xs font-semibold text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 hover:bg-cyan-500/20 transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
                  {errorMsg && (
                    <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/20 text-rose-300 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0 text-rose-400" />
                      <span>{errorMsg}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        name="from_name"
                        required
                        placeholder="Your full name"
                        value={formData.from_name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-300 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="from_email"
                        required
                        placeholder="you@example.com"
                        value={formData.from_email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      placeholder="MERN Internship / Inquiry"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500 transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      placeholder="Hi Faaz, I'd like to discuss..."
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full py-4 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {loading ? (
                      <span>Sending...</span>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
