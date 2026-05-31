import type {ReactNode} from 'react';
import React from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';

function CodeIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6"></polyline>
      <polyline points="8 6 2 12 8 18"></polyline>
    </svg>
  );
}

function SettingsIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3"></circle>
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
    </svg>
  );
}

function BookIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
      <path d="M4 4.5A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5v-15z"></path>
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="5" y1="12" x2="19" y2="12"></line>
      <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="GDocs"
      description="GDocs — Centralized Documentation Hub for FTC 772 Golden Dragons Robotics.">
      <main className="landing-main">
        {/* Floating background liquid blobs */}
        <div className="liquid-blob-container">
          <div className="liquid-blob blob-1"></div>
          <div className="liquid-blob blob-2"></div>
        </div>

        <div className="landing-container">
          {/* Logo Image */}
          <div className="landing-logo-container">
            <img src="/img/logo.png" alt="Golden Dragons Logo" className="landing-logo" />
          </div>

          {/* Brand Heading */}
          <h1 className="landing-title-gdocs">
            GDocs
          </h1>
          <div className="landing-subtitle">
            CREATED BY <span className="landing-subtitle-gd"><span className="landing-subtitle-gd-golden">GOLDEN</span>&nbsp;<span className="landing-subtitle-gd-dragons">DRAGONS</span></span>
          </div>
          <p className="landing-tagline">
            Welcome to <strong>GDocs</strong>, the central documentation hub for FIRST Tech Challenge Team 772. Explore resources on software development, CNC routing, and team handbooks.
          </p>

          {/* Action Buttons */}
          <div className="landing-buttons">
            <Link className="button landing-button-primary" to="/docs">
              Explore Docs
            </Link>
            <a className="button landing-button-secondary" href="https://ftc772.org" target="_blank" rel="noopener noreferrer">
              Main Website
            </a>
          </div>

          {/* Cards Grid */}
          <div className="landing-grid">
            {/* Software Card */}
            <div className="card liquid-glass-card">
              <div className="landing-card-content">
                <div className="landing-card-header">
                  <div className="landing-card-icon">
                    <CodeIcon />
                  </div>
                  <h3 className="landing-card-title">Software</h3>
                </div>
                <p className="landing-card-desc">
                  Setting up Android Studio for robotics development, configuring robot automation algorithms, and building OpenCV/vision pipelines.
                </p>
              </div>
              <div className="landing-card-footer">
                <Link className="landing-card-link" to="/docs/android-studio/setup">
                  Setup Dev Environment <ArrowRightIcon />
                </Link>
              </div>
            </div>

            {/* CNC & CAD Card */}
            <div className="card liquid-glass-card">
              <div className="landing-card-content">
                <div className="landing-card-header">
                  <div className="landing-card-icon">
                    <SettingsIcon />
                  </div>
                  <h3 className="landing-card-title">CNC & CAD</h3>
                </div>
                <p className="landing-card-desc">
                  Detailed guides for manufacturing with the Omio X6-2200 CNC router, configuring Mach3 controller software, and mechanical handbooks.
                </p>
              </div>
              <div className="landing-card-footer">
                <Link className="landing-card-link" to="/docs/cnc/omio">
                  Manufacturing Setup <ArrowRightIcon />
                </Link>
              </div>
            </div>

            {/* Handbook Card */}
            <div className="card liquid-glass-card">
              <div className="landing-card-content">
                <div className="landing-card-header">
                  <div className="landing-card-icon">
                    <BookIcon />
                  </div>
                  <h3 className="landing-card-title">Handbook</h3>
                </div>
                <p className="landing-card-desc">
                  Team rules, scheduling protocols, communication systems, outreach hour tracking guidelines, and team structures for GSSM robotics.
                </p>
              </div>
              <div className="landing-card-footer">
                <Link className="landing-card-link" to="/docs/handbook/about-the-team">
                  Team Handbook <ArrowRightIcon />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}
