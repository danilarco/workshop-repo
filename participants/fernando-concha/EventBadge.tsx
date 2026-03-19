import React from 'react';
import './EventBadge.css';

interface EventBadgeProps {
  developerName: string;
  componentBuilt: string;
}

const EventBadge: React.FC<EventBadgeProps> = ({ developerName, componentBuilt }) => {
  return (
    <div className="event-badge">

      <div className="event-badge__top">
        <div className="event-badge__logo-row">
          <span className="event-badge__ai-icon">⬡</span>
          <span className="event-badge__hosted-by">by Racional</span>
        </div>

        <h1 className="event-badge__title">
          Claude
          <span className="event-badge__title-accent"> — Hands On!</span>
        </h1>

        <p className="event-badge__subtitle">
          Workshop oficial de Claude · Construye con IA en tiempo real
        </p>

        <div className="event-badge__meta">
          <span className="event-badge__meta-item">
            <span className="event-badge__meta-icon">📍</span>
            Santiago de Chile
          </span>
          <span className="event-badge__meta-dot">·</span>
          <span className="event-badge__meta-item">
            <span className="event-badge__meta-icon">📅</span>
            19 Marzo 2026
          </span>
        </div>
      </div>

      <div className="event-badge__perforation">
        <span className="event-badge__perforation-circle event-badge__perforation-circle--left" />
        <span className="event-badge__perforation-line" />
        <span className="event-badge__perforation-circle event-badge__perforation-circle--right" />
      </div>

      <div className="event-badge__stub">
        <div className="event-badge__stub-left">
          <p className="event-badge__stub-label">Desarrollador</p>
          <p className="event-badge__stub-value">{developerName}</p>
          <p className="event-badge__stub-label" style={{ marginTop: '0.5rem' }}>Componente</p>
          <p className="event-badge__stub-value">{componentBuilt}</p>
        </div>
        <div className="event-badge__stub-right">
          <div className="event-badge__shipped-badge">
            <span className="event-badge__shipped-check">✓</span>
            <span className="event-badge__shipped-text">SHIPPED<br />LIVE</span>
          </div>
          <p className="event-badge__powered-by">Claude Sonnet 4.6</p>
        </div>
      </div>

    </div>
  );
};

export default EventBadge;
