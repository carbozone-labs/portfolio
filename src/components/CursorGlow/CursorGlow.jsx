import { useEffect, useState } from "react";
import "./CursorGlow.css";

export default function CursorGlow() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const move = (e) => { setPos({ x: e.clientX, y: e.clientY }); setVisible(true); };
    const hide = () => setVisible(false);
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseleave", hide);
    return () => { window.removeEventListener("mousemove", move); window.removeEventListener("mouseleave", hide); };
  }, []);

  return (
    <div
      className="cursor-glow"
      style={{ left: pos.x, top: pos.y, opacity: visible ? 1 : 0 }}
    />
  );
}
