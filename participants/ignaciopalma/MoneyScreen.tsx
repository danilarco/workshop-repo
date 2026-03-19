import React, { useLayoutEffect, useRef, useState, useEffect } from 'react';
import './MoneyScreen.css';

const CHART_POINTS = [
  { x: 0, y: 10 },
  { x: 20, y: 12 },
  { x: 40, y: 15 },
  { x: 60, y: 40 },
  { x: 100, y: 45 },
  { x: 140, y: 44 },
  { x: 180, y: 46 },
  { x: 220, y: 43 },
  { x: 260, y: 42 },
  { x: 290, y: 80 },
  { x: 310, y: 120 },
  { x: 330, y: 60 },
  { x: 343, y: 25 },
];

const CHART_PATH = CHART_POINTS.map((p, i) =>
  `${i === 0 ? 'M' : 'L'}${p.x},${p.y}`
).join(' ');

const CHART_FILL_PATH =
  CHART_PATH +
  ` L${CHART_POINTS[CHART_POINTS.length - 1].x},160 L${CHART_POINTS[0].x},160 Z`;

interface Transaction {
  id: number;
  initials: string;
  isBrand: boolean;
  brandLabel?: string;
  name: string;
  date: string;
  amount: string;
  type: 'income' | 'expense';
}

const TRANSACTIONS: Transaction[] = [
  { id: 1, initials: 'MA', isBrand: false, name: 'Martin Abernathy', date: '23 mar, 2026', amount: 'CLP 150.000', type: 'income' },
  { id: 2, initials: 'UE', isBrand: true, brandLabel: 'Uber\nEats', name: 'Door Dash', date: '15 mar, 2026', amount: '-CLP 75.000', type: 'expense' },
  { id: 3, initials: 'MA', isBrand: false, name: 'Martin Abernathy', date: '12 mar, 2026', amount: 'CLP 150.000', type: 'income' },
  { id: 4, initials: 'MA', isBrand: false, name: 'Martin Abernathy', date: '01 mar, 2026', amount: 'CLP 150.000', type: 'income' },
  { id: 5, initials: 'UE', isBrand: true, brandLabel: 'Uber\nEats', name: 'Door Dash', date: '28 feb, 2026', amount: '-CLP 75.000', type: 'expense' },
  { id: 6, initials: 'UE', isBrand: true, brandLabel: 'Uber\nEats', name: 'Door Dash', date: '15 feb, 2026', amount: '-CLP 75.000', type: 'expense' },
];

const PERIODS = ['1D', '1S', '1M', 'YTD', '1A', 'Inicio'];

const TARGET_BALANCE = 101398;

const formatCLP = (amount: number): string =>
  amount.toLocaleString('es-CL');

const easeOutCubic = (t: number): number => 1 - Math.pow(1 - t, 3);

const MoneyScreen: React.FC = () => {
  const chartLineRef = useRef<SVGPathElement>(null);
  const [pathLength, setPathLength] = useState(600);
  const [displayBalance, setDisplayBalance] = useState(0);

  // Measure SVG path length for stroke animation
  useLayoutEffect(() => {
    if (chartLineRef.current) {
      const len = chartLineRef.current.getTotalLength();
      setPathLength(Math.ceil(len));
    }
  }, []);

  // Balance count-up animation loop
  useEffect(() => {
    let animationId: number;
    let startTime: number | null = null;
    const countDuration = 1500;
    const holdDuration = 4000;
    const cycleDuration = countDuration + holdDuration;

    const animate = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;
      const elapsed = (timestamp - startTime) % cycleDuration;

      if (elapsed < countDuration) {
        const progress = easeOutCubic(elapsed / countDuration);
        setDisplayBalance(Math.round(progress * TARGET_BALANCE));
      } else {
        setDisplayBalance(TARGET_BALANCE);
      }

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <div className="money-screen">
      {/* Back button */}
      <button className="money-screen__back">
        <svg viewBox="0 0 24 24">
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Balance */}
      <div className="money-screen__label">Mi Money</div>
      <div className="money-screen__balance">
        <span className="money-screen__currency">CLP</span>
        <span className="money-screen__amount">{formatCLP(displayBalance)}</span>
      </div>

      {/* Monthly summary */}
      <div className="money-screen__summary">
        <span className="money-screen__month">Dic</span>
        <span className="money-screen__income">↗ CLP 30K</span>
        <span className="money-screen__expense">↘ CLP 10K</span>
      </div>

      {/* Chart */}
      <div className="money-screen__chart">
        <span className="money-screen__chart-label money-screen__chart-label--top">CLP 104k</span>
        <span className="money-screen__chart-label money-screen__chart-label--mid">CLP 930k</span>
        <span className="money-screen__chart-label money-screen__chart-label--bottom">CLP -2.0m</span>
        <svg viewBox="0 0 343 160" preserveAspectRatio="none">
          <defs>
            <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#E040A0" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#E040A0" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            className="money-screen__chart-fill"
            d={CHART_FILL_PATH}
          />
          <path
            ref={chartLineRef}
            className="money-screen__chart-line"
            d={CHART_PATH}
            style={{
              strokeDasharray: pathLength,
              ['--path-length' as string]: pathLength,
            }}
          />
        </svg>
      </div>

      {/* Period pills */}
      <div className="money-screen__periods">
        {PERIODS.map((period) => (
          <button
            key={period}
            className={`money-screen__pill${period === '1D' ? ' money-screen__pill--active' : ''}`}
          >
            {period}
          </button>
        ))}
      </div>

      {/* Movimientos */}
      <div className="money-screen__section-header">
        <h2 className="money-screen__section-title">Movimientos</h2>
        <button className="money-screen__view-all">Ver todo</button>
      </div>

      <div className="money-screen__transactions">
        {TRANSACTIONS.map((tx) => (
          <div key={tx.id} className="money-screen__tx">
            <div
              className={`money-screen__tx-avatar${tx.isBrand ? ' money-screen__tx-avatar--brand' : ''}`}
            >
              {tx.isBrand ? tx.brandLabel : tx.initials}
            </div>
            <div className="money-screen__tx-info">
              <span className="money-screen__tx-name">{tx.name}</span>
              <span className="money-screen__tx-date">{tx.date}</span>
            </div>
            <span
              className={`money-screen__tx-amount money-screen__tx-amount--${tx.type}`}
            >
              {tx.amount}
            </span>
          </div>
        ))}
      </div>

      {/* Action bar */}
      <div className="money-screen__actions">
        <button className="money-screen__action-btn">
          <span>+</span> Agregar
        </button>
        <button className="money-screen__action-btn">
          <span>↗</span> Enviar
        </button>
        <button className="money-screen__action-btn">
          <span>↘</span> Cobrar
        </button>
      </div>
    </div>
  );
};

export default MoneyScreen;
