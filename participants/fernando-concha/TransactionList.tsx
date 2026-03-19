import React from 'react';
import './TransactionList.css';

interface Transaction {
  id: string;
  name: string;
  date: string;
  amount: number;
  currency: 'CLP' | 'USD';
  avatarInitials?: string;
  avatarImageUrl?: string;
}

interface TransactionListProps {
  transactions: Transaction[];
  onViewAll?: () => void;
}

const formatAmount = (amount: number, currency: string): string => {
  const abs = Math.abs(amount).toLocaleString('es-CL');
  const sign = amount < 0 ? '-' : '';
  return `${sign}${currency} ${abs}`;
};

const TransactionList: React.FC<TransactionListProps> = ({ transactions, onViewAll }) => {
  return (
    <div className="transaction-list">

      <div className="transaction-list__header">
        <h2 className="transaction-list__title">Movimientos</h2>
        <button className="transaction-list__view-all" onClick={onViewAll}>
          Ver todo
        </button>
      </div>

      <div className="transaction-list__rows">
        {transactions.map((tx) => (
          <div className="transaction-list__row" key={tx.id}>
            <div className="transaction-list__avatar">
              {tx.avatarImageUrl ? (
                <img
                  src={tx.avatarImageUrl}
                  alt={tx.name}
                  className="transaction-list__avatar-img"
                />
              ) : (
                <span className="transaction-list__avatar-initials">
                  {tx.avatarInitials ?? tx.name.slice(0, 2).toUpperCase()}
                </span>
              )}
            </div>

            <div className="transaction-list__info">
              <span className="transaction-list__name">{tx.name}</span>
              <span className="transaction-list__date">{tx.date}</span>
            </div>

            <span
              className={`transaction-list__amount ${
                tx.amount >= 0
                  ? 'transaction-list__amount--positive'
                  : 'transaction-list__amount--negative'
              }`}
            >
              {formatAmount(tx.amount, tx.currency)}
            </span>
          </div>
        ))}
      </div>

    </div>
  );
};

export default TransactionList;
