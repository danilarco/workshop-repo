import React from 'react';
import confetti from 'canvas-confetti';
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

const MONTH_NAMES = [
  'Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun',
  'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic',
];

const formatCLP = (amount: number): string =>
  `${amount.toLocaleString('es-CL')}`;

const abbreviateAmount = (amount: number): string => {
  if (amount >= 1_000_000) {
    const value = amount / 1_000_000;
    return `${Number.isInteger(value) ? value : value.toFixed(1)}M`;
  }
  if (amount >= 1_000) {
    const value = amount / 1_000;
    return `${Number.isInteger(value) ? value : value.toFixed(1)}K`;
  }
  return String(amount);
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
  const currentMonth = MONTH_NAMES[new Date().getMonth()];

  const handleAddFunds = () => {
    confetti({
      particleCount: 150,
      spread: 200,
      origin: { y: 0 },
      gravity: 1.5,
    });
    onAddFunds?.();
  };

  return (
    <div className="balance-card">
      <div className="balance-card__balance-row">
        <div className="balance-card__amount-group">
          <div className="balance-card__header">
            <span className="balance-card__account-name">{accountName}</span>
            <span className="balance-card__chevron">{'>'}</span>
          </div>

          <div className="balance-card__amount">
            <span className="balance-card__currency">{currency}</span>
            <span className="balance-card__value">{formatCLP(balance)}</span>
          </div>
        </div>

        <div className="balance-card__sparkline" />
      </div>

      {(monthlyIncome !== undefined || monthlyExpense !== undefined) && (
        <div className="balance-card__summary">
          <span className="balance-card__month">{currentMonth}</span>
          <div className="balance-card__indicators">
            {monthlyIncome !== undefined && (
              <span className="balance-card__indicator balance-card__indicator--income">
                <span className="balance-card__indicator-icon">&#x2197;</span>
                {currency} {abbreviateAmount(monthlyIncome)}
              </span>
            )}
            {monthlyExpense !== undefined && (
              <span className="balance-card__indicator balance-card__indicator--expense">
                <span className="balance-card__indicator-icon">&#x2198;</span>
                {currency} {abbreviateAmount(monthlyExpense)}
              </span>
            )}
          </div>
        </div>
      )}

      <div className="balance-card__actions">
        <button
          className="balance-card__button balance-card__button--primary"
          onClick={handleAddFunds}
        >
          <span className="balance-card__button-icon">+</span>
          Agregar
        </button>
        <button
          className="balance-card__button balance-card__button--tertiary"
          onClick={onSendFunds}
        >
          <span className="balance-card__button-icon">&#x2197;</span>
          Enviar
        </button>
      </div>
    </div>
  );
};

export default BalanceCard;
