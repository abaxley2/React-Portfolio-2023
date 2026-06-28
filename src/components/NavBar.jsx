import React, { useState, useEffect } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";

const navLinks = [
  { to: "home",    label: "Home"    },
  { to: "about",   label: "About"   },
  { to: "skills",  label: "Skills"  },
  { to: "work",    label: "Work"    },
  { to: "contact", label: "Contact" },
];

const socialLinks = [
  {
    label: "LinkedIn",
    Icon: FaLinkedin,
    href: "https://www.linkedin.com/in/abaxley2/",
    color: "#0072B1",
  },
  {
    label: "GitHub",
    Icon: FaGithub,
    href: "https://github.com/abaxley2",
    color: "#24292e",
  },
  {
    label: "Email",
    Icon: HiOutlineMail,
    href: "mailto:AusBaxley@gmail.com",
    color: "#D44638",
  },
  {
    label: "Resume",
    Icon: BsFillPersonLinesFill,
    href: "https://drive.google.com/file/d/12g--jtrm0lgXrLZlT0mCm3-dc4zYtz0D/view?usp=sharing",
    color: "#000C66",
  },
];

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* ── Frosted-glass navigation bar ── */}
      <div
        className="fixed w-full h-[72px] flex justify-between items-center px-6 z-50 transition-all duration-300"
        style={{
          background: scrolled ? 'rgba(3, 9, 24, 0.85)' : 'rgba(3, 9, 24, 0.5)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          borderBottom: scrolled ? '1px solid rgba(126,200,227,0.12)' : '1px solid transparent',
        }}
      >
        {/* Logo */}
        <Link to="home" smooth={true} duration={500} className="cursor-pointer">
          <span className="text-lg font-bold tracking-tight" style={{ color: 'var(--text-primary)' }}>
            Austin<span style={{ color: 'var(--accent-cyan)' }}>.</span>
          </span>
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map(({ to, label }) => (
            <li key={to} className="list-none px-0">
              <Link
                to={to}
                smooth={true}
                duration={500}
                className="px-4 py-2 rounded-md text-sm font-medium cursor-pointer"
                style={{ color: 'var(--text-muted)', transition: 'color 0.2s' }}
                spy={true}
                onMouseEnter={e => { e.currentTarget.style.color = 'var(--accent-cyan)'; }}
                onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-muted)'; }}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger */}
        <div
          onClick={() => setNav(!nav)}
          className="md:hidden z-10 cursor-pointer p-2 rounded-md"
          style={{ color: 'var(--text-primary)' }}
        >
          {nav ? <FaTimes size={20} /> : <FaBars size={20} />}
        </div>

        {/* Mobile overlay menu */}
        {nav && (
          <div
            className="absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center"
            style={{ background: 'rgba(3,9,24,0.97)', backdropFilter: 'blur(20px)' }}
          >
            <ul className="flex flex-col items-center gap-8">
              {navLinks.map(({ to, label }) => (
                <li key={to} className="list-none px-0">
                  <Link
                    onClick={() => setNav(false)}
                    to={to}
                    smooth={true}
                    duration={500}
                    className="text-3xl font-bold cursor-pointer"
                    style={{ color: 'var(--text-primary)', transition: 'color 0.2s' }}
                    onMouseEnter={e => { e.currentTarget.style.color = 'var(--accent-cyan)'; }}
                    onMouseLeave={e => { e.currentTarget.style.color = 'var(--text-primary)'; }}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* ── Social slide-out tabs ──
          Rendered as a SIBLING to the navbar (not a child) so that
          position:fixed resolves against the viewport, not the fixed navbar.
      ── */}
      <style>{`
        .social-sidebar {
          position: fixed;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          display: none;
          flex-direction: column;
          z-index: 49;
        }
        @media (min-width: 1280px) {
          .social-sidebar { display: flex; }
        }
        .social-tab {
          margin-left: -110px;
          transition: margin-left 0.3s ease;
        }
        .social-tab:hover {
          margin-left: -8px;
        }
      `}</style>

      <div className="social-sidebar">
        {socialLinks.map(({ label, Icon, href, color }) => (
          <div key={label} className="social-tab">
            <a
              href={href}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between w-[155px] h-[52px] px-4 text-sm font-semibold"
              style={{ background: color, color: '#fff', borderRadius: '0 6px 6px 0' }}
            >
              {label}
              <Icon size={20} />
            </a>
          </div>
        ))}
      </div>
    </>
  );
};

export default NavBar;
