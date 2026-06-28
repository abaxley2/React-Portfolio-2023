import React, { useEffect, useRef } from "react";
import {
  SiNextdotjs, SiReact, SiTypescript, SiJavascript, SiHtml5, SiCss3, SiTailwindcss,
  SiNodedotjs, SiMongodb, SiMysql, SiFirebase, SiGit, SiLinux,
} from "react-icons/si";
import { FaServer, FaFish, FaLaptop } from "react-icons/fa";
import { HiAcademicCap, HiLightningBolt, HiUserGroup } from "react-icons/hi";

const techAreas = [
  {
    label: "Frontend",
    techs: [
      { name: "Next.js",    Icon: SiNextdotjs    },
      { name: "React",      Icon: SiReact        },
      { name: "TypeScript", Icon: SiTypescript   },
      { name: "JavaScript", Icon: SiJavascript   },
      { name: "HTML",       Icon: SiHtml5        },
      { name: "CSS",        Icon: SiCss3         },
      { name: "Tailwind",   Icon: SiTailwindcss  },
    ],
  },
  {
    label: "Backend & Data",
    techs: [
      { name: "Node.js",  Icon: SiNodedotjs },
      { name: "MongoDB",  Icon: SiMongodb   },
      { name: "MySQL",    Icon: SiMysql     },
      { name: "Firebase", Icon: SiFirebase  },
    ],
  },
  {
    label: "Tools & Systems",
    techs: [
      { name: "Git",   Icon: SiGit   },
      { name: "Linux", Icon: SiLinux },
      { name: "Self-Hosting", Icon: FaServer },
    ],
  },
];

const strengths = [
  {
    Icon: HiAcademicCap,
    title: "Georgia Tech Certified",
    desc: "Professional Certificate in Full-Stack Web Development from the Georgia Institute of Technology.",
  },
  {
    Icon: HiLightningBolt,
    title: "Optimizer's Mindset",
    desc: "Proven track record of streamlining inventory, reducing costs, and maximizing efficiency in fast-paced environments.",
  },
  {
    Icon: HiUserGroup,
    title: "Leadership & Coordination",
    desc: "Experienced in managing large-scale operations, coordinating diverse teams, and delivering performance under pressure.",
  },
];

const About = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.06 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      name="about"
      className="w-full py-24"
      style={{ background: "linear-gradient(180deg, var(--navy-deep) 0%, var(--navy-dark) 100%)" }}
    >
      <style>{`
        .about-reveal { opacity: 0; transform: translateY(28px); transition: opacity 0.7s ease, transform 0.7s ease; }
        .about-reveal.is-visible { opacity: 1; transform: translateY(0); }
        .about-reveal.is-visible .d1 { transition-delay: 0.05s; }
        .about-reveal.is-visible .d2 { transition-delay: 0.15s; }
        .about-reveal.is-visible .d3 { transition-delay: 0.25s; }
        .about-reveal.is-visible .d4 { transition-delay: 0.35s; }
        .tech-chip {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          padding: 4px 10px;
          border-radius: 20px;
          font-size: 0.72rem;
          font-weight: 600;
          background: rgba(126,200,227,0.08);
          border: 1px solid rgba(126,200,227,0.18);
          color: var(--text-muted);
          transition: all 0.2s;
          white-space: nowrap;
        }
        .tech-chip:hover {
          background: rgba(126,200,227,0.15);
          border-color: rgba(126,200,227,0.45);
          color: var(--accent-cyan);
        }
        .strength-card {
          padding: 20px;
          border-radius: 14px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(126,200,227,0.1);
          transition: border-color 0.3s, background 0.3s;
        }
        .strength-card:hover {
          background: rgba(126,200,227,0.05);
          border-color: rgba(126,200,227,0.35);
        }
      `}</style>

      <div ref={sectionRef} className="about-reveal max-w-[1000px] mx-auto px-6">

        {/* ── Heading ── */}
        <div className="mb-14 d1">
          <p className="section-heading">About Me</p>
        </div>

        {/* ── Intro grid ── */}
        <div className="grid sm:grid-cols-2 gap-10 mb-14 d2">
          {/* Left: headline */}
          <div>
            <div className="glass-card p-7" style={{ borderLeft: "3px solid var(--accent-cyan)" }}>
              <h2 className="text-2xl font-bold leading-snug" style={{ color: "var(--text-primary)" }}>
                Hi, I'm Austin Baxley.
              </h2>
              <p className="mt-3 text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                Full-stack developer &amp; educator with a strong background in team leadership,
                systems management, and operations.
              </p>
              <p className="mt-3 text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                I thrive on tinkering under the hood — tailoring Linux environments, building
                responsive web applications, and writing clean, efficient code. For me,
                development is about engineering smooth, optimized workflows and solving complex
                configuration puzzles from the UI down to the database.
              </p>
            </div>
          </div>

          {/* Right: quote + personal */}
          <div className="flex flex-col gap-5">
            <blockquote
              className="p-5 rounded-xl italic text-sm leading-relaxed"
              style={{
                background: "rgba(126,200,227,0.06)",
                borderLeft: "3px solid var(--accent-cyan)",
                color: "var(--text-muted)",
              }}
            >
              "If it can be customized, optimized, or self-hosted, I'm probably working on a
              configuration file for it right now."
            </blockquote>

            {/* Personal interests */}
            <div className="glass-card p-5">
              <p
                className="text-xs font-bold uppercase tracking-widest mb-3"
                style={{ color: "var(--accent-cyan)" }}
              >
                When I'm not coding
              </p>
              <div className="flex flex-col gap-2">
                {[
                  { Icon: FaFish,   text: "Kayak fishing on Georgia waters" },
                  { Icon: HiUserGroup, text: "Local fraternal organizations" },
                  { Icon: FaLaptop, text: "ThinkPad modding & Linux tweaking" },
                ].map(({ Icon, text }) => (
                  <div key={text} className="flex items-center gap-3 text-sm" style={{ color: "var(--text-muted)" }}>
                    <Icon size={14} style={{ color: "var(--accent-cyan)", flexShrink: 0 }} />
                    {text}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Tech Stack ── */}
        <div className="mb-14 d3">
          <p
            className="text-xs font-bold uppercase tracking-widest mb-6"
            style={{ color: "var(--accent-cyan)" }}
          >
            Technical Stack &amp; Interests
          </p>
          <div className="flex flex-col gap-5">
            {techAreas.map(({ label, techs }) => (
              <div key={label} className="flex flex-col sm:flex-row sm:items-center gap-3">
                <p
                  className="text-xs font-semibold uppercase tracking-wider shrink-0 w-32"
                  style={{ color: "var(--text-muted)" }}
                >
                  {label}
                </p>
                <div className="flex flex-wrap gap-2">
                  {techs.map(({ name, Icon }) => (
                    <span key={name} className="tech-chip">
                      <Icon size={12} />
                      {name}
                    </span>
                  ))}
                </div>
              </div>
            ))}
            {/* Extra interests as chips */}
            <div className="flex flex-col sm:flex-row sm:items-start gap-3">
              <p
                className="text-xs font-semibold uppercase tracking-wider shrink-0 w-32"
                style={{ color: "var(--text-muted)" }}
              >
                Hobbies / Labs
              </p>
              <div className="flex flex-wrap gap-2">
                {[
                  "CachyOS", "Linux Mint", "Jellyfin", "Stremio", "ThinkPad Modding", "Self-Hosting",
                ].map((item) => (
                  <span key={item} className="tech-chip">{item}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ── Core Strengths ── */}
        <div className="d4">
          <p
            className="text-xs font-bold uppercase tracking-widest mb-6"
            style={{ color: "var(--accent-cyan)" }}
          >
            Core Strengths
          </p>
          <div className="grid sm:grid-cols-3 gap-4">
            {strengths.map(({ Icon, title, desc }) => (
              <div key={title} className="strength-card">
                <Icon size={22} className="mb-3" style={{ color: "var(--accent-cyan)" }} />
                <p className="text-sm font-bold mb-2" style={{ color: "var(--text-primary)" }}>
                  {title}
                </p>
                <p className="text-xs leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  {desc}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
