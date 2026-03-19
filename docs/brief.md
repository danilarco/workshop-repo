# Brief: TransactionCard

## Contexto

El historial de movimientos de Racional Money muestra una lista de transacciones.
Cada ítem de esa lista es una `TransactionCard`. Es uno de los componentes más visibles
del producto — aparece en la pantalla principal y en la vista de historial completo.

## Lo que debes construir

Un componente React `TransactionCard` que represente una transacción individual.

## Especificación funcional

### Props requeridas

```typescript
interface TransactionCardProps {
  transaction: Transaction; // tipo definido en CLAUDE.md
  onClick?: () => void;
}
```

### Información a mostrar

| Campo | Descripción |
|-------|-------------|
| Ícono o inicial | Primera letra del merchant o categoría, en un círculo de color |
| Descripción | Nombre del comercio o descripción de la transacción |
| Fecha | Formato: "15 ene" o "Hoy" / "Ayer" si aplica |
| Monto | Con signo: `+$12.500` para ingresos, `-$8.900` para egresos |
| Estado | Solo mostrar si es `pending` o `failed` — badge pequeño |

### Comportamiento

- El monto debe ser verde (`--color-success`) para ingresos y rojo (`--color-danger`) para egresos
- Si `onClick` está definido, la card es clickeable — cursor pointer + efecto hover sutil
- Estado `pending`: badge gris con texto "Pendiente"
- Estado `failed`: badge rojo con texto "Fallido"
- Estado `completed`: no mostrar badge

### Layout

```
┌─────────────────────────────────────────┐
│  [●]  Descripción / Merchant    +$12.500 │
│       15 ene              [Pendiente]    │
└─────────────────────────────────────────┘
```

- Altura fija: `64px`
- Padding horizontal: `16px`
- Separador inferior sutil entre cards (no usar en la última)
- El ícono circular tiene `40px` de diámetro

## Archivos a crear

```
participants/tu-nombre/
├── TransactionCard.tsx
└── TransactionCard.css
```

## Referencia visual

Ver el link de Figma en `docs/figma-links.md` — el componente está diseñado
y listo para que Claude lo lea con el MCP de Figma.

## Criterio de éxito

- Compila sin errores de TypeScript
- Maneja correctamente los tres estados (`completed`, `pending`, `failed`)
- Maneja correctamente income y expense con los colores correctos
- CSS usa las variables del design system — sin colores hardcodeados
- Código legible, consistente con el componente de ejemplo

## Bonus (si terminas rápido)

Agrega un componente `TransactionList` que reciba un array de `Transaction[]`
y renderice una lista de `TransactionCard` con los separadores correctos.
