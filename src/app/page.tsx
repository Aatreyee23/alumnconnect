'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdPeople, MdSchool, MdWork, MdEvent } from "react-icons/md";
import Image from 'next/image';

export default function Home() {
  const [theme, setTheme] = useState('system');

  useEffect(() => {
    const systemPref = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    const storedTheme = localStorage.getItem('theme');
    const initialTheme = storedTheme || systemPref;
    document.documentElement.setAttribute('data-theme', initialTheme);
    setTheme(initialTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="min-h-screen flex flex-col bg-[var(--bg-color)] text-[var(--text-color)]">

      {/* Header */}
      <header className="flex flex-col sm:flex-row items-center justify-between p-6 border-b border-[var(--muted-color)] gap-4 sm:gap-0">
        <div className="flex items-center gap-4 text-center sm:text-left">
          <img
            src="/images/logo_alumnconnect.png"
            alt="AlumnConnect Logo"
            className="h-16 w-16 object-contain mx-auto sm:mx-0"
          />
          <div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[var(--accent-color)]">AlumnConnect</h1>
            <p className="text-sm text-[var(--muted-color)]">Centralized Alumni Data Management & Engagement</p>
          </div>
        </div>
        <button
          onClick={toggleTheme}
          className="relative inline-flex items-center justify-between w-16 h-8 px-1 rounded-full bg-[var(--card-bg)] border border-[var(--muted-color)] shadow-inner transition"
        >
          <Sun className={`w-5 h-5 transition-opacity ${theme === 'light' ? 'opacity-100' : 'opacity-0'}`} />
          <Moon className={`w-5 h-5 transition-opacity ${theme === 'dark' ? 'opacity-100' : 'opacity-0'}`} />
        </button>
      </header>

      {/* Hero Section */}
      <section
        className="hero-cursor flex flex-col-reverse lg:flex-row items-center justify-between py-20 px-8 rounded-2xl shadow-xl my-8"
        style={{ background: "var(--hero-gradient)" }}
      >
        <motion.div
          className="lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h1 className="text-4xl lg:text-5xl font-extrabold mb-6 leading-tight text-[var(--accent-color)] drop-shadow">
            Centralized Alumni Data Management & Engagement
          </h1>
          <p className="text-lg text-[var(--muted-color)] mb-8 max-w-xl">
            A comprehensive platform to manage alumni data, foster meaningful connections, and strengthen your institution’s community.
          </p>
          <a
            href="#signup"
            className="inline-block px-8 py-4 bg-[var(--accent-color)] text-white font-semibold rounded-full shadow-lg hover:scale-105 hover:bg-opacity-90 transition-transform duration-200"
          >
            Get Started
          </a>
        </motion.div>

        <div className="flex justify-center items-center py-8 lg:py-0 lg:w-1/2">
          <motion.div
            className="relative rounded-3xl shadow-2xl p-2 flex items-center justify-center overflow-hidden"
            style={{ background: "var(--card-gradient)" }}
            initial={{ opacity: 0, x: 50, scale: 0.96 }}
            whileInView={{ opacity: 1, x: 0, scale: 1, transition: { duration: 0.8, ease: "easeOut" } }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03, rotate: 1 }}
          >
            <div className="rounded-2xl overflow-hidden border-4 border-[var(--accent-color)] shadow-lg">
              <Image
                src="/images/hero_img.jpg"
                alt="Hero Illustration"
                width={500}
                height={400}
                className="object-cover w-full h-full scale-105 hover:scale-110 transition-transform duration-500"
                priority
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--accent-color)]/20 to-transparent pointer-events-none rounded-2xl" />
          </motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <motion.section
        id="problem"
        className="problem-cursor flex flex-col lg:flex-row items-center justify-between py-20 px-8 rounded-2xl shadow-xl my-8"
        style={{ background: "var(--problem-gradient)" }}
      >
        <div className="lg:w-1/2 flex flex-col justify-center mb-10 lg:mb-0">
          <h2 className="text-4xl font-extrabold mb-6 text-[var(--accent-color)]">The Challenge</h2>
          <p className="text-lg text-[var(--muted-color)] mb-6">
            Educational institutions often struggle with fragmented alumni data, scattered across spreadsheets, emails, and outdated systems...
          </p>
          <ul className="list-disc pl-6 space-y-2 text-[var(--muted-color)]">
            <li>Disconnected alumni records and lost contacts</li>
            <li>Limited engagement and event participation</li>
            <li>Missed mentorship and fundraising opportunities</li>
          </ul>
        </div>

        <div className="lg:w-1/2 flex justify-center items-center p-4">
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{ scale: 1.04, rotate: 1 }}
            className="relative overflow-hidden rounded-3xl shadow-2xl border-4 border-[var(--accent-color)] transition"
            style={{ background: "var(--card-gradient)" }}
          >
            <Image
              src="/images/problem_image.jpg"
              alt="Fragmented alumni data illustration"
              width={420}
              height={320}
              className="rounded-2xl object-cover scale-105 hover:scale-110 transition-transform duration-500"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--accent-color)]/20 to-transparent pointer-events-none rounded-2xl" />
          </motion.div>
        </div>
      </motion.section>

      {/* Impact Section */}
      <motion.section
        id="impact"
        className="impact-cursor py-20 px-8 bg-[var(--card-bg)] rounded-t-2xl shadow-inner"
      >
        <h2 className="text-3xl font-bold text-center mb-12 text-[var(--accent-color)]">Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div className="relative p-6 bg-[var(--bg-color)] rounded-xl shadow hover:shadow-lg transition transform hover:scale-105 card-hover">
            <div className="gradient-overlay" />
            <MdPeople className="w-12 h-12 mx-auto mb-4 text-blue-500 icon-float" />
            <h4 className="font-semibold text-xl mb-2">Strengthen Engagement</h4>
            <p className="text-[var(--muted-color)]">Build long-term alumni relationships and structured engagement.</p>
          </div>
          <div className="relative p-6 bg-[var(--bg-color)] rounded-xl shadow hover:shadow-lg transition transform hover:scale-105 card-hover">
            <div className="gradient-overlay" />
            <MdSchool className="w-12 h-12 mx-auto mb-4 text-green-500 icon-float" />
            <h4 className="font-semibold text-xl mb-2">Mentorship</h4>
            <p className="text-[var(--muted-color)]">Support student guidance and alumni-student networking.</p>
          </div>
          <div className="relative p-6 bg-[var(--bg-color)] rounded-xl shadow hover:shadow-lg transition transform hover:scale-105 card-hover">
            <div className="gradient-overlay" />
            <MdWork className="w-12 h-12 mx-auto mb-4 text-purple-500 icon-float" />
            <h4 className="font-semibold text-xl mb-2">Fundraising</h4>
            <p className="text-[var(--muted-color)]">Track donations, internships, and institutional support.</p>
          </div>
          <div className="relative p-6 bg-[var(--bg-color)] rounded-xl shadow hover:shadow-lg transition transform hover:scale-105 card-hover">
            <div className="gradient-overlay" />
            <MdEvent className="w-12 h-12 mx-auto mb-4 text-red-500 icon-float" />
            <h4 className="font-semibold text-xl mb-2">Community</h4>
            <p className="text-[var(--muted-color)]">Enhance credibility, trust, and alumni collaboration.</p>
          </div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        id="features"
        className="features-cursor py-20 px-8"
      >
        <h2 className="text-3xl font-bold text-center mb-12 text-[var(--accent-color)]">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <MdSchool className="w-10 h-10 mb-4 text-blue-500 icon-float" />,
              title: "Centralized Data",
              desc: "Secure storage, updates, and access to alumni data."
            },
            {
              icon: <MdPeople className="w-10 h-10 mb-4 text-green-500 icon-float" />,
              title: "Networking & Communication",
              desc: "Connect alumni and students, mentorship, and AI-based recommendations."
            },
            {
              icon: <MdEvent className="w-10 h-10 mb-4 text-purple-500 icon-float" />,
              title: "Events & Engagement",
              desc: "Manage events, track career updates, gamified engagement, and fundraising."
            }
          ].map((feature, idx) => (
            <motion.div
              key={idx}
              className="relative p-6 bg-[var(--card-bg)] rounded-xl shadow hover:shadow-lg transition transform hover:scale-105 card-hover"
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0, transition: { delay: idx * 0.2 } }}
            >
              <div className="gradient-overlay" />
              {feature.icon}
              <h4 className="font-semibold text-xl mb-2">{feature.title}</h4>
              <p className="text-[var(--muted-color)]">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* CTA Section */}
      <section className="cta-cursor py-20 px-8 text-center bg-gradient-to-r from-[var(--accent-color)] to-[var(--sec-accent-color)] text-white rounded-t-2xl shadow-inner relative overflow-hidden">
        <div className="absolute inset-0 bg-[var(--sec-accent-color)]/10 animate-pulse-slow pointer-events-none" />
        <h2 className="text-3xl font-bold mb-4">Get Started with AlumnConnect</h2>
        <p className="mb-6">Join the platform to strengthen your alumni network, manage mentorship, and engage effectively.</p>
        <a href="#signup" className="px-8 py-4 bg-white text-[var(--accent-color)] font-semibold rounded-full shadow-lg hover:scale-105 transition-transform">
          Sign Up Now
        </a>
      </section>

      {/* Footer */}
      <footer className="footer-cursor text-center text-sm py-6 bg-[var(--card-bg)] rounded-t-2xl shadow-inner">
        <p>© 2025 AlumnConnect. All rights reserved.</p>
        <div className="flex justify-center gap-4 mt-2">
          <a href="https://linkedin.com" target="_blank"><FaLinkedin className="w-5 h-5 hover:text-[var(--accent-color)] transition" /></a>
          <a href="https://github.com" target="_blank"><FaGithub className="w-5 h-5 hover:text-[var(--accent-color)] transition" /></a>
        </div>
      </footer>
    </div>
  );
}
