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

### 1. Instala GitHub CLI (si no lo tienes)

**Mac:**
```bash
brew install gh
```

**Windows:**
```bash
winget install --id GitHub.cli
```

Luego autenticate:
```bash
gh auth login
```

Sigue las instrucciones para autenticarte con tu cuenta de GitHub. Esto es necesario para crear PRs con `/create-pr`.

### 2. Clona el repo

```bash
git clone https://github.com/danilarco/workshop-repo
cd workshop-repo
npm install
```

Verifica que funciona:

```bash
npm run dev
```

Abre http://localhost:5173 — deberias ver la pantalla del workshop. Cierra el servidor con `Ctrl+C`.

### 3. Configura el MCP de Figma

```bash
claude mcp add --transport http figma https://mcp.figma.com/mcp
```

Luego entra a `claude`, escribe `/mcp`, selecciona `figma` y autenticate con tu cuenta de Figma en el browser. No necesitas token manual.

### 4. Configura el MCP de Notion

```bash
claude mcp add notion -e OPENAPI_MCP_HEADERS='{"Authorization":"Bearer TOKEN_DEL_WORKSHOP","Notion-Version":"2022-06-28"}' -- npx -y @notionhq/notion-mcp-server
```

> **El token de Notion lo provee Dani en vivo** — reemplaza `TOKEN_DEL_WORKSHOP` por el token que te comparta.
> **Importante:** El token se pasa con `-e` (variable de entorno real), no con `--env` como argumento del comando.

### 5. Verifica que los MCPs estan activos

```bash
claude mcp list
```

Deberias ver `figma` y `notion` en la lista con status activo.

### 6. Crea tu branch y carpeta de trabajo

```bash
git checkout -b workshop/tu-nombre
cp -r participants/tu-nombre-aqui participants/tu-nombre
```

---

## El pipeline

Abre Claude Code **desde la raiz del repo**:

```bash
claude
```

### Etapa 1 — Leer el diseno con Figma MCP

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
Guarda los archivos en participants/tu-nombre/.
Luego importa el componente en src/App.tsx y renderizalo para que se vea en el browser.
```

Verifica con `npm run dev` que tu componente se ve en http://localhost:5173.

### Etapa 3 — Documentar en Notion

```
Usando el MCP de Notion, crea una subpagina dentro de esta pagina:
https://www.notion.so/Workshop-Claude-328307ff247d80868417ce66103fa223

El titulo de la subpagina debe ser "BalanceCard — tu-nombre".
Incluye: descripcion del componente, props, ejemplo de uso y decisiones de implementacion.
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
