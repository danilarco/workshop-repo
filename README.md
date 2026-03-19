# 🧠 Workshop: IA en Proyectos Reales — MCP, Contexto y Tokens

Bienvenido al hands-on. Este repo es tu ambiente de trabajo para la actividad de hoy.

---

## 🎯 Objetivo

Completar un pipeline real de desarrollo usando 3 MCPs en cadena:

1. **Figma MCP** → leer un componente del design system y generar el código
2. **Notion MCP** → documentar el componente implementado
3. **GitHub CLI** → hacer commit y abrir un PR con el comando `/create-pr`

Gana quien complete el pipeline con **menos turnos de conversación**.

---

## 📋 La tarea

Implementar una **TransactionCard** — una tarjeta que muestra una transacción individual en el historial de movimientos de Racional Money.

Lee el brief completo en [`docs/brief.md`](./docs/brief.md).

---

## 🗂️ Estructura del repo

```
workshop-repo/
├── README.md                  # Este archivo
├── CLAUDE.md                  # Contexto del proyecto para Claude (ya configurado)
├── docs/
│   ├── brief.md               # Brief de la tarea
│   └── figma-links.md         # Links a los componentes en Figma
├── components/
│   └── example/               # Componente de referencia ya implementado
│       ├── BalanceCard.tsx
│       └── BalanceCard.css
└── participants/
    └── tu-nombre-aqui/        # Copia esta carpeta con tu nombre
```

---

## ⚡ Setup (15 minutos)

### 1. Clona el repo

```bash
git clone https://github.com/[usuario]/workshop-mcp
cd workshop-mcp
```

### 2. Configura el MCP de Figma

```bash
claude mcp add figma npx -- -y @figma/figma-developer-mcp --figma-api-key=TU_TOKEN
```

**Obtener tu token de Figma:**
- Entra a figma.com → avatar → Settings → Security → Personal access tokens
- Generate new token → cópialo → pégalo en el comando de arriba
- Cuenta gratuita de Figma es suficiente

### 3. Configura el MCP de Notion

```bash
claude mcp add notion npx -- -y @notionhq/notion-mcp-server
```

Luego agrega la variable de entorno al config:

```bash
claude mcp add notion npx -- -y @notionhq/notion-mcp-server \
  --env NOTION_TOKEN=TOKEN_DEL_WORKSHOP
```

> **El token de Notion lo provee el speaker** — lo encontrarás en el canal de Slack del workshop o te lo pasará Dani en vivo.

### 4. Verifica que los MCPs están activos

```bash
claude mcp list
```

Deberías ver `figma` y `notion` en la lista con status activo.

### 5. Crea tu carpeta de trabajo

```bash
cp -r participants/tu-nombre-aqui participants/tu-nombre
cd participants/tu-nombre
```

---

## 🚀 El pipeline

### Etapa 1 — Leer el diseño con Figma MCP

Abre Claude Code en tu carpeta:

```bash
claude
```

Luego pide a Claude que lea el componente:

```
Lee el componente TransactionCard desde este link de Figma: [link de docs/figma-links.md]
Extrae los estilos, colores, tipografía y espaciados exactos.
```

### Etapa 2 — Generar el código

```
Con los estilos que extrajiste de Figma, implementa el componente TransactionCard
siguiendo las especificaciones del brief en docs/brief.md.
Stack: React + TypeScript + CSS file separado.
Guarda los archivos en esta carpeta.
```

### Etapa 3 — Documentar en Notion

```
Usando el MCP de Notion, documenta el componente TransactionCard
en la página del workshop. Incluye: descripción, props, ejemplo de uso y decisiones de implementación.
```

### Etapa 4 — Hacer el PR

```
/create-pr
```

Este comando hace el commit de tus archivos y abre un PR al repo. El título del PR debe ser:
`[workshop] TransactionCard - tu-nombre`

---

## 🏆 Criterios de evaluación

Al terminar, comparte en el canal de Notion del workshop:
- ¿Cuántos turnos necesitaste en total?
- ¿Cuál fue tu prompt más eficiente?
- ¿En qué etapa perdiste más tokens?

---

## 📎 Links útiles

- [Brief de la tarea](./docs/brief.md)
- [Links de Figma](./docs/figma-links.md)
- [Componente de ejemplo](./components/example/BalanceCard.tsx)
- [Workspace de Notion del workshop](#) ← Dani comparte el link en vivo
