import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="relative w-full h-screen overflow-hidden" style={{ background: 'var(--navy-deep)' }}>

      {/* Animated orb blobs */}
      <div
        className="orb"
        style={{
          width: '500px',
          height: '500px',
          background: 'rgba(74, 158, 255, 0.12)',
          top: '-100px',
          right: '-80px',
          animationDelay: '0s',
        }}
      />
      <div
        className="orb"
        style={{
          width: '350px',
          height: '350px',
          background: 'rgba(126, 200, 227, 0.1)',
          bottom: '80px',
          left: '-60px',
          animationDelay: '5s',
        }}
      />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(126,200,227,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(126,200,227,0.03) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Content */}
      <div className="relative max-w-[1200px] mx-auto px-8 flex flex-col justify-center h-full z-10">

        <p
          className="animate-fade-in-up text-sm sm:text-base font-mono tracking-widest uppercase mb-3"
          style={{ color: 'var(--accent-cyan)' }}
        >
          Hello, my name is
        </p>

        <h1
          className="animate-fade-in-up-delay-1 text-5xl sm:text-7xl font-extrabold leading-tight tracking-tight"
          style={{ color: 'var(--text-primary)' }}
        >
          Austin Baxley
        </h1>

        <h2
          className="animate-fade-in-up-delay-2 text-3xl sm:text-5xl font-bold mt-2"
          style={{ color: 'var(--text-muted)' }}
        >
          Full-Stack Developer
        </h2>

        <p
          className="animate-fade-in-up-delay-3 mt-6 max-w-[600px] text-base sm:text-lg leading-relaxed"
          style={{ color: 'var(--text-muted)' }}
        >
          I build polished, production-ready web applications. My background in
          business management gives me a sharp eye for user needs and a{' '}
          <span style={{ color: 'var(--accent-cyan)', fontWeight: 600 }}>
            product mindset
          </span>{' '}
          that goes beyond just writing code.
        </p>

        <div className="animate-fade-in-up-delay-4 mt-10 flex flex-wrap gap-4">
          <Link to="work" smooth={true} duration={500}>
            <button className="btn-accent">
              View My Work
              <HiArrowNarrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </Link>
          <Link to="contact" smooth={true} duration={500}>
            <button
              className="inline-flex items-center gap-2 px-7 py-3 rounded-md font-semibold text-sm transition-all duration-25 cursor-pointer"
              style={{
                background: 'rgba(126,200,227,0.1)',
                color: 'var(--text-primary)',
                border: '1px solid rgba(126,200,227,0.2)',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'rgba(126,200,227,0.18)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = 'rgba(126,200,227,0.1)';
              }}
            >
              Get In Touch
            </button>
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Home;
