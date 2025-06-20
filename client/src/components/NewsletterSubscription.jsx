import React, { useState } from "react";
import "./NewsletterSubscription.css";

export default function NewsletterSubscription() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);
    if (!email || !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
      setStatus("Please enter a valid email address.");
      return;
    }
    try {
      const res = await fetch("http://localhost:5000/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (res.ok) {
        setStatus("Thank you for subscribing!");
        setEmail("");
      } else {
        setStatus("Subscription failed. Try again.");
      }
    } catch {
      setStatus("Network error. Try again.");
    }
  };

  return (
    <section className="newsletter-section" id="newsletter">
      <h2>Subscribe to our Newsletter</h2>
      <form className="newsletter-form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Subscribe</button>
      </form>
      {status && <div className="newsletter-status">{status}</div>}
    </section>
  );
}
