import { useEffect, useState } from "react";
import { FiSun, FiMoon, FiMonitor } from "react-icons/fi";
import "./ThemeToggle.css";

const MODES = ["system", "dark", "light"];

export default function ThemeToggle() {
  const [mode, setMode] = useState(() => localStorage.getItem("theme-mode") || "system");

  const applyTheme = (m) => {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = m === "dark" || (m === "system" && prefersDark);
    document.documentElement.setAttribute("data-theme", isDark ? "dark" : "light");
  };

  useEffect(() => {
    applyTheme(mode);
    localStorage.setItem("theme-mode", mode);
  }, [mode]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = () => { if (mode === "system") applyTheme("system"); };
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, [mode]);

  const next = () => setMode(prev => MODES[(MODES.indexOf(prev) + 1) % MODES.length]);

  const icon  = mode === "dark" ? <FiMoon /> : mode === "light" ? <FiSun /> : <FiMonitor />;
  const label = mode === "dark" ? "Dark"     : mode === "light"  ? "Light"  : "System";

  return (
    <button className="theme-toggle" onClick={next} title={`Theme: ${label}`}>
      <span className="theme-toggle__icon">{icon}</span>
      <span className="theme-toggle__label">{label}</span>
    </button>
  );
}
