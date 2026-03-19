# Workshop: IA en Proyectos Reales — MCP, Contexto y Tokens

Bienvenido al hands-on. Este repo es tu ambiente de trabajo para la actividad de hoy.

---

## Objetivo

Completar un pipeline real de desarrollo usando 3 MCPs en cadena:

1. **Figma MCP** → leer un componente del design system y generar el código
2. **Notion MCP** → documentar el componente implementado
3. **GitHub CLI** → hacer commit y abrir un PR con el comando `/create-pr`

Gana quien complete el pipeline con **menos turnos de conversacion**.

---

## La tarea

Implementar una **BalanceCard** — una tarjeta que muestra el balance principal del usuario en Racional Money.

Lee el brief completo en [`docs/brief.md`](./docs/brief.md).

---

## Estructura del repo

```
workshop-repo/
├── README.md                  # Este archivo
├── CLAUDE.md                  # Contexto del proyecto para Claude (ya configurado)
├── docs/
│   ├── brief.md               # Brief de la tarea
│   └── figma-links.md         # Links a los componentes en Figma
└── participants/
    └── tu-nombre-aqui/        # Copia esta carpeta con tu nombre
```

---

## Setup (15 minutos)

### 1. Clona el repo

```bash
git clone https://github.com/danilarco/workshop-repo
cd workshop-repo
```

### 2. Configura el MCP de Figma

```bash
claude mcp add figma npx -- -y @anthropic-ai/figma-developer-mcp --figma-api-key=TU_TOKEN
```

**Obtener tu token de Figma:**
- Entra a figma.com → avatar → Settings → Security → Personal access tokens
- Generate new token → copialo → pegalo en el comando de arriba
- Cuenta gratuita de Figma es suficiente

### 3. Configura el MCP de Notion

```bash
claude mcp add notion npx -- -y @notionhq/notion-mcp-server \
  --env OPENAPI_MCP_HEADERS='{"Authorization":"Bearer TOKEN_DEL_WORKSHOP","Notion-Version":"2022-06-28"}'
```

> **El token de Notion lo provee Dani en vivo** — reemplaza `TOKEN_DEL_WORKSHOP` por el token que te comparta.

### 4. Verifica que los MCPs estan activos

```bash
claude mcp list
```

Deberias ver `figma` y `notion` en la lista con status activo.

### 5. Crea tu carpeta de trabajo

```bash
cp -r participants/tu-nombre-aqui participants/tu-nombre
cd participants/tu-nombre
```

---

## El pipeline

### Etapa 1 — Leer el diseno con Figma MCP

Abre Claude Code en tu carpeta:

```bash
claude
```

Luego pide a Claude que lea el componente:

```
Lee el componente BalanceCard desde este link de Figma:
https://www.figma.com/design/3wOxOsXjFsPqLz4wXxwH7E/Sin-titulo?node-id=0-1

Extrae los estilos, colores, tipografia y espaciados exactos.
```

### Etapa 2 — Generar el codigo

```
Con los estilos que extrajiste de Figma, implementa el componente BalanceCard
siguiendo las especificaciones del brief en docs/brief.md.
Stack: React + TypeScript + CSS file separado.
Guarda los archivos en esta carpeta.
```

### Etapa 3 — Documentar en Notion

```
Usando el MCP de Notion, documenta el componente BalanceCard
en la pagina del workshop. Incluye: descripcion, props, ejemplo de uso y decisiones de implementacion.
```

### Etapa 4 — Hacer el PR

```
/create-pr
```

Este comando hace el commit de tus archivos y abre un PR al repo.

---

## Criterios de evaluacion

Al terminar, comparte en el canal de Notion del workshop:
- Cuantos turnos necesitaste en total?
- Cual fue tu prompt mas eficiente?
- En que etapa perdiste mas tokens?

---

## Links utiles

- [Brief de la tarea](./docs/brief.md)
- [Links de Figma](./docs/figma-links.md)
