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

const abbreviateAmount = (amount: number, currency: string): string => {
  if (amount >= 1_000_000) return `${currency} ${(amount / 1_000_000).toFixed(0)}M`;
  if (amount >= 1_000) return `${currency} ${(amount / 1_000).toFixed(0)}K`;
  return `${currency} ${amount}`;
};

const currentMonthAbbr = (): string => {
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

  return (
    <div className="balance-card">
      <div className="balance-card__content">

        <div className="balance-card__top">
          <div className="balance-card__left">
            <div className="balance-card__account-label">
              <span>{accountName}</span>
              <span className="balance-card__chevron">›</span>
            </div>
            <div className="balance-card__amount-row">
              <span className="balance-card__currency">{currency}</span>
              <span className="balance-card__amount">{formattedBalance}</span>
            </div>
          </div>
          <div className="balance-card__sparkline" />
        </div>

        {(monthlyIncome !== undefined || monthlyExpense !== undefined) && (
          <div className="balance-card__monthly">
            <span className="balance-card__month">{currentMonthAbbr()}</span>
            <div className="balance-card__movements">
              {monthlyIncome !== undefined && (
                <div className="balance-card__movement">
                  <span className="balance-card__arrow balance-card__arrow--up">↑</span>
                  <span>{abbreviateAmount(monthlyIncome, currency)}</span>
                </div>
              )}
              {monthlyExpense !== undefined && (
                <div className="balance-card__movement">
                  <span className="balance-card__arrow balance-card__arrow--down">↓</span>
                  <span>{abbreviateAmount(monthlyExpense, currency)}</span>
                </div>
              )}
            </div>
          </div>
        )}

        <div className="balance-card__actions">
          <button className="balance-card__btn balance-card__btn--primary" onClick={onAddFunds}>
            <span className="balance-card__btn-icon">+</span>
            Agregar
          </button>
          <button className="balance-card__btn balance-card__btn--secondary" onClick={onSendFunds}>
            <span className="balance-card__btn-icon">↗</span>
            Enviar
          </button>
        </div>

      </div>
    </div>
  );
};

export default BalanceCard;
