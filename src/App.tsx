import React from 'react';
import BalanceCard from '../participants/fernando-concha/BalanceCard';
import EventBadge from '../participants/fernando-concha/EventBadge';
import TransactionList from '../participants/fernando-concha/TransactionList';

const App: React.FC = () => {
  return (
    <div>
      <h2 style={{ color: 'var(--color-text-secondary)', textAlign: 'center', marginBottom: '2rem' }}>
        Racional Money — Workshop
      </h2>

      <div style={{ flex: 1, display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: '2rem', flexWrap: 'wrap', padding: '10% 2rem 0' }}>
        <EventBadge
          developerName="Fernando Concha"
          componentBuilt="BalanceCard"
        />
        <BalanceCard
          balance={500000}
          currency="CLP"
          accountName="Mi Money"
          monthlyIncome={30000}
          monthlyExpense={10000}
          onAddFunds={() => alert('Agregar fondos')}
          onSendFunds={() => alert('Enviar fondos')}
        />
        <TransactionList
          onViewAll={() => alert('Ver todos los movimientos')}
          transactions={[
            { id: '1', name: 'Martin Abernathy', date: '23 mar, 2026', amount: 150000, currency: 'CLP', avatarInitials: 'MA' },
            { id: '2', name: 'Door Dash', date: '15 mar, 2026', amount: -75000, currency: 'CLP', avatarInitials: 'DD' },
            { id: '3', name: 'Martin Abernathy', date: '12 mar, 2026', amount: 150000, currency: 'CLP', avatarInitials: 'MA' },
            { id: '4', name: 'Martin Abernathy', date: '01 mar, 2026', amount: 150000, currency: 'CLP', avatarInitials: 'MA' },
            { id: '5', name: 'Door Dash', date: '28 feb, 2026', amount: -75000, currency: 'CLP', avatarInitials: 'DD' },
            { id: '6', name: 'Martin Herwitz', date: '10 oct', amount: -30000, currency: 'CLP', avatarInitials: 'MH' },
          ]}
        />
      </div>
    </div>
  );
};

export default App;
