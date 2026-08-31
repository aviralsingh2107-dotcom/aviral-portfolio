"use client";
import { motion } from "framer-motion";

export default function Timeline() {
  const data = [
    {
      title: "Started B.Tech CSE",
      year: "Aug 2026",
      desc: "Enrolled in Computer Science Engineering at Lovely Professional University, Phagwara.",
      color: "var(--cyan)"
    },
    {
      title: "Python Developer Training",
      year: "2026",
      desc: "Completed the Python Developer Trainee program with Infosys Springboard — Django, NumPy, Pandas, and design patterns.",
      color: "var(--violet)"
    },
    {
      title: "Web Development Focus",
      year: "2026",
      desc: "Built full-stack MERN projects and this portfolio. Solved 200+ problems on coding platforms.",
      color: "var(--cyan)"
    },
  ];

  return (
    <section id="timeline" style={{ padding: '100px 24px' }}>
      <div style={{ maxWidth: 700, margin: '0 auto' }}>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: 56 }}
        >
          <span className="section-tag">Journey</span>
          <h2 className="font-display" style={{
            fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 800,
            letterSpacing: '-1.5px', lineHeight: 1.1
          }}>
            My <span style={{ color: 'var(--cyan)' }}>story</span>
          </h2>
        </motion.div>

        <div style={{ position: 'relative', paddingLeft: 32 }}>
          <div style={{
            position: 'absolute', left: 7, top: 8, bottom: 8,
            width: 2,
            background: 'linear-gradient(to bottom, var(--cyan), var(--violet), transparent)'
          }} />

          <div style={{ display: 'flex', flexDirection: 'column', gap: 36 }}>
            {data.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                style={{ position: 'relative' }}
              >
                <div style={{
                  position: 'absolute', left: -29, top: 20,
                  width: 14, height: 14, borderRadius: '50%',
                  background: item.color,
                  boxShadow: `0 0 12px ${item.color}`,
                  border: '2px solid var(--bg)'
                }} />

                <div className="glow-card" style={{ padding: '20px 24px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
                    <h3 style={{ fontSize: 17, fontWeight: 600 }}>{item.title}</h3>
                    <span style={{
                      fontSize: 12, fontWeight: 600, color: item.color,
                      background: item.color === 'var(--cyan)' ? 'rgba(0,245,212,0.1)' : 'rgba(191,90,242,0.1)',
                      padding: '3px 10px', borderRadius: 20
                    }}>{item.year}</span>
                  </div>
                  <p style={{ color: 'var(--muted)', fontSize: 14, lineHeight: 1.7 }}>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
