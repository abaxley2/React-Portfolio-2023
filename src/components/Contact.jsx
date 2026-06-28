import React, { useRef, useEffect } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const Contact = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.12 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      name="contact"
      className="w-full py-24"
      style={{ background: 'var(--navy-dark)' }}
    >
      <style>{`
        .contact-reveal { opacity: 0; transform: translateY(28px); transition: opacity 0.7s ease, transform 0.7s ease; }
        .contact-reveal.is-visible { opacity: 1; transform: translateY(0); }
        .contact-input {
          width: 100%;
          padding: 12px 16px;
          border-radius: 8px;
          font-size: 0.9rem;
          outline: none;
          transition: border-color 0.25s ease, box-shadow 0.25s ease;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(126,200,227,0.15);
          color: var(--text-primary);
        }
        .contact-input::placeholder { color: var(--text-muted); }
        .contact-input:focus {
          border-color: var(--accent-cyan);
          box-shadow: 0 0 0 3px rgba(126,200,227,0.12);
        }
      `}</style>

      <div ref={sectionRef} className="contact-reveal max-w-[720px] mx-auto px-6">

        {/* Heading */}
        <div className="mb-12">
          <p className="section-heading">Get In Touch</p>
          <p className="mt-4 text-base leading-relaxed" style={{ color: 'var(--text-muted)' }}>
            I'm currently open to new opportunities. Whether you have a question,
            a project idea, or just want to say hi — my inbox is always open.
          </p>
        </div>

        {/* Form */}
        <form
          method="POST"
          action="https://getform.io/f/28678e16-e129-4d67-8161-de3df054d7b9"
          className="flex flex-col gap-4"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <input
              className="contact-input"
              type="text"
              placeholder="Your Name"
              name="name"
              id="contact-name"
            />
            <input
              className="contact-input"
              type="email"
              placeholder="Your Email"
              name="email"
              id="contact-email"
            />
          </div>
          <textarea
            className="contact-input"
            name="message"
            id="contact-message"
            rows="7"
            placeholder="Your Message"
          />
          <div className="flex justify-end mt-2">
            <button type="submit" className="btn-accent">
              Send Message
            </button>
          </div>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-4 my-10">
          <div className="flex-1 h-px" style={{ background: 'rgba(126,200,227,0.12)' }} />
          <p className="text-xs uppercase tracking-widest" style={{ color: 'var(--text-muted)' }}>
            or reach out directly
          </p>
          <div className="flex-1 h-px" style={{ background: 'rgba(126,200,227,0.12)' }} />
        </div>

        {/* Social quick links */}
        <div className="flex justify-center gap-6">
          {[
            { href: "https://www.linkedin.com/in/abaxley2/", Icon: FaLinkedin, label: "LinkedIn" },
            { href: "https://github.com/abaxley2",           Icon: FaGithub,   label: "GitHub"   },
            { href: "mailto:AusBaxley@gmail.com",            Icon: HiOutlineMail, label: "Email" },
          ].map(({ href, Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="flex flex-col items-center gap-2 group"
            >
              <div
                className="p-3 rounded-xl transition-all duration-25"
                style={{
                  background: 'rgba(126,200,227,0.08)',
                  border: '1px solid rgba(126,200,227,0.15)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'rgba(126,200,227,0.16)';
                  e.currentTarget.style.borderColor = 'rgba(126,200,227,0.5)';
                  e.currentTarget.style.transform = 'translateY(-3px)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'rgba(126,200,227,0.08)';
                  e.currentTarget.style.borderColor = 'rgba(126,200,227,0.15)';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <Icon size={22} style={{ color: 'var(--accent-cyan)' }} />
              </div>
              <span className="text-xs" style={{ color: 'var(--text-muted)' }}>{label}</span>
            </a>
          ))}
        </div>

        {/* Footer credit */}
        <p className="text-center text-xs mt-14" style={{ color: 'rgba(136,146,176,0.5)' }}>
          Designed & built by Austin Baxley · {new Date().getFullYear()}
        </p>

      </div>
    </div>
  );
};

export default Contact;
