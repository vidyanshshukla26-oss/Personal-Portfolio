/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  Github, 
  Mail, 
  Linkedin, 
  MapPin, 
  Phone, 
  ExternalLink, 
  ChevronRight,
  Code2,
  Database,
  Layout,
  Cpu,
  GraduationCap,
  Award,
  Terminal
} from "lucide-react";

const SECTION_ANIMATION = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as any }
};

export default function App() {
  const skillCategories = [
    {
      category: "Programming Languages",
      icon: <Terminal className="w-5 h-5 text-blue-600" />,
      skills: [
        { name: "Java", level: "Proficient" },
        { name: "JavaScript (ES6+)", level: "Intermediate" },
        { name: "C", level: "Proficient" },
        { name: "Python", level: "Proficient" }
      ]
    },
    {
      category: "Backend Development",
      icon: <Cpu className="w-5 h-5 text-purple-600" />,
      skills: [
        { name: "Node.js", level: "Proficient" },
        { name: "Express.js", level: "Proficient" },
        { name: "RESTful APIs", level: "Advanced" }
      ]
    },
    {
      category: "Frontend & Design",
      icon: <Layout className="w-5 h-5 text-emerald-600" />,
      skills: [
        { name: "React.js", level: "Intermediate" },
        { name: "Tailwind CSS", level: "Intermediate" },
        { name: "HTML5 / CSS3", level: "Proficient" }
      ]
    },
    {
      category: "Databases & Tools",
      icon: <Database className="w-5 h-5 text-amber-600" />,
      skills: [
        { name: "SQL", level: "Proficient" },
        { name: "MongoDB", level: "Proficient" },
        { name: "Git / GitHub", level: "Advanced" },
        { name: "Postman / NPM", level: "Proficient" }
      ]
    },
    {
      category: "Core Methodologies",
      icon: <Code2 className="w-5 h-5 text-rose-600" />,
      skills: [
        { name: "OOP Principles", level: "Expert" },
        { name: "Data Structures", level: "Advanced" },
        { name: "Algorithms", level: "Advanced" }
      ]
    }
  ];

  const projects = [
    {
      title: "Spotify Clone",
      type: "Music Streaming Web Application",
      description: "A full-stack music streaming platform built with Node.js, Express, and MongoDB. Features user authentication, playlist management, and seamless audio playback.",
      tech: ["Node.js", "Express.js", "MongoDB", "REST API"],
    },
    {
      title: "Decentralized News Platform",
      type: "Distributed Systems Project",
      description: "A platform for transparent and censorship-resistant news sharing, focusing on scalable and secure architecture for content publishing.",
      tech: ["Architecture", "Scalability", "Security"],
    },
    {
      title: "Portfolio",
      type: "Web Development",
      description: "Designed and developed a responsive portfolio with clean UI/UX to showcase projects and skills effectively.",
      tech: ["React", "Tailwind CSS", "Framer Motion"],
    },
  ];

  const experience = [
    {
      role: "Open Source Contributor",
      company: "Girlscript Summer of Code (GSSoC)",
      period: "April 2026 – August 2026",
      highlights: [
        "Contributed to open-source projects by fixing bugs, enhancing documentation, and implementing new features.",

        "Collaborated with maintainers through GitHub workflows, including issues, pull requests, and code reviews.",

        "Worked with Git, GitHub, JavaScript, React, and modern development practices while contributing to production repositories.",
      
      ],
    },
    {
      role: "AI Frontend Intern",
      company: "Flyrank AI",
      period: "July 2026 – October 2026",
      highlights: [
        "Developed responsive user interfaces using React.js, TypeScript, and modern JavaScript frameworks",

        "Integrated frontend with AI-powered APIs and backend services",

        "Built reusable components to improve maintainability and scalability",

       "Optimized application performance and enhanced user experience",
       
        "Collaborated via Git for enterprise-grade version control",
      ],
    },
  ];

  return (
    <div className="min-h-screen selection:bg-slate-200 selection:text-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="font-display font-bold text-xl tracking-tight text-slate-900">VS/</span>
          <div className="hidden md:flex gap-8 items-center text-sm font-medium text-slate-600">
            <a href="#about" className="hover:text-slate-900 transition-colors">About</a>
            <a href="#skills" className="hover:text-slate-900 transition-colors">Skills</a>
            <a href="#experience" className="hover:text-slate-900 transition-colors">Experience</a>
            <a href="#projects" className="hover:text-slate-900 transition-colors">Projects</a>
            <a href="mailto:shuklavidyansh26@gmail.com" className="bg-slate-900 text-white px-4 py-2 rounded-full hover:bg-slate-800 transition-all flex items-center gap-2">
              Get in Touch <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </nav>

      <main className="pt-16">
        {/* Hero Section */}
        <section className="section-padding min-h-[90vh] flex flex-col justify-center items-center md:items-start relative overflow-hidden">
          {/* Subtle Background Grid */}
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-size-[4rem_4rem] mask-[radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row items-center gap-16 w-full"
          >
            <div className="flex-1 space-y-8 text-center md:text-left">
              <div className="inline-flex items-center gap-3 px-4 py-2 bg-emerald-50 text-emerald-700 rounded-full border border-emerald-100 text-sm font-bold uppercase tracking-widest">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
                Available for SDE Internships
              </div>
              
              <div className="space-y-4">
                <h1 className="text-7xl md:text-9xl font-bold leading-[0.9] tracking-tighter">
                  Vidyansh <br />
                  <span className="text-slate-300">Shukla</span>
                </h1>
                <p className="text-2xl md:text-3xl font-display font-medium text-slate-500 max-w-2xl leading-tight">
                  Software Engineer building the next generation of <span className="text-slate-900 italic underline decoration-slate-200">distributed systems</span> and <span className="text-slate-900 italic underline decoration-slate-200">full-stack architectures</span>.
                </p>
              </div>

              <div className="flex flex-wrap gap-6 pt-6 justify-center md:justify-start">
                <a href="mailto:shuklavidyansh26@gmail.com" className="bg-slate-900 text-white px-8 py-4 rounded-xl font-bold hover:bg-slate-800 transition-all hover:-translate-y-0.5 flex items-center gap-3 shadow-lg shadow-slate-200">
                  <Mail className="w-5 h-5" /> Hire Vidyansh
                </a>
                <a href="https://github.com/vidyanshshukla26-oss" target="_blank" rel="noreferrer" className="bg-white text-slate-600 px-8 py-4 rounded-xl font-bold border border-slate-200 hover:border-slate-900 hover:text-slate-900 transition-all flex items-center gap-3">
                  <Github className="w-5 h-5" /> Source Code
                </a>
              </div>

              <div className="flex items-center gap-6 justify-center md:justify-start text-slate-400 font-mono text-xs uppercase tracking-widest pt-4">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" /> Kolkata, India
                </div>
                <div className="w-1 h-1 bg-slate-300 rounded-full" />
                <div className="flex items-center gap-2">
                  <Cpu className="w-4 h-4" /> Backend Specialist
                </div>
              </div>
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative w-72 h-72 md:w-96 md:h-96"
            >
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-slate-100 rounded-full -z-10 animate-pulse" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 border border-slate-200 rounded-3xl -z-10 rotate-12" />
              
              <div className="w-full h-full rounded-[2.5rem] overflow-hidden border-8 border-white shadow-2xl shadow-slate-200">
                <img 
                  src="Picture.jpeg" 
                  alt="Vidyansh Shukla"
                  className="w-full h-full object-cover grayscale brightness-110 hover:grayscale-0 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-linear-to-t from-slate-900/40 to-transparent pointer-events-none" />
              </div>
              
              {/* Floating Badge */}
              <div className="absolute bottom-6 -right-8 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 hidden md:block">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-slate-900 rounded-xl flex items-center justify-center text-white">
                    <Linkedin className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider"><a href="https://www.linkedin.com/in/vidyansh-shukla-595a46375" target="_blank" rel="noreferrer noopener">LinkedIn</a></div>
                    <div className="text-sm font-bold text-slate-900"><a href="https://www.linkedin.com/in/vidyansh-shukla-595a46375" target="_blank" rel="noreferrer noopener">Let's Connect</a></div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Introduction / About */}
        <section id="about" className="bg-slate-50 border-y border-slate-200">
          <div className="section-padding">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
              <motion.div {...SECTION_ANIMATION} className="space-y-8">
                <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400 flex items-center gap-3">
                  <span className="w-12 h-px bg-slate-300" /> The Engineer
                </h2>
                <p className="text-3xl md:text-4xl font-medium leading-[1.3] text-slate-800">
                  Engineering is more than writing code—it's about designing <span className="text-slate-400">resilient systems</span> that solve real-world problems at scale.
                </p>
                <div className="flex gap-4">
                  <div className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-bold text-slate-600">
                    Full-Stack Development
                  </div>
                  <div className="px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm font-bold text-slate-600">
                    System Architecture
                  </div>
                </div>
              </motion.div>
              
              <motion.div {...SECTION_ANIMATION} transition={{ delay: 0.2 }} className="bg-white p-10 rounded-3xl border border-slate-200 shadow-sm space-y-6">
                <h3 className="text-xl font-bold italic tracking-tight">"Technical excellence is the baseline; architectural empathy is the superpower."</h3>
                <p className="text-slate-600 leading-relaxed">
                  Currently pursuing a degree in Information Technology with a focus on high-performance backend systems. My work in Java and Node.js revolves around building stateless APIs, implementing robust authentication, and optimizing database schemas for distributed environments.
                </p>
                <div className="flex items-center gap-4 text-slate-400 font-mono text-xs uppercase tracking-widest">
                  <span>Current Focus:</span>
                  <span className="text-slate-900 font-bold">Distributed News Protocol</span>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Skills & Technologies */}
        <section id="skills" className="section-padding bg-slate-50/50">
          <motion.div {...SECTION_ANIMATION} className="space-y-16">
            <div className="max-w-2xl">
              <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">Skills & Technologies</h2>
              <p className="mt-4 text-lg text-slate-600">
                A technical overview of my engineering capabilities, specialized in full-stack architecture 
                and backend-heavy development.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skillCategories.map((group, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="p-8 bg-white border border-slate-200 rounded-3xl shadow-sm hover:shadow-md hover:border-slate-300 transition-all group"
                >
                  <div className="flex items-center gap-4 mb-8">
                    <div className="p-3 bg-slate-50 rounded-2xl group-hover:bg-slate-900 group-hover:text-white transition-colors">
                      {group.icon}
                    </div>
                    <h3 className="font-bold text-xl text-slate-900">{group.category}</h3>
                  </div>
                  
                  <div className="space-y-6">
                    {group.skills.map((skill, i) => (
                      <div key={i} className="space-y-2">
                        <div className="flex justify-between items-center text-sm">
                          <span className="font-semibold text-slate-700">{skill.name}</span>
                          <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{skill.level}</span>
                        </div>
                        <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                          <motion.div 
                            initial={{ width: 0 }}
                            whileInView={{ 
                              width: skill.level === "Expert" ? "95%" : 
                                     skill.level === "Advanced" ? "85%" : 
                                     skill.level === "Proficient" ? "75%" : 
                                     skill.level === "Intermediate" ? "55%" : "35%" 
                            }}
                            className="h-full bg-slate-900 rounded-full"
                            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] as any }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Experience */}
        <section id="experience" className="bg-slate-50">
          <div className="section-padding">
            <motion.div {...SECTION_ANIMATION} className="space-y-12">
              <h2 className="text-4xl font-bold">On the Field</h2>
              <div className="space-y-8">
                {experience.map((exp, index) => (
                  <div key={index} className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8 p-10 bg-white border border-slate-200 rounded-3xl relative overflow-hidden group">
                    <div className="absolute top-0 left-0 w-2 h-full bg-slate-900" />
                    <div>
                      <span className="text-sm font-bold uppercase tracking-wider text-slate-400">{exp.period}</span>
                      <h3 className="text-2xl font-bold mt-2">{exp.role}</h3>
                      <p className="text-slate-600 font-medium">{exp.company}</p>
                    </div>
                    <div>
                      <ul className="space-y-4">
                        {exp.highlights.map((h, i) => (
                          <li key={i} className="flex gap-4 text-slate-600 leading-relaxed">
                            <span className="shrink-0 w-6 h-6 bg-slate-50 rounded-full flex items-center justify-center text-slate-900 font-bold text-[10px]">
                              {i + 1}
                            </span>
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="section-padding">
          <motion.div {...SECTION_ANIMATION} className="space-y-12">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <h2 className="text-4xl font-bold italic underline decoration-slate-200 underline-offset-8">Featured Work</h2>
                <p className="text-slate-500 mt-4 max-w-md italic">A selection of technical projects exploring different domains of software engineering.</p>
              </div>
              <a href="https://github.com/vidyanshshukla26-oss" className="inline-flex items-center gap-2 font-bold group">
                View all on GitHub <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <div 
                  key={index} 
                  className={`p-10 rounded-3xl border border-slate-200 hover:shadow-xl transition-all flex flex-col justify-between h-full bg-white group ${index === 0 ? 'md:col-span-2 md:grid md:grid-cols-2 gap-12' : ''}`}
                >
                  <div className="space-y-6">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">{project.type}</span>
                      <h3 className="text-3xl font-bold mt-2 group-hover:text-slate-600 transition-colors">{project.title}</h3>
                    </div>
                    <p className="text-slate-600 leading-relaxed text-lg">{project.description}</p>
                    <div className="flex flex-wrap gap-2 pt-2">
                      {project.tech.map((t, i) => (
                        <span key={i} className="px-3 py-1 bg-slate-900 text-white rounded-lg text-xs font-bold tracking-tight">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mt-8 md:mt-0 flex items-center justify-end">
                    <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-slate-900 group-hover:text-white transition-all transform group-hover:rotate-45">
                      <ExternalLink className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Education & Achievements */}
        <section className="bg-slate-900 text-white py-24">
          <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-20">
            <motion.div {...SECTION_ANIMATION} className="space-y-12">
              <h2 className="text-3xl font-bold flex items-center gap-4">
                <GraduationCap className="w-8 h-8 text-blue-400" /> Foundation
              </h2>
              <div className="space-y-6">
                <div className="border-l-2 border-slate-700 pl-8 relative">
                  <div className="absolute -left-1.25 top-0 w-2 h-2 rounded-full bg-blue-400" />
                  <h3 className="text-xl font-bold">Bachelor of Technology (B.Tech)</h3>
                  <p className="text-slate-400">Information Technology</p>
                  <p className="text-slate-400 mt-2 font-medium">Narula Institute of Technology</p>
                  <p className="text-blue-400 text-sm mt-1 font-bold">Class of 2029</p>
                </div>
              </div>
            </motion.div>

            <motion.div {...SECTION_ANIMATION} className="space-y-12">
              <h2 className="text-3xl font-bold flex items-center gap-4">
                <Award className="w-8 h-8 text-yellow-400" /> Recognition
              </h2>
              <div className="space-y-8">
                <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                  <h4 className="font-bold">Technical Interview Preparation</h4>
                  <p className="text-slate-400 text-sm mt-2 leading-relaxed">Actively practicing Data Structures and Algorithms to cross the frontier of high-stakes technical interviews.</p>
                </div>
                <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                  <h4 className="font-bold">Active GitHub Contributor</h4>
                  <p className="text-slate-400 text-sm mt-2 leading-relaxed">Consistently shipping code and engaging with open-source development projects.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-slate-200 py-12">
          <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-col items-center md:items-start gap-2">
              <div className="text-slate-900 font-bold tracking-tight">VS/ Portfolio v2.0</div>
              <div className="text-slate-400 text-xs font-mono uppercase tracking-[0.2em]">© 2026 Vidyansh Shukla</div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8 text-sm font-medium text-slate-500">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-slate-200 rounded-full" /> English
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 bg-slate-200 rounded-full" /> Hindi
              </div>
            </div>

            <div className="flex gap-6">
              <a href="https://github.com/vidyanshshukla26-oss" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-slate-900 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="mailto:shuklavidyansh26@gmail.com" className="text-slate-400 hover:text-slate-900 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
              <span className="text-slate-400 flex items-center gap-2 text-sm font-bold bg-slate-50 px-3 py-1 rounded-full border border-slate-100">
                <Phone className="w-4 h-4" /> +91 8420224453
              </span>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

