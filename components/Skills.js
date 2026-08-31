"use client";
import { motion } from "framer-motion";

export default function Skills() {
  const categories = [
    {
      label: "Languages",
      skills: [
        { name: "Java", level: 78 },
        { name: "JavaScript", level: 80 },
        { name: "C", level: 70 },
        { name: "C++", level: 68 },
      ]
    },
    {
      label: "Frontend & Backend",
      skills: [
        { name: "React", level: 78 },
        { name: "Node.js", level: 70 },
        { name: "Express.js", level: 68 },
        { name: "Tailwind CSS", level: 75 },
      ]
    },
    {
      label: "Databases & Tools",
      skills: [
        { name: "MongoDB", level: 70 },
        { name: "MySQL", level: 65 },
        { name: "Git & GitHub", level: 80 },
        { name: "Figma", level: 60 },
      ]
    }
  ];

  return (
    <section id="skills" style={{ padding: '100px 24px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: 56 }}
        >
          <span className="section-tag">Skills</span>
          <h2 className="font-display" style={{
            fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 800,
            letterSpacing: '-1.5px', lineHeight: 1.1
          }}>
            What I <span style={{ color: 'var(--violet)' }}>work with</span>
          </h2>
        </motion.div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
          {categories.map((cat, ci) => (
            <motion.div
              key={ci}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: ci * 0.15 }}
              className="glow-card"
              style={{ padding: '28px 24px' }}
            >
              <h3 style={{ fontSize: 13, fontWeight: 600, letterSpacing: '1.5px', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: 24 }}>
                {cat.label}
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
                {cat.skills.map((skill, si) => (
                  <div key={si}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
                      <span style={{ fontSize: 14, fontWeight: 500 }}>{skill.name}</span>
                      <span style={{ fontSize: 13, color: 'var(--muted)' }}>{skill.level}%</span>
                    </div>
                    <div style={{
                      height: 3, background: 'rgba(255,255,255,0.07)',
                      borderRadius: 2, overflow: 'hidden'
                    }}>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: si * 0.1, ease: 'easeOut' }}
                        style={{
                          height: '100%', borderRadius: 2,
                          background: ci % 2 === 0
                            ? 'linear-gradient(90deg, var(--cyan), rgba(0,245,212,0.4))'
                            : 'linear-gradient(90deg, var(--violet), rgba(191,90,242,0.4))'
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
