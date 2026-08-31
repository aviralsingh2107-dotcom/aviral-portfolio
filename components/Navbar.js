"use client";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["About", "Projects", "Skills", "Certifications", "Contact"];

  return (
    <nav style={{position:"fixed",top:0,left:0,right:0,zIndex:100,padding:"0 24px",transition:"all 0.3s ease",background:scrolled?"rgba(2,4,8,0.85)":"transparent",backdropFilter:scrolled?"blur(20px)":"none",borderBottom:scrolled?"1px solid rgba(255,255,255,0.06)":"1px solid transparent"}}>
      <div style={{maxWidth:1100,margin:"0 auto",display:"flex",alignItems:"center",justifyContent:"space-between",height:64}}>
        <span className="font-display" style={{fontSize:22,fontWeight:800,color:"var(--cyan)",letterSpacing:"-0.5px"}}>
          A.
        </span>
        <div style={{display:"flex",gap:32}}>
          {links.map((l) => (
            <a key={l} href={"#" + l.toLowerCase()} onMouseEnter={() => setHovered(l)} onMouseLeave={() => setHovered(null)} style={{color:hovered===l?"var(--white)":"var(--muted)",textDecoration:"none",fontSize:14,fontWeight:500,letterSpacing:"0.3px",transition:"color 0.2s"}}>
              {l}
            </a>
          ))}
        </div>
        <a href="#contact" className="btn-primary" style={{padding:"8px 20px",fontSize:13}}>
          Hire Me
        </a>
      </div>
    </nav>
  );
}
