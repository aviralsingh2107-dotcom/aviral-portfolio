"use client";
import { motion } from "framer-motion";

export default function About() {
  const stats = [
    { value: "3+", label: "Projects Built" },
    { value: "4", label: "Languages" },
    { value: "3", label: "Certifications" },
    { value: "200+", label: "Problems Solved" },
  ];

  return (
    <section id="about" style={{ padding: '100px 24px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-tag">About Me</span>
          <h2 className="font-display" style={{
            fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 800,
            letterSpacing: '-1.5px', marginBottom: 24, lineHeight: 1.1
          }}>
            Building things that <span style={{ color: 'var(--cyan)' }}>work</span>,<br />
            one line at a time.
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 40, marginTop: 40 }}>

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <p style={{ color: 'var(--muted)', lineHeight: 1.9, fontSize: 16, marginBottom: 20 }}>
              I'm Aviral, a B.Tech Computer Science Engineering student at Lovely Professional University with a strong interest in full-stack web development.
            </p>
            <p style={{ color: 'var(--muted)', lineHeight: 1.9, fontSize: 16 }}>
              I enjoy solving problems with code — from building MERN stack applications to sharpening my fundamentals through competitive programming. I've solved 200+ problems on online coding platforms and I'm always looking to learn something new.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}
          >
            {stats.map((s, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.04 }}
                className="glow-card"
                style={{ padding: '24px 20px', textAlign: 'center' }}
              >
                <div className="font-display" style={{
                  fontSize: 40, fontWeight: 800, color: 'var(--cyan)',
                  lineHeight: 1, marginBottom: 8
                }}>{s.value}</div>
                <div style={{ fontSize: 12, color: 'var(--muted)', letterSpacing: '0.5px' }}>{s.label}</div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
