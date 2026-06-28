import React, { useEffect, useRef } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import LocksbyLindsay from "../assets/LocksbyLindsay.png";
import ChatApp from "../assets/ChatApp.png";
import MarketFinderImg from "../assets/MarketFinderNew.png";

const projects = [
  {
    title: "Locks by Lindsay",
    description:
      "High-conversion editorial-style web platform built for a specialist hair studio in Cartersville, GA. Features transparent pricing, live Instagram feed integration, and a dynamic client review slider.",
    image: LocksbyLindsay,
    tags: ["Next.js 16", "React 19", "TypeScript", "Tailwind CSS"],
    demo: null,
    code: "https://github.com/abaxley2/locks-by-lindsay",
    featured: true,
  },
  {
    title: "Chat App",
    description:
      "Real-time chat application built with React and Firebase. Users can sign in, join chat rooms, and exchange messages instantly. Firebase Realtime Database and Authentication power the backend.",
    image: ChatApp,
    tags: ["React", "Firebase", "Firebase Auth", "Realtime DB"],
    demo: null,
    code: "https://github.com/abaxley2/Chat-App",
    featured: false,
  },
  {
    title: "Market Finder",
    description:
      "A market research web tool that lets users search and explore financial market data. Clean interface with data visualization and live lookup functionality.",
    image: MarketFinderImg,
    tags: ["React", "JavaScript", "REST API", "CSS"],
    demo: "https://abaxley2.github.io/Market-Finder/",
    code: "https://github.com/abaxley2/Market-Finder",
    featured: false,
  },
];

const Work = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.08 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      name="work"
      className="w-full py-24"
      style={{ background: 'linear-gradient(180deg, var(--navy-dark) 0%, var(--navy-deep) 100%)' }}
    >
      <style>{`
        .work-reveal { opacity: 0; transform: translateY(28px); transition: opacity 0.7s ease, transform 0.7s ease; }
        .work-reveal.is-visible { opacity: 1; transform: translateY(0); }

        .project-card {
          display: flex;
          flex-direction: column;
          border-radius: 16px;
          overflow: hidden;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(126, 200, 227, 0.12);
          transition: transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease;
        }
        .project-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 24px 48px rgba(0,0,0,0.5), 0 0 32px rgba(126, 200, 227, 0.12);
          border-color: rgba(126, 200, 227, 0.4);
        }
        .featured-badge {
          background: linear-gradient(135deg, var(--accent-cyan), #4a9eff);
          color: #030918;
          font-size: 0.65rem;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 3px 10px;
          border-radius: 20px;
        }
        .tag-pill {
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.03em;
          padding: 3px 10px;
          border-radius: 20px;
          background: rgba(126, 200, 227, 0.1);
          color: var(--accent-cyan);
          border: 1px solid rgba(126, 200, 227, 0.2);
        }
        .proj-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 8px 18px;
          border-radius: 6px;
          font-size: 0.82rem;
          font-weight: 600;
          transition: all 0.25s ease;
          cursor: pointer;
        }
        .proj-btn-primary {
          background: var(--accent-cyan);
          color: var(--navy-deep);
          border: 1px solid var(--accent-cyan);
        }
        .proj-btn-primary:hover {
          background: transparent;
          color: var(--accent-cyan);
          box-shadow: 0 0 16px rgba(126,200,227,0.3);
        }
        .proj-btn-ghost {
          background: transparent;
          color: var(--text-muted);
          border: 1px solid rgba(126,200,227,0.2);
        }
        .proj-btn-ghost:hover {
          color: var(--accent-cyan);
          border-color: var(--accent-cyan);
        }
      `}</style>

      <div ref={sectionRef} className="work-reveal max-w-[1100px] mx-auto px-6">

        {/* Heading */}
        <div className="mb-14">
          <p className="section-heading">Projects</p>
          <p className="mt-4 text-base" style={{ color: 'var(--text-muted)' }}>
            A selection of things I've built.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-3 gap-7">
          {projects.map((project) => (
            <div key={project.title} className="project-card">

              {/* Screenshot */}
              <div className="relative overflow-hidden" style={{ height: '210px' }}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
                {project.featured && (
                  <div className="absolute top-3 left-3">
                    <span className="featured-badge">⭐ Featured</span>
                  </div>
                )}
                {/* gradient fade */}
                <div
                  className="absolute inset-0"
                  style={{
                    background: 'linear-gradient(to bottom, transparent 50%, rgba(5,10,48,0.65) 100%)',
                  }}
                />
              </div>

              {/* Body */}
              <div className="flex flex-col flex-1 p-6 gap-4">
                <h3
                  className="text-lg font-bold"
                  style={{ color: 'var(--text-primary)' }}
                >
                  {project.title}
                </h3>

                <p
                  className="text-sm leading-relaxed flex-1"
                  style={{ color: 'var(--text-muted)' }}
                >
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag-pill">{tag}</span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3 mt-1 flex-wrap">
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noreferrer">
                      <button className="proj-btn proj-btn-primary">
                        <FaExternalLinkAlt size={11} /> Live Demo
                      </button>
                    </a>
                  )}
                  <a href={project.code} target="_blank" rel="noreferrer">
                    <button className="proj-btn proj-btn-ghost">
                      <FaGithub size={13} /> Code
                    </button>
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* GitHub CTA */}
        <div className="mt-14 text-center">
          <p className="text-sm mb-4" style={{ color: 'var(--text-muted)' }}>
            Want to see more?
          </p>
          <a href="https://github.com/abaxley2" target="_blank" rel="noreferrer">
            <button className="btn-accent">
              <FaGithub size={16} /> View All on GitHub
            </button>
          </a>
        </div>

      </div>
    </div>
  );
};

export default Work;
