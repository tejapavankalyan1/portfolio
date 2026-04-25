import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Navbar from "./components/PremiumNavbar";
import Hero from "./components/PremiumHero";
import About from "./components/PremiumAbout";
import Skills from "./components/PremiumSkills";
import Projects from "./components/PremiumProjects";
import Contact from "./components/PremiumContact";
import Background from "./components/PremiumBackground";
import Achievements from "./components/PremiumAchievements";

const sections = [
  "home",
  "about",
  "skills",
  "projects",
  "achievements",
  "contact",
];

const bootMessages = [
  "Initializing neural interface",
  "Syncing backend orchestration layers",
  "Loading portfolio intelligence graph",
  "System ready",
];

const telemetrySignals = [
  { label: "Inference", value: "98.2% signal stability" },
  { label: "Services", value: "12 active flows" },
  { label: "Latency", value: "42ms median response" },
];

function App() {
  const reduceMotion = useReducedMotion();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeSection, setActiveSection] = useState("home");
  const [bootProgress, setBootProgress] = useState(0);
  const [bootStep, setBootStep] = useState(0);
  const [showBoot, setShowBoot] = useState(!reduceMotion);

  const particles = useMemo(
    () =>
      Array.from({ length: 24 }, (_, index) => ({
        id: index,
        left: `${(index * 11) % 100}%`,
        top: `${(index * 19) % 100}%`,
        delay: `${(index % 7) * 0.8}s`,
        duration: `${8 + (index % 6) * 1.6}s`,
      })),
    [],
  );

  useEffect(() => {
    if (reduceMotion) {
      setShowBoot(false);
      return undefined;
    }

    const progressInterval = window.setInterval(() => {
      setBootProgress((value) => {
        if (value >= 100) {
          window.clearInterval(progressInterval);
          return 100;
        }

        return Math.min(100, value + 3);
      });
    }, 65);

    const stepInterval = window.setInterval(() => {
      setBootStep((value) => Math.min(value + 1, bootMessages.length - 1));
    }, 520);

    const closeTimeout = window.setTimeout(() => setShowBoot(false), 2550);

    return () => {
      window.clearInterval(progressInterval);
      window.clearInterval(stepInterval);
      window.clearTimeout(closeTimeout);
    };
  }, [reduceMotion]);

  useEffect(() => {
    let mouseFrame = null;

    const handleMouseMove = (event) => {
      if (mouseFrame) {
        cancelAnimationFrame(mouseFrame);
      }

      mouseFrame = requestAnimationFrame(() => {
        setMousePosition({ x: event.clientX, y: event.clientY });
      });
    };

    const handleScroll = () => {
      const current = sections.find((section) => {
        const element = document.getElementById(section);
        if (!element) return false;

        const rect = element.getBoundingClientRect();
        return rect.top <= 160 && rect.bottom >= 160;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    handleScroll();
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      if (mouseFrame) {
        cancelAnimationFrame(mouseFrame);
      }
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="app-shell">
      <Background mousePosition={mousePosition} />

      <AnimatePresence>
        {showBoot && (
          <motion.div
            className="boot-screen"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.45, ease: "easeOut" } }}
          >
            <div className="boot-grid" aria-hidden="true" />
            <motion.div
              className="boot-panel glass-panel"
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={reduceMotion ? {} : { opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <div className="boot-topline">
                <span className="boot-mark">TK</span>
                <span>AI Systems Portfolio</span>
              </div>

              <div className="boot-copy">
                <p className="boot-label">System bootstrap</p>
                <h1>Launching intelligent engineering interface</h1>
                <p>{bootMessages[bootStep]}</p>
              </div>

              <div className="boot-progress">
                <div className="boot-progress-bar">
                  <span style={{ width: `${bootProgress}%` }} />
                </div>
                <div className="boot-progress-meta">
                  <span>{bootProgress}%</span>
                  <span>secure pipeline handshake active</span>
                </div>
              </div>

              <div className="boot-log">
                {bootMessages.map((message, index) => (
                  <div
                    key={message}
                    className={`boot-log-line ${index <= bootStep ? "active" : ""}`}
                  >
                    <span>0{index + 1}</span>
                    <span>{message}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Navbar activeSection={activeSection} />

      {/* <motion.div
        className="floating-hud glass-panel"
        initial={reduceMotion ? false : { opacity: 0, y: -16 }}
        animate={showBoot && !reduceMotion ? { opacity: 0, y: -16 } : { opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay: showBoot ? 0.1 : 0.25 }}
      >
        <div className="hud-section">
          <span className="hud-label">Active module</span>
          <strong>{activeSection}</strong>
        </div>
        <div className="hud-signals">
          {telemetrySignals.map((signal) => (
            <div key={signal.label} className="hud-signal">
              <span>{signal.label}</span>
              <strong>{signal.value}</strong>
            </div>
          ))}
        </div>
      </motion.div> */}

      <main className="app-main">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Achievements />
        <Contact />
      </main>

      <div className="particles" aria-hidden="true">
        {particles.map((particle) => (
          <span
            key={particle.id}
            className="particle"
            style={{
              left: particle.left,
              top: particle.top,
              animationDelay: particle.delay,
              animationDuration: particle.duration,
            }}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
