import React from 'react';
import BalanceCard from '../participants/dani-test/BalanceCard';

const App: React.FC = () => {
  return (
    <div>
      <h2 style={{ color: 'var(--color-text-secondary)', textAlign: 'center', marginBottom: '2rem' }}>
        Racional Money — Workshop
      </h2>

      <BalanceCard
        balance={500000}
        currency="CLP"
        accountName="Mi Money"
        monthlyIncome={30000}
        monthlyExpense={10000}
        onAddFunds={() => alert('Agregar fondos')}
        onSendFunds={() => alert('Enviar fondos')}
      />
    </div>
  );
};

export default App;
