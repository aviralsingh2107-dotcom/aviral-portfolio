"use client";
import { motion } from "framer-motion";

export default function Certifications() {
  const certs = [
    {
      title: "Time Management Tips",
      org: "LinkedIn Learning",
      year: "March 2026",
      color: "var(--cyan)",
      link: "https://drive.google.com/file/d/1BTWYlLS3TcooZSnIW_Ocff_6OC_drZDd/view?usp=sharing"
    },
    {
      title: "Introduction to Cyber Security",
      org: "Infosys Springboard",
      year: "Aug 2025",
      color: "var(--violet)",
      link: "https://drive.google.com/file/d/1t3tIDQSmnMeBjxN_4J3aoPTbBLC35i5h/view?usp=sharing"
    },
    {
      title: "Fast Numerical Computing with Python",
      org: "Infosys Springboard",
      year: "Aug 2026",
      color: "var(--violet)",
      link: "https://drive.google.com/file/d/163dnpDQqYbCfqobtk-Js2Wff08wLyrey/view?usp=sharing"
    },
  ];

  return (
    <section id="certifications" style={{ padding: "100px 24px" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: 56 }}
        >
          <span className="section-tag">Certifications</span>
          <h2 className="font-display" style={{
            fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 800,
            letterSpacing: "-1.5px", lineHeight: 1.1
          }}>
            What I have <span style={{ color: "var(--violet)" }}>earned</span>
          </h2>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 20 }}>
          {certs.map((cert, i) => (
            <motion.a
              key={i}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              className="glow-card"
              style={{ padding: "28px 24px", textDecoration: "none", display: "block", cursor: "pointer" }}
            >
              <div style={{
                width: 44, height: 44, borderRadius: 12,
                background: cert.color === "var(--cyan)" ? "rgba(0,245,212,0.1)" : "rgba(191,90,242,0.1)",
                border: cert.color === "var(--cyan)" ? "1px solid rgba(0,245,212,0.2)" : "1px solid rgba(191,90,242,0.2)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontSize: 20, marginBottom: 16
              }}>📜</div>

              <h3 style={{ fontSize: 17, fontWeight: 600, marginBottom: 6, color: cert.color }}>{cert.title}</h3>
              <p style={{ fontSize: 13, color: "var(--muted)", marginBottom: 4 }}>
                {cert.org} &nbsp;·&nbsp; {cert.year}
              </p>
              <p style={{ fontSize: 12, color: cert.color, marginTop: 12 }}>
                View Certificate →
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
