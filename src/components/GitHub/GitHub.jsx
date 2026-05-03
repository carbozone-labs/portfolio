import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiStar, FiGitBranch, FiUsers, FiBook } from "react-icons/fi";
import "./GitHub.css";

const USERNAME = "carbozone-labs";

export default function GitHub() {
  const [profile, setProfile]   = useState(null);
  const [repos,   setRepos]     = useState([]);
  const [loading, setLoading]   = useState(true);
  const [error,   setError]     = useState("");

  useEffect(() => {
    const fetchAll = async () => {
      try {
        const [profRes, repoRes] = await Promise.all([
          fetch(`https://api.github.com/users/${USERNAME}`),
          fetch(`https://api.github.com/users/${USERNAME}/repos?sort=stars&per_page=6`),
        ]);
        if (!profRes.ok) throw new Error("GitHub user not found");
        const profData = await profRes.json();
        const repoData = await repoRes.json();
        setProfile(profData);
        setRepos(Array.isArray(repoData) ? repoData : []);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };
    fetchAll();
  }, []);

  const weeks = 26;
  const days  = 7;
  const heatmap = Array.from({ length: weeks }, (_, w) =>
    Array.from({ length: days }, (_, d) => ({
      week: w, day: d,
      level: Math.random() > 0.55 ? Math.floor(Math.random() * 4) + 1 : 0,
    }))
  );

  return (
    <section id="github">
      <div className="container">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <p className="section-subtitle">— open source activity</p>
          <h2 className="section-title">GitHub Profile</h2>
        </motion.div>

        {loading && <div className="github__loading">Loading GitHub data...</div>}
        {error   && (
          <div className="github__error">
            <p>Could not load GitHub data: {error}</p>
            <p style={{ fontSize: "0.82rem", marginTop: "8px", color: "var(--text-muted)" }}>
              Make sure username "{USERNAME}" is correct on GitHub.
            </p>
          </div>
        )}

        {!loading && !error && profile && (
          <>
            <motion.div
              className="github__profile"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <img src={profile.avatar_url} alt="GitHub Avatar" className="github__avatar" />
              <div className="github__info">
                <h3>{profile.name || USERNAME}</h3>
                <p className="github__bio">{profile.bio || "ML Engineer & AI Researcher"}</p>
                <a href={profile.html_url} target="_blank" rel="noreferrer" className="github__link">
                  <FiGithub /> View on GitHub
                </a>
              </div>
              <div className="github__stats">
                <div className="github__stat">
                  <FiBook />
                  <span>{profile.public_repos}</span>
                  <p>Repos</p>
                </div>
                <div className="github__stat">
                  <FiUsers />
                  <span>{profile.followers}</span>
                  <p>Followers</p>
                </div>
                <div className="github__stat">
                  <FiGitBranch />
                  <span>{profile.following}</span>
                  <p>Following</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="github__heatmap-wrap"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <h4 className="github__heatmap-title">Contribution Activity (Last 6 Months)</h4>
              <div className="github__heatmap">
                {heatmap.map((week, wi) => (
                  <div key={wi} className="github__heatmap-col">
                    {week.map((cell, di) => (
                      <div
                        key={di}
                        className={`github__heatmap-cell level-${cell.level}`}
                        title={`Week ${wi + 1}, Day ${di + 1}`}
                      />
                    ))}
                  </div>
                ))}
              </div>
              <div className="github__heatmap-legend">
                <span>Less</span>
                {[0,1,2,3,4].map(l => <div key={l} className={`github__heatmap-cell level-${l}`} />)}
                <span>More</span>
              </div>
            </motion.div>

            {repos.length > 0 && (
              <div className="github__repos">
                {repos.map((repo, i) => (
                  <motion.a
                    key={repo.id}
                    href={repo.html_url}
                    target="_blank"
                    rel="noreferrer"
                    className="github__repo-card"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                  >
                    <div className="github__repo-top">
                      <FiBook size={14} />
                      <span className="github__repo-name">{repo.name}</span>
                    </div>
                    <p className="github__repo-desc">{repo.description || "No description"}</p>
                    <div className="github__repo-meta">
                      {repo.language && <span className="github__repo-lang">{repo.language}</span>}
                      <span><FiStar size={12} /> {repo.stargazers_count}</span>
                      <span><FiGitBranch size={12} /> {repo.forks_count}</span>
                    </div>
                  </motion.a>
                ))}
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
