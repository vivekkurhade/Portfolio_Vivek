import React, { useEffect, useRef } from 'react';

function Hero() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    let stars = Array.from({ length: 150 }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      radius: Math.random() * 1.2,
      opacity: Math.random(),
      speed: Math.random() * 0.5 + 0.2
    }));

    let shootingStars = [];

    function addShootingStar() {
      shootingStars.push({
        x: Math.random() * width,
        y: Math.random() * height * 0.5,
        length: Math.random() * 80 + 50,
        speed: Math.random() * 8 + 6,
        opacity: 1
      });
    }

    setInterval(addShootingStar, 800);

    function animate() {
      ctx.clearRect(0, 0, width, height);

      stars.forEach(star => {
        star.opacity += (Math.random() - 0.5) * 0.05;
        if (star.opacity < 0.1) star.opacity = 0.1;
        if (star.opacity > 1) star.opacity = 1;

        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${star.opacity})`;
        ctx.fill();
      });

      shootingStars.forEach((shootingStar, index) => {
        ctx.beginPath();
        ctx.moveTo(shootingStar.x, shootingStar.y);
        ctx.lineTo(shootingStar.x + shootingStar.length, shootingStar.y);
        ctx.strokeStyle = `rgba(255, 255, 255, ${shootingStar.opacity})`;
        ctx.lineWidth = 2;
        ctx.stroke();

        shootingStar.x += shootingStar.speed;
        shootingStar.opacity -= 0.02;
        if (shootingStar.opacity <= 0) {
          shootingStars.splice(index, 1);
        }
      });

      requestAnimationFrame(animate);
    }

    animate();

    window.addEventListener('resize', () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
    });
  }, []);

  return (
    <section
      id="home"
      className="flex flex-col justify-center items-center min-h-screen px-4 text-center bg-black text-white overflow-x-hidden relative"
    >
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0" />

      <div className="relative z-10">
        <h1
          className="text-5xl sm:text-7xl font-extrabold mb-6 tracking-tight font-sans animate-float"
          data-aos="fade-down"
        >
          <br />
          <span className="special-neon">
            {"V I V E K".split('').map((letter, index) => (
              <span key={index} className="inline-block animate-breathe mx-2">{letter}</span>
            ))}
          </span>
        </h1>

        <p
          className="text-lg sm:text-1xl mb-8 text-cyan-400 max-w-2xl mx-auto font-sans"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          A passionate Developer aiming to build impactful solutions
        </p>

        <a
          href="#contact"
          className="inline-block bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-200 transition-transform transform hover:scale-105 text-base sm:text-lg shadow-lg"
          data-aos="zoom-in"
          data-aos-delay="400"
        >
          Hire Me
        </a>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Special+Gothic+Expanded+One&family=Poppins:wght@400;600;700&display=swap');

        .font-sans {
          font-family: 'Poppins', 'Roboto', 'Helvetica Neue', sans-serif;
        }

        .special-neon {
          font-family: 'Special Gothic Expanded One', sans-serif;
          text-shadow:
            0 0 2px rgba(255, 255, 255, 0.6),
            0 0 4px rgba(255, 255, 255, 0.5),
            0 0 8px rgba(255, 255, 255, 0.4),
            0 0 16px rgba(255, 255, 255, 0.3);
        }

        .animate-breathe {
          animation: breathe 3s ease-in-out infinite;
        }

        @keyframes breathe {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </section>
  );
}

export default Hero;
