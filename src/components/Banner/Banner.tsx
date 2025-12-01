import React from 'react';
import Button from '../shared/Button/Button';
import SocialLinks from '../shared/SocialLinks/SocialLinks';

const Banner: React.FC = () => {
  return (
    <header className="relative h-screen overflow-auto">
      {/* Background overlay */}
      <div className="absolute inset-0 bg-black/15"></div>

      {/* Background image */}
      <img
        src="img/background.jpg"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover opacity-55 scale-100 animate-[scaleImage_22s_ease-out]"
      />

      {/* Panel */}
      <div
        className="
    /* MOBILE: centered */
    absolute w-[92%] max-w-[500px]
    left-1/2 -translate-x-1/2 top-20
    grid grid-cols-1 gap-6
    bg-black/45 border border-black/40 shadow-xl p-6 rounded-xl text-white

    /* DESKTOP: move to right side */
    md:static md:transform-none 
    md:max-w-[700px]
    md:ml-auto md:mr-16 md:mt-28
    md:grid-cols-[200px_1fr]
  "
      >
        {/* Avatar */}
        <div
          className="
    w-40 h-40 rounded-lg bg-center bg-cover mx-auto
    md:w-[200px] md:h-[200px] md:mx-0
  "
          style={{ backgroundImage: "url('/img/me.png')" }}
        />

        {/* Content */}
        <div className="flex flex-col md:items-center">
          {/* Title */}
          <h1 className="font-light leading-tight tracking-wide drop-shadow-lg mb-2 text-3xl">
            Hello, I’m Tetiana
          </h1>

          {/* Subtitle */}
          <p className="max-w-[45ch] text-base leading-relaxed mb-5 text-white/95 md:text-center">
            I’m based in Melbourne and available for Front-End / Full-Stack roles (React +
            TypeScript + Node.js).
          </p>

          {/* CTA buttons */}
          <div
            className="
    flex gap-3 flex-wrap justify-center
    md:flex-nowrap md:justify-start
  "
          >
            <Button onClick={() => window.open('/Resume_Tetiana_Murashova.pdf', '_blank')}>
              Download CV
            </Button>

            <a href="#portfolio">
              <Button variant="ghost">View Projects</Button>
            </a>

            <a href="#contacts">
              <Button variant="ghost">Contact Me</Button>
            </a>
          </div>

          {/* Social links */}
          <div className="mt-3">
            <SocialLinks />
          </div>
        </div>
      </div>

      {/* Keyframes */}
      <style>{`
        @keyframes scaleImage {
          from { transform: scale(1.2); }
          to { transform: scale(1); }
        }
      `}</style>
    </header>
  );
};

export default Banner;
