import React from 'react';

/**
 * Workshop: Importa tu BalanceCard aqui.
 *
 * Ejemplo (reemplaza "tu-nombre" con tu carpeta):
 *
 *   import BalanceCard from '../participants/tu-nombre/BalanceCard';
 *
 * Luego renderizalo dentro del return.
 */

const App: React.FC = () => {
  return (
    <div>
      <h2 style={{ color: 'var(--color-text-secondary)', textAlign: 'center', marginBottom: '2rem' }}>
        Racional Money — Workshop
      </h2>

      {/* Importa y renderiza tu BalanceCard aqui */}
      <p style={{ color: 'var(--color-text-muted)', textAlign: 'center' }}>
        Importa tu componente en src/App.tsx para verlo aqui
      </p>
    </div>
  );
};

export default App;
