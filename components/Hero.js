"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', padding: '0 24px', paddingTop: 80 }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 60, flexWrap: 'wrap', width: '100%' }}>

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          style={{ flex: 1, minWidth: 300 }}
        >
          <span className="section-tag">Available for work</span>
          <h1 className="font-display" style={{
            fontSize: 'clamp(42px, 7vw, 80px)', fontWeight: 800,
            letterSpacing: '-2px', lineHeight: 1.05, margin: '16px 0 24px'
          }}>
            Hi, I'm<br />
            <span style={{ color: 'var(--cyan)' }}>Aviral Singh</span>
          </h1>
          <p style={{ color: 'var(--muted)', fontSize: 18, lineHeight: 1.8, maxWidth: 480, marginBottom: 40 }}>
            Full Stack Developer & Problem Solver. I build clean, functional web apps and love turning ideas into working products.
          </p>
          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <a href="#projects" className="btn-primary">View Projects</a>
            <a href="#contact" className="btn-outline">Get in Touch</a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{ position: 'relative' }}
        >
          <div style={{
            position: 'absolute', inset: -3, borderRadius: '50%',
            background: 'linear-gradient(135deg, var(--cyan), var(--violet))',
            zIndex: 0
          }} />
          <div style={{
            position: 'relative', zIndex: 1,
            width: 300, height: 300, borderRadius: '50%', overflow: 'hidden',
            border: '4px solid var(--bg)'
          }}>
            <Image
              src="/profile.jpg"
              alt="Aviral Singh"
              fill
              style={{ objectFit: 'cover', objectPosition: 'top' }}
              priority
            />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
