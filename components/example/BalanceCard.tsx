import React from 'react';
import './BalanceCard.css';

interface BalanceCardProps {
  balance: number;
  currency?: 'CLP' | 'USD';
  label?: string;
  isVisible?: boolean;
  onToggleVisibility?: () => void;
}

const BalanceCard: React.FC<BalanceCardProps> = ({
  balance,
  currency = 'CLP',
  label = 'Saldo disponible',
  isVisible = true,
  onToggleVisibility,
}) => {
  const formatAmount = (amount: number, curr: string): string => {
    if (curr === 'CLP') {
      return `$${amount.toLocaleString('es-CL')}`;
    }
    return `USD ${amount.toLocaleString('en-US', { minimumFractionDigits: 2 })}`;
  };

  return (
    <div className="balance-card">
      <span className="balance-card__label">{label}</span>

      <div className="balance-card__amount-row">
        <span className="balance-card__amount">
          {isVisible ? formatAmount(balance, currency) : '••••••'}
        </span>

        {onToggleVisibility && (
          <button
            className="balance-card__toggle"
            onClick={onToggleVisibility}
            aria-label={isVisible ? 'Ocultar saldo' : 'Mostrar saldo'}
          >
            {isVisible ? '👁' : '👁‍🗨'}
          </button>
        )}
      </div>

      <span className="balance-card__currency">{currency}</span>
    </div>
  );
};

export default BalanceCard;
