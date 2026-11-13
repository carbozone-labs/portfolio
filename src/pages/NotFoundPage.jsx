import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <section style={{ minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center", textAlign: "center", flexDirection: "column", gap: "16px" }}>
      <p style={{ fontFamily: "var(--font-mono)", color: "var(--secondary)" }}>$ ERROR 404</p>
      <h1 className="section-title">Route Not Found</h1>
      <p style={{ color: "var(--text-secondary)" }}>The page you are looking for does not exist.</p>
      <Link to="/" className="btn btn-primary">Return Home</Link>
    </section>
  );
}
