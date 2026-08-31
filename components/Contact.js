"use client";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Contact() {
  const links = [
    {
      icon: <FaGithub />,
      label: "GitHub",
      sub: "github.com/aviralsingh2107-dotcom",
      href: "https://github.com/aviralsingh2107-dotcom",
      color: "var(--white)"
    },
    {
      icon: <FaLinkedin />,
      label: "LinkedIn",
      sub: "linkedin.com/in/aviralsingh072",
      href: "https://www.linkedin.com/in/aviralsingh072",
      color: "#0A66C2"
    },
    {
      icon: <FaEnvelope />,
      label: "Email",
      sub: "Get in touch",
      href: "mailto:aviral.singh2107@gmail.com",
      color: "var(--cyan)"
    },
  ];

  return (
    <section id="contact" style={{ padding: '100px 24px' }}>
      <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="section-tag">Contact</span>
          <h2 className="font-display" style={{
            fontSize: 'clamp(36px, 6vw, 64px)', fontWeight: 800,
            letterSpacing: '-2px', lineHeight: 1.1, marginBottom: 16
          }}>
            Let's <span style={{ color: 'var(--cyan)' }}>work</span> together
          </h2>
          <p style={{ color: 'var(--muted)', fontSize: 16, marginBottom: 56, lineHeight: 1.7 }}>
            I'm currently open to internships, collaborations, and interesting projects.
          </p>
          <p style={{ color: 'var(--cyan)', fontSize: 15, marginBottom: 56, fontWeight: 600 }}>
            📞 +91 6394065433
          </p>
        </motion.div>

        <div style={{ display: 'flex', justifyContent: 'center', gap: 16, flexWrap: 'wrap' }}>
          {links.map((l, i) => (
            <motion.a
              key={i}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4, scale: 1.02 }}
              className="glow-card"
              style={{
                padding: '24px 28px', textDecoration: 'none',
                display: 'flex', alignItems: 'center', gap: 16, minWidth: 220,
                color: 'var(--white)'
              }}
            >
              <div style={{ fontSize: 28, color: l.color }}>{l.icon}</div>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontWeight: 600, fontSize: 15 }}>{l.label}</div>
                <div style={{ fontSize: 12, color: 'var(--muted)', marginTop: 2 }}>{l.sub}</div>
              </div>
            </motion.a>
          ))}
        </div>

      </div>
    </section>
  );
}
