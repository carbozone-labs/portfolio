import { useState } from "react";
import { motion } from "framer-motion";
import { FiMail, FiLinkedin, FiGithub, FiMapPin, FiSend, FiCheck, FiAlertCircle } from "react-icons/fi";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const SERVICE_ID = "service_clyania";
const TEMPLATE_ID = "template_aehqkqy";
const PUBLIC_KEY = "tbUFff-_JGpk4kxvx";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
        from_name: form.name,
        from_email: form.email,
        subject: form.subject,
        message: form.message,
        to_name: "Atharv Ekavire",
      }, PUBLIC_KEY);
      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section id="contact">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="section-subtitle">— get in touch</p>
          <h2 className="section-title">Contact</h2>
        </motion.div>

        <div className="contact__inner">
          <motion.div
            className="contact__info"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3>Let us work together</h3>
            <p>Open to research collaborations, ML projects, internships, and exciting opportunities. Drop me a message!</p>
            <div className="contact__links">
              <a href="mailto:atharvekavire01@gmail.com" className="contact__link">
                <span className="contact__link-icon"><FiMail /></span>
                atharvekavire01@gmail.com
              </a>
              <a href="https://www.linkedin.com/in/atharv-ekvire/" target="_blank" rel="noreferrer" className="contact__link">
                <span className="contact__link-icon"><FiLinkedin /></span>
                linkedin.com/in/atharv-ekvire
              </a>
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="contact__link">
                <span className="contact__link-icon"><FiGithub /></span>
                https://github.com/carbozone-labs
              </a>
              <span className="contact__link">
                <span className="contact__link-icon"><FiMapPin /></span>
                Pune, Maharashtra, India
              </span>
            </div>
          </motion.div>

          <motion.form
            className="contact__form"
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="form-row">
              <div className="form-group">
                <label>Name</label>
                <input name="name" type="text" placeholder="Your name" value={form.name} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input name="email" type="email" placeholder="your@email.com" value={form.email} onChange={handleChange} required />
              </div>
            </div>
            <div className="form-group">
              <label>Subject</label>
              <input name="subject" type="text" placeholder="Project / Collaboration / Query" value={form.subject} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>Message</label>
              <textarea name="message" rows="5" placeholder="Tell me about your project..." value={form.message} onChange={handleChange} required />
            </div>

            {status === "success" && (
              <div className="form-alert success">
                <FiCheck /> Message sent! I will get back to you soon.
              </div>
            )}
            {status === "error" && (
              <div className="form-alert error">
                <FiAlertCircle /> Something went wrong. Please try again.
              </div>
            )}

            <button type="submit" className="contact__submit" disabled={status === "sending"}>
              {status === "sending" ? "Sending..." : <><FiSend /> Send Message</>}
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
