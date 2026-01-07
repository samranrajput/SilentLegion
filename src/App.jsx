import { useState, useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";

// Components Import
import Navbar from "./components/Navbar/Navbar";
import MainContent from "./components/MainContent/MainContent";
import GuildRules from "./components/GuildRules/GuildRules";
import Footer from "./components/Footer/Footer";

// Assets Import
import slLogo from "./assets/silent-legion.png";
import "./App.css";

function App() {
  const [activeNav, setActiveNav] = useState("home");
  const canvasRef = useRef(null);
  const particles = useRef([]);

  useEffect(() => {
    AOS.init({ duration: 2000, once: true });

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let animationFrame;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", resize);
    resize();

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.current = particles.current.filter((p) => p.life > 0);
      particles.current.forEach((p) => {
        p.speedY += 0.4;
        p.x += p.speedX;
        p.y += p.speedY;
        p.rotation += p.spin;
        p.life--;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size);
        ctx.restore();
      });
      animationFrame = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  const fireConfetti = () => {
    const colors = ["#ff4d4f", "#e7c27d", "#560000", "#ffffff"];
    for (let i = 0; i < 150; i++) {
      particles.current.push({
        x: window.innerWidth / 2,
        y: window.innerHeight / 2,
        size: Math.random() * 8 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        speedX: (Math.random() - 0.5) * 15,
        speedY: Math.random() * -15 - 5,
        rotation: Math.random() * 360,
        spin: (Math.random() - 0.5) * 10,
        life: 120,
      });
    }
  };

  return (
    <div className="body">
      <canvas ref={canvasRef} id="confetti"></canvas>

      <figure>
        <img data-aos="zoom-in" src={slLogo} alt="Silent Legion" />
      </figure>

      <main className="container">
        <Navbar activeNav={activeNav} setActiveNav={setActiveNav} />

        {activeNav === "home" ? (
          <MainContent fireConfetti={fireConfetti} />
        ) : (
          <GuildRules />
        )}
      </main>

      <Footer />
    </div>
  );
}

export default App;
