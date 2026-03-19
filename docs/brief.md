# Brief: BalanceCard

## Contexto

La pantalla principal de Racional Money muestra el balance del usuario en una tarjeta prominente. La `BalanceCard` es el componente hero de la app — lo primero que el usuario ve al abrir la aplicacion.

## Lo que debes construir

Un componente React `BalanceCard` que muestre el balance principal del usuario, con acciones rapidas y resumen de movimientos recientes.

## Especificacion funcional

### Props requeridas

```typescript
interface BalanceCardProps {
  balance: number;
  currency: 'CLP' | 'USD';
  accountName: string;
  monthlyIncome?: number;
  monthlyExpense?: number;
  onAddFunds?: () => void;
  onSendFunds?: () => void;
}
```

### Informacion a mostrar

| Campo | Descripcion |
|-------|-------------|
| Nombre de cuenta | Texto con flecha indicando navegacion (ej: "Mi Money >") |
| Balance principal | Monto grande y prominente con moneda (ej: "CLP 500.000") |
| Resumen mensual | Ingresos y egresos del mes (ej: "CLP 30K" arriba, "CLP 10K" abajo) |
| Boton Agregar | Accion para agregar fondos |
| Boton Enviar | Accion para enviar fondos |

### Comportamiento

- El balance se formatea con punto como separador de miles
- Los montos del resumen mensual se abrevian (30.000 → "30K")
- Los botones de accion tienen icono + texto
- La card tiene fondo oscuro con bordes redondeados

### Layout

```
┌─────────────────────────────────────────┐
│  Mi Money  >              ────────────  │
│                                         │
│  CLP 500.000                            │
│  Dic  ↑ CLP 30K    ↓ CLP 10K           │
│                                         │
│  [ + Agregar ]    [ ↗ Enviar ]          │
└─────────────────────────────────────────┘
```

## Referencia visual

El componente esta disenado en Figma. Usa el MCP de Figma para leer los estilos exactos:

```
https://www.figma.com/design/3wOxOsXjFsPqLz4wXxwH7E/Sin-titulo?node-id=0-1
```

## Archivos a crear

```
participants/tu-nombre/
├── BalanceCard.tsx
└── BalanceCard.css
```

## Criterio de exito

- Compila sin errores de TypeScript
- Replica fielmente el diseno de Figma
- CSS usa las variables del design system — sin colores hardcodeados
- Codigo legible y bien estructurado
- Formatea correctamente los montos en CLP
