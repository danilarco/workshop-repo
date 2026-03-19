import React from 'react';
import './App.css';
import MoneyScreen from '../participants/ignaciopalma/MoneyScreen';

const App: React.FC = () => {
  return (
    <div className="landing-page">
      <nav className="landing-nav">
        <div className="landing-nav__container">
          <span className="landing-nav__logo">Racional</span>

          <div className="landing-nav__links">
            <a href="#" className="landing-nav__link">Productos</a>
            <a href="#" className="landing-nav__link">Aprende</a>
            <a href="#" className="landing-nav__link">Nosotros</a>
          </div>

          <div className="landing-nav__actions">
            <button className="landing-nav__button landing-nav__button--outline">
              Ingresar
            </button>
            <button className="landing-nav__button landing-nav__button--filled">
              Crear cuenta
            </button>
          </div>
        </div>
      </nav>

      <section className="landing-hero">
        <div className="landing-hero__container">
          <div className="landing-hero__content">
            <h1 className="landing-hero__headline">
              Tu plata, simple y sin vueltas
            </h1>
            <p className="landing-hero__subtitle">
              Racional Money es la cuenta que te da control total de tu dinero.
              Sin comisiones ocultas, sin letra chica.
            </p>
            <div className="landing-hero__cta-group">
              <button className="landing-hero__cta landing-hero__cta--primary">
                Crear cuenta gratis
              </button>
              <button className="landing-hero__cta landing-hero__cta--outline">
                Conoce más
              </button>
            </div>
          </div>

          <div className="landing-hero__visual">
            <div className="landing-hero__phone">
              <div className="landing-hero__phone-notch" />
              <div className="landing-hero__phone-screen">
                <MoneyScreen />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default App;
