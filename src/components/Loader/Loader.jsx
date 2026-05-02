import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Loader.css";

const steps = ["Initializing AI", "Loading Projects", "Fetching Research", "Almost Ready"];

export default function Loader({ onDone }) {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => { setVisible(false); setTimeout(onDone, 600); }, 300);
          return 100;
        }
        return prev + Math.random() * 12;
      });
    }, 100);
    return () => clearInterval(interval);
  }, [onDone]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div className="loader" exit={{ opacity: 0, scale: 1.05 }} transition={{ duration: 0.6 }}>
          <div className="loader__content">
            <motion.div className="loader__logo" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              Atharv<span>.</span>dev
            </motion.div>
            <motion.p className="loader__sub" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
              ML Engineer & AI Researcher
            </motion.p>
            <div className="loader__bar-wrap">
              <motion.div className="loader__bar" style={{ width: `${Math.min(progress, 100)}%` }} />
            </div>
            <motion.p className="loader__percent" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
              {Math.min(Math.floor(progress), 100)}%
            </motion.p>
            <div className="loader__dots">
              {steps.map((text, i) => (
                <motion.span key={text} className="loader__dot-text" initial={{ opacity: 0 }} animate={{ opacity: progress > i * 25 ? 1 : 0.2 }} transition={{ duration: 0.3 }}>
                  {progress > i * 25 ? "✓" : "○"} {text}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
