import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import { motion } from "framer-motion";
import { 
  Github, Linkedin, Mail, ArrowUpRight, Download, 
  ExternalLink, Code2, Server, Database, Cloud, 
  Menu, X, Terminal, Cpu, Blocks
} from "lucide-react";
import "./styles.css";

const github = "https://github.com/tasneemfattal";
const linkedin = "https://www.linkedin.com/in/tasnim-fattal-900a801a8/";
const email = "mailto:tasnimfattal2003@gmail.com";

const skills = {
  Programming: { icon: <Terminal size={24}/>, items: ["Java", "JavaScript", "C", "C++", "C#", "Python"] },
  Backend: { icon: <Server size={24}/>, items: ["Spring Boot", "Spring Security", "Spring Data JPA", "REST APIs", "JWT", "Hibernate", "Maven"] },
  Frontend: { icon: <Code2 size={24}/>, items: ["React.js", "HTML5", "CSS3", "Bootstrap", "Tailwind CSS", "Axios"] },
  Systems: { icon: <Cpu size={24}/>, items: ["Data Structures", "Algorithms", "Operating Systems", "Computer Networks"] },
  Database: { icon: <Database size={24}/>, items: ["MySQL", "SQL Server"] },
  Tools_Cloud: { icon: <Cloud size={24}/>, items: ["Git", "GitHub", "AWS (EC2, S3)", "Vercel", "Postman", "IntelliJ IDEA"] }
};

const projects = [
  { title: "Conference Management System", type: "Graduation Project", desc: "A full-stack conference management platform developed in a 3-member team. I worked on the frontend and frontend-backend integration, connecting React interfaces with REST APIs.", tags: ["React", "Spring Boot", "MySQL", "JWT", "Spring Security", "Cloudinary"] },
  { title: "Lazord34 Vehicle Marketplace", type: "Team Project", desc: "A vehicle sales and rental platform for the Istanbul market. I contributed to frontend development and integrated frontend pages with backend APIs while collaborating through Git and GitHub.", tags: ["React", "REST APIs", "JavaScript", "Git", "GitHub"] },
  { title: "Task Management System", type: "Web Application", desc: "A full-stack daily task management application with user authentication and CRUD functionality, deployed online.", tags: ["React", "REST APIs", "Authentication", "CRUD"] },
  { title: "Snake Game", type: "Academic Project", desc: "A Java network programming project developed for the Computer Networks course and deployed using AWS.", tags: ["Java", "AWS", "Networking"] },
  { title: "Mini Desktop Search Engine", type: "Academic Project", desc: "A Java-based desktop search engine project focused on search and data-processing concepts.", tags: ["Java", "Algorithms", "Data Structures"] },
  { title: "Distributed Calculator", type: "Academic Project", desc: "A distributed calculator implemented in C as part of the Operating Systems course.", tags: ["C", "Operating Systems", "IPC"] }
];

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } }
};

