import React from 'react';
import './BalanceCard.css';

interface BalanceCardProps {
  balance: number;
  currency: 'CLP' | 'USD';
  accountName: string;
  monthlyIncome?: number;
  monthlyExpense?: number;
  onAddFunds?: () => void;
  onSendFunds?: () => void;
}

const formatK = (amount: number): string => {
  if (amount >= 1000) return `${Math.round(amount / 1000)}K`;
  return amount.toString();
};

const getCurrentMonth = (): string => {
  const months = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
  return months[new Date().getMonth()];
};

const BalanceCard: React.FC<BalanceCardProps> = ({
  balance,
  currency,
  accountName,
  monthlyIncome,
  monthlyExpense,
  onAddFunds,
  onSendFunds,
}) => {
  const formattedBalance = balance.toLocaleString('es-CL');
  const month = getCurrentMonth();

  return (
    <div className="balance-card">
      <div className="balance-card__inner">

        <div className="balance-card__top">
          <div className="balance-card__main">
            <div className="balance-card__account">
              <span className="balance-card__account-name">{accountName}</span>
              <span className="balance-card__account-arrow">›</span>
            </div>
            <div className="balance-card__amount">
              <span className="balance-card__currency">{currency}</span>
              <span className="balance-card__number">{formattedBalance}</span>
            </div>
          </div>
          <div className="balance-card__decoration" />
        </div>

        <div className="balance-card__stats">
          <span className="balance-card__month">{month}</span>
          <div className="balance-card__movements">
            {monthlyIncome !== undefined && (
              <div className="balance-card__movement">
                <span className="balance-card__movement-icon balance-card__movement-icon--up">↑</span>
                <span className="balance-card__movement-label">{currency} {formatK(monthlyIncome)}</span>
              </div>
            )}
            {monthlyExpense !== undefined && (
              <div className="balance-card__movement">
                <span className="balance-card__movement-icon balance-card__movement-icon--down">↓</span>
                <span className="balance-card__movement-label">{currency} {formatK(monthlyExpense)}</span>
              </div>
            )}
          </div>
        </div>

        <div className="balance-card__actions">
          <button className="balance-card__btn balance-card__btn--primary" onClick={onAddFunds}>
            <span className="balance-card__btn-icon">+</span>
            <span>Agregar</span>
          </button>
          <button className="balance-card__btn balance-card__btn--secondary" onClick={onSendFunds}>
            <span className="balance-card__btn-icon">↗</span>
            <span>Enviar</span>
          </button>
        </div>

      </div>
    </div>
  );
};

export default BalanceCard;
