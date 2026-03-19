#!/bin/bash
# Claude Code custom command: /create-pr
# Hace commit de los archivos del participante y abre un PR al repo del workshop

set -e

# Detectar nombre del participante desde el directorio actual
PARTICIPANT_DIR=$(basename "$PWD")

if [ "$PARTICIPANT_DIR" = "tu-nombre-aqui" ]; then
  echo "❌ Renombra tu carpeta antes de hacer el PR:"
  echo "   cd ../ && mv tu-nombre-aqui tu-nombre && cd tu-nombre"
  exit 1
fi

# Verificar que hay archivos para commitear
if [ ! -f "TransactionCard.tsx" ] || [ ! -f "TransactionCard.css" ]; then
  echo "❌ Faltan archivos. Asegúrate de tener:"
  echo "   - TransactionCard.tsx"
  echo "   - TransactionCard.css"
  exit 1
fi

echo "🔧 Preparando PR para: $PARTICIPANT_DIR"

# Stage los archivos del participante
git add "TransactionCard.tsx" "TransactionCard.css"

# Commit
git commit -m "feat(workshop): TransactionCard - $PARTICIPANT_DIR"

# Push rama
BRANCH="workshop/$PARTICIPANT_DIR"
git checkout -b "$BRANCH" 2>/dev/null || git checkout "$BRANCH"
git push origin "$BRANCH"

# Abrir PR con GitHub CLI
gh pr create \
  --title "[workshop] TransactionCard — $PARTICIPANT_DIR" \
  --body "## Workshop: IA en Proyectos Reales

**Participante:** $PARTICIPANT_DIR

### Checklist
- [ ] Componente compila sin errores TS
- [ ] Maneja los 3 estados (completed, pending, failed)
- [ ] Maneja income/expense con colores correctos
- [ ] CSS usa variables del design system
- [ ] Documentado en Notion

### Prompts usados
<!-- Pega aquí tu mejor prompt del workshop -->

### Token count estimado
<!-- ¿Cuántos turnos necesitaste? -->
" \
  --base main \
  --head "$BRANCH"

echo "✅ PR creado. Revisa el link de arriba."
