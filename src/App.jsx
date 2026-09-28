import { useState } from "react";

// Keeping the page content in small arrays makes it easy for beginners to edit.
const stats = [
  { number: "12,500+", label: "Alumni worldwide" },
  { number: "48", label: "Countries represented" },
  { number: "85", label: "Gatherings each year" },
];

const events = [
  {
    month: "OCT",
    day: "17",
    title: "Homecoming Weekend",
    details: "Saturday · 10:00 AM",
    location: "Riverview College Campus",
  },
  {
    month: "NOV",
    day: "08",
    title: "Alumni Career Circle",
    details: "Sunday · 4:00 PM",
    location: "Online gathering",
  },
  {
    month: "DEC",
    day: "12",
    title: "Winter Reunion Social",
    details: "Saturday · 6:30 PM",
    location: "Founders Hall",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>

      <header className="site-header">
        <div className="container nav-wrap">
          <a className="brand" href="#home" aria-label="Riverview alumni home">
            <span className="brand-mark" aria-hidden="true">
              R
            </span>
            <span>
              <strong>Riverview College</strong>
              <small>Alumni Network</small>
            </span>
          </a>

          <button
            className="menu-button"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="main-navigation"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="menu-lines" aria-hidden="true">
              <i />
              <i />
              <i />
            </span>
            Menu
          </button>

          <nav
            id="main-navigation"
            className={`main-nav ${menuOpen ? "is-open" : ""}`}
            aria-label="Main navigation"
          >
            <a href="#home" onClick={closeMenu}>
              Home
            </a>
            <a href="#about" onClick={closeMenu}>
              About
            </a>
            <a href="#events" onClick={closeMenu}>
              Events
            </a>
            <a className="nav-button" href="#footer" onClick={closeMenu}>
              Stay connected
            </a>
          </nav>
        </div>
      </header>

      <main id="main-content">
        <section className="hero" id="home" aria-labelledby="hero-title">
          <img
            className="hero-image"
            src="/alumni-gathering.jpg"
            alt="Riverview alumni reconnecting on campus"
          />
          <div className="hero-shade" aria-hidden="true" />
          <div className="container hero-content">
            <p className="eyebrow light">Together since 1964</p>
            <h1 id="hero-title">Where Riverview stories keep growing.</h1>
            <p className="hero-copy">
              Reconnect with old friends, meet fellow graduates, and take part
              in the moments that keep our college community close.
            </p>
            <div className="hero-actions">
              <a className="button button-gold" href="#events">
                View upcoming events
              </a>
              <a className="text-link light-link" href="#about">
                Meet the network <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </section>

        <section className="stats" aria-label="Alumni network highlights">
          <div className="container stats-grid">
            {stats.map((stat) => (
              <div className="stat" key={stat.label}>
                <strong>{stat.number}</strong>
                <span>{stat.label}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="section about" id="about" aria-labelledby="about-title">
          <div className="container about-grid">
            <div>
              <p className="eyebrow">About our network</p>
              <h2 id="about-title">A lifelong place to belong</h2>
            </div>
            <div className="about-copy">
              <p>
                The Riverview College Alumni Network brings graduates together
                across years, careers, and cities. It is a simple way to renew
                friendships, share experience, and support the next generation.
              </p>
              <p>
                Whether you graduated last year or decades ago, there is always
                a seat for you in the Riverview community.
              </p>
              <a className="text-link" href="#events">
                Find your next gathering <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </section>

        <section className="section events" id="events" aria-labelledby="events-title">
          <div className="container">
            <div className="section-heading">
              <div>
                <p className="eyebrow">Save the date</p>
                <h2 id="events-title">Upcoming alumni events</h2>
              </div>
              <p>Three easy ways to reconnect with the Riverview community.</p>
            </div>

            <div className="event-grid">
              {events.map((event) => (
                <article className="event-card" key={event.title}>
                  <div className="event-date" aria-label={`${event.month} ${event.day}`}>
                    <span>{event.month}</span>
                    <strong>{event.day}</strong>
                  </div>
                  <div className="event-info">
                    <h3>{event.title}</h3>
                    <p>{event.details}</p>
                    <p className="location">{event.location}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer" id="footer">
        <div className="container footer-grid">
          <div>
            <a className="brand footer-brand" href="#home">
              <span className="brand-mark" aria-hidden="true">
                R
              </span>
              <span>
                <strong>Riverview College</strong>
                <small>Alumni Network</small>
              </span>
            </a>
            <p>Connected by our past. Growing together for what comes next.</p>
          </div>
          <nav className="footer-links" aria-label="Footer links">
            <a href="#about">About the network</a>
            <a href="#events">Upcoming events</a>
            <span>Riverview College · Alumni Office</span>
          </nav>
        </div>
        <div className="container footer-bottom">
          <span>© 2026 Riverview College Alumni Network</span>
          <a href="#home">Back to top ↑</a>
        </div>
      </footer>
    </>
  );
}