function App() {
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "skills", "projects", "experience"];
      const scrollY = window.scrollY;
      
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el && scrollY >= el.offsetTop - 200 && scrollY < el.offsetTop + el.offsetHeight - 200) {
          setActiveSection(section);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className="navbar">
        <div className="nav-inner">
          <button className="nav-brand" onClick={() => go("home")}>
            Tasnim Fattal<span>.</span>
          </button>
          
          <button className="mobile-menu-btn" onClick={() => setOpen(!open)}>
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>

          <div className={`nav-links ${open ? 'mobile-open' : ''}`}>
            {["about", "skills", "projects", "experience"].map(item => (
              <button 
                key={item} 
                className={activeSection === item ? "active" : ""}
                onClick={() => go(item)}
              >
                {item}
              </button>
            ))}
          </div>

          <div className="nav-actions">
            <a className="btn-github" href={github} target="_blank" rel="noreferrer">
              <Github size={18} /> GitHub
            </a>
          </div>
        </div>
      </nav>

      <main>
        {/* HERO SECTION */}
        <section id="home" className="section-container hero">
          <div className="hero-grid">
            <motion.div 
              className="hero-text"
              initial="hidden" animate="visible" variants={stagger}
            >
              <motion.div variants={fadeUp} className="hero-eyebrow">
                <span className="dot"></span>
                Software Engineer
              </motion.div>
              <motion.h1 variants={fadeUp}>
                Building robust systems <br/>
                <span className="gradient-text">from core to cloud.</span>
              </motion.h1>
              <motion.p variants={fadeUp} className="hero-desc">
                I'm Tasnim Fattal, a Computer Engineering graduate passionate about solving complex problems. I build scalable backends, intuitive frontends, and optimize lower-level systems.
              </motion.p>
              <motion.div variants={fadeUp} className="hero-actions">
                <button className="btn-primary" onClick={() => go("projects")}>
                  View Work <ArrowUpRight size={18} />
                </button>
                <a className="btn-secondary" href="/Tasnim_Fattal_CV.pdf" download>
                  <Download size={18} /> Resume
                </a>
              </motion.div>
            </motion.div>

            <motion.div 
              className="hero-image-container"
              initial={{ opacity: 0, scale: 0.9 }} 
              animate={{ opacity: 1, scale: 1 }} 
              transition={{ duration: 0.8 }}
            >
              <div className="hero-glow"></div>
              <div className="hero-image-wrapper">
                <img src="/profile.jpg" alt="Tasnim Fattal" onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = '<div style="width:100%; height:100%; display:flex; align-items:center; justify-content:center; flex-direction:column; color:#94a3b8;"><svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg><p style="margin-top:16px; font-size:14px;">Add profile.jpg to public folder</p></div>';
                }}/>
              </div>
              
              <motion.div 
                className="floating-badge badge-1 glass-panel"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="badge-icon"><Server size={18}/></div>
                <div className="badge-text">
                  <span>Spring Boot</span>
                  <small>Backend</small>
                </div>
              </motion.div>

              <motion.div 
                className="floating-badge badge-2 glass-panel"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              >
                <div className="badge-icon"><Code2 size={18}/></div>
                <div className="badge-text">
                  <span>React.js</span>
                  <small>Frontend</small>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="section-container">
          <motion.div 
            className="section-header"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          >
            <span className="section-eyebrow">01 — ABOUT</span>
            <h2 className="section-title">An engineer who understands how things <span className="gradient-accent">connect.</span></h2>
          </motion.div>
          
          <div className="about-grid">
            <motion.div 
              className="about-text"
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            >
              <p>
                I am a Computer Engineering graduate from Fatih Sultan Mehmet Vakıf University with a strong foundation in <span className="highlight">algorithms, data structures, and software architecture.</span>
              </p>
              <p>
                While my recent internships have focused heavily on full-stack web development using Java Spring Boot and React, my academic background empowers me to tackle diverse challenges. Whether it's implementing distributed systems in C or building RESTful APIs in Java, I love bridging the gap between business logic, databases, and user interfaces.
              </p>
              <p>
                I am currently looking for a junior software engineering role where I can contribute to impactful products, collaborate with experienced engineers, and continue expanding my technical horizons.
              </p>
            </motion.div>

            <motion.div 
              className="glass-panel" style={{ padding: '32px' }}
              initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            >
              <h3 style={{ marginBottom: '24px', fontSize: '20px' }}>Education</h3>
              <div style={{ marginBottom: '32px' }}>
                <p style={{ color: 'var(--accent)', fontFamily: '"JetBrains Mono", monospace', fontSize: '13px', margin: '0 0 8px 0' }}>2021 — 2026</p>
                <h4 style={{ fontSize: '18px', color: '#fff', marginBottom: '4px' }}>Fatih Sultan Mehmet Vakıf University</h4>
                <p style={{ color: 'var(--text-muted)', margin: 0, fontSize: '15px' }}>Bachelor’s in Computer Engineering</p>
              </div>

              <h3 style={{ marginBottom: '16px', fontSize: '20px' }}>Core Coursework</h3>
              <div className="skill-tags">
                {["Data Structures", "Algorithms", "Operating Systems", "Computer Networks", "Software Engineering", "Database Systems"].map(course => (
                  <span key={course}>{course}</span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* SKILLS SECTION */}
        <section id="skills" className="section-container">
          <motion.div 
            className="section-header"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          >
            <span className="section-eyebrow">02 — SKILLS</span>
            <h2 className="section-title">My technical <span className="gradient-accent">arsenal.</span></h2>
          </motion.div>

          <motion.div 
            className="skills-grid"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
          >
            {Object.entries(skills).map(([name, data]) => (
              <motion.div key={name} variants={fadeUp} className="glass-panel skill-category">
                <div className="skill-icon-wrapper">
                  {data.icon}
                </div>
                <h3>{name.replace("_", " & ")}</h3>
                <div className="skill-tags">
                  {data.items.map(item => (
                    <span key={item}>{item}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="section-container">
          <motion.div 
            className="section-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          >
            <div>
              <span className="section-eyebrow">03 — PROJECTS</span>
              <h2 className="section-title">Selected <span className="gradient-accent">work.</span></h2>
            </div>
            <a href={github} target="_blank" rel="noreferrer" className="btn-secondary" style={{ display: 'none' /* handled via responsive or hidden if not needed */ }}>
              GitHub <ArrowUpRight size={16}/>
            </a>
          </motion.div>

          <motion.div 
            className="projects-grid"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}
          >
            {projects.map((project, idx) => (
              <motion.article key={idx} variants={fadeUp} className="glass-panel project-card">
                <div className="project-top">
                  <span className="project-type">{project.type}</span>
                  <div className="project-links">
                    <a href={github} target="_blank" rel="noreferrer" title="View Source"><ExternalLink size={20}/></a>
                  </div>
                </div>
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                <div className="skill-tags">
                  {project.tags.map(tag => <span key={tag}>{tag}</span>)}
                </div>
              </motion.article>
            ))}
          </motion.div>
        </section>

        {/* EXPERIENCE SECTION */}
        <section id="experience" className="section-container">
          <motion.div 
            className="section-header"
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
          >
            <span className="section-eyebrow">04 — EXPERIENCE</span>
            <h2 className="section-title">Professional <span className="gradient-accent">journey.</span></h2>
          </motion.div>

          <div className="timeline">
            {[
              { date: "JUL 2025 — AUG 2025", role: "Full-Stack Web Development Intern", company: "Fatih Sultan Mehmet Vakıf University", desc: "Developed full-stack features using Spring Boot, React, MySQL, and REST APIs. Collaborated through Git/GitHub in an Agile workflow and participated in API integration, testing, and debugging." },
              { date: "JUL 2024 — AUG 2024", role: "Backend Development Intern", company: "ArafasApps", desc: "Developed and tested RESTful APIs using Spring Boot and Postman, integrated databases, and worked on backend structure and performance optimization." },
              { date: "MAY 2023", role: "Wedding Planner", company: "Event By Farah Kallas", desc: "Managed clients, vendors, and event execution while developing strong communication, organization, and cross-functional teamwork skills." }
            ].map((exp, idx) => (
              <motion.div 
                key={idx} className="timeline-item"
                initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={fadeUp}
              >
                <div className="timeline-meta">
                  <span className="timeline-date">{exp.date}</span>
                  <span className="timeline-company">{exp.company}</span>
                </div>
                <div className="timeline-content">
                  <div className="timeline-dot"></div>
                  <h3>{exp.role}</h3>
                  <p>{exp.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="contact-section">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <span className="section-eyebrow">05 — WHAT'S NEXT?</span>
            <h2>Let's build something <span className="gradient-accent">impactful.</span></h2>
            <p>I'm currently looking for new opportunities in software engineering. Whether you have a question, a project idea, or a potential role, my inbox is always open.</p>
            <div className="hero-actions" style={{ justifyContent: 'center' }}>
              <a className="btn-primary" href={email}>
                <Mail size={18}/> Get in Touch
              </a>
              <a className="btn-secondary" href={linkedin} target="_blank" rel="noreferrer">
                <Linkedin size={18}/> LinkedIn
              </a>
            </div>
          </motion.div>
        </section>
      </main>

      <footer className="footer">
        <div>Designed & Built by Tasnim Fattal © 2026</div>
        <div style={{ marginTop: '8px', color: 'var(--text-muted)' }}>Software Engineer · Istanbul, Türkiye</div>
      </footer>
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);