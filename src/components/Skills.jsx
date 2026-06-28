import React, { useEffect, useRef } from "react";

// Tech icons via react-icons
import { SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiNodedotjs, SiMongodb, SiMysql, SiFirebase, SiTailwindcss, SiGit } from "react-icons/si";

const skills = [
  { name: "HTML",         Icon: SiHtml5,       color: "#e34f26" },
  { name: "CSS",          Icon: SiCss3,        color: "#264de4" },
  { name: "JavaScript",   Icon: SiJavascript,  color: "#f7df1e" },
  { name: "TypeScript",   Icon: SiTypescript,  color: "#3178c6" },
  { name: "React",        Icon: SiReact,       color: "#61dafb" },
  { name: "Next.js",      Icon: SiNextdotjs,   color: "#ffffff" },
  { name: "Node.js",      Icon: SiNodedotjs,   color: "#3c873a" },
  { name: "MongoDB",      Icon: SiMongodb,     color: "#47a248" },
  { name: "MySQL",        Icon: SiMysql,       color: "#4479a1" },
  { name: "Firebase",     Icon: SiFirebase,    color: "#ffca28" },
  { name: "Tailwind CSS", Icon: SiTailwindcss, color: "#38bdf8" },
  { name: "Git",          Icon: SiGit,         color: "#f05032" },
];

const Skills = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      name="skills"
      className="w-full py-24"
      style={{ background: 'var(--navy-dark)' }}
    >
      <style>{`
        .skills-reveal { opacity: 0; transform: translateY(28px); transition: opacity 0.65s ease, transform 0.65s ease; }
        .skills-reveal.is-visible { opacity: 1; transform: translateY(0); }
      `}</style>

      <div ref={sectionRef} className="skills-reveal max-w-[1000px] mx-auto px-6">

        {/* Heading */}
        <div className="mb-12">
          <p className="section-heading">Skills & Tech</p>
          <p className="mt-4 text-base" style={{ color: 'var(--text-muted)' }}>
            Technologies I work with on a regular basis.
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
          {skills.map(({ name, Icon, color }, i) => (
            <div
              key={name}
              className="skill-badge group"
              style={{ animationDelay: `${i * 0.04}s` }}
            >
              <Icon
                size={36}
                style={{ color, filter: 'drop-shadow(0 0 6px currentColor)', transition: 'transform 0.3s' }}
                className="group-hover:scale-110"
              />
              <p
                className="text-xs font-semibold text-center"
                style={{ color: 'var(--text-muted)' }}
              >
                {name}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Skills;
