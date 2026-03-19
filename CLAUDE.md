# Racional Money — Workshop Context

## Proyecto

Racional Money es el producto de neobanking de Racional, una fintech chilena.
Este workshop simula el flujo real de desarrollo del equipo usando IA + MCPs.

## Stack

- **Framework:** React 18 + TypeScript
- **Estilos:** CSS puro — un archivo `.css` por componente, mismo nombre que el `.tsx`
- **No usar:** Tailwind, styled-components, CSS-in-JS de ningún tipo
- **Imports de CSS:** `import './ComponentName.css'` al inicio del archivo TSX

## Convenciones de código

### Componentes
- Functional components con arrow functions
- Props siempre tipadas con `interface`, nunca `type`
- Interface de props nombrada como `ComponentNameProps`
- Exportación: `export default` al final del archivo

### Ejemplo de estructura:
```tsx
import React from 'react';
import './ComponentName.css';

interface ComponentNameProps {
  prop: string;
}

const ComponentName: React.FC<ComponentNameProps> = ({ prop }) => {
  return (
    <div className="component-name">
      {prop}
    </div>
  );
};

export default ComponentName;
```

### CSS
- Clase raíz: kebab-case del nombre del componente (ej: `transaction-card`)
- Variables de color del design system (ver abajo)
- No usar valores hardcodeados para colores — siempre las variables
- Unidades: `rem` para tipografía, `px` para bordes y radios, porcentajes o `rem` para espaciado

## Design system — variables de color

```css
/* Usar estas variables en los archivos CSS */
--color-primary: #00C2A8;        /* teal — acción principal */
--color-primary-dark: #009688;   /* teal oscuro — hover */
--color-background: #0F1B35;     /* navy — fondo principal */
--color-surface: #151F36;        /* card background */
--color-surface-elevated: #1E2D4A; /* cards elevadas */
--color-text-primary: #FFFFFF;   /* texto principal */
--color-text-secondary: #8892A4; /* texto secundario */
--color-text-muted: #4A5568;     /* texto deshabilitado */
--color-success: #48BB78;        /* verde — ingresos */
--color-danger: #FC8181;         /* rojo — egresos */
--color-border: #1E3050;         /* bordes sutiles */
--color-border-strong: #2D4170; /* bordes visibles */
```

## Tipos comunes del dominio

```typescript
type TransactionType = 'income' | 'expense' | 'transfer';

type TransactionStatus = 'completed' | 'pending' | 'failed';

interface Transaction {
  id: string;
  amount: number;
  currency: 'CLP' | 'USD';
  type: TransactionType;
  status: TransactionStatus;
  description: string;
  merchant?: string;
  date: Date;
  category?: string;
}
```

## Formato de moneda

Siempre formatear CLP con punto como separador de miles:
```typescript
// Correcto
const formatCLP = (amount: number) =>
  `$${amount.toLocaleString('es-CL')}`;

// Incorrecto
`$${amount}`
```

## MCPs disponibles en este proyecto

- **figma** — leer componentes y estilos del design system
- **notion** — documentar en el workspace del workshop

## Tarea actual

Ver `docs/brief.md` para el brief completo de la TransactionCard.

## Archivos de referencia

- `components/example/BalanceCard.tsx` — componente ya implementado, úsalo como referencia de estilo y estructura
- `components/example/BalanceCard.css` — referencia de cómo escribir el CSS
