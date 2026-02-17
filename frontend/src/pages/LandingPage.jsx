import React from "react";
import "../styles/LandingPage.css";

function LandingPage() {
  return (
    <div className="landing-container">

      {/* NAVBAR */}
      <nav className="navbar">
        <h2 className="logo">EventFlow</h2>
        <div className="nav-links">
          <button className="nav-btn">Student Login</button>
          <button className="nav-btn admin">Admin Login</button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-text">
          <h1>Manage & Attend Events Seamlessly</h1>
          <p>
            EventFlow helps students discover events and allows organizers
            to manage registrations and attendance using QR technology.
          </p>
          <div className="hero-buttons">
            <button className="primary-btn">Explore Events</button>
            <button className="secondary-btn">Get Started</button>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="features">
        <h2>Platform Features</h2>

        <div className="feature-grid">
          <div className="feature-card">
            <h3>Easy Registration</h3>
            <p>Register for events in seconds with a simple workflow.</p>
          </div>

          <div className="feature-card">
            <h3>QR Attendance</h3>
            <p>Fast and secure QR-based attendance marking.</p>
          </div>

          <div className="feature-card">
            <h3>Admin Dashboard</h3>
            <p>Manage events, registrations and attendance easily.</p>
          </div>

          <div className="feature-card">
            <h3>AI Assistant</h3>
            <p>Get instant help about events and registrations.</p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="how-it-works">
        <h2>How EventFlow Works</h2>

        <div className="steps">
          <div className="step">1. Login</div>
          <div className="step">2. Register Event</div>
          <div className="step">3. Get QR Code</div>
          <div className="step">4. Scan & Attend</div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>© 2026 EventFlow | Smart Event Management System</p>
      </footer>

    </div>
  );
}

export default LandingPage;
