# ============================================================================
# DOCKERFILE OPTIMISÉ POUR NEXT.JS
# ============================================================================
# 
# Ce Dockerfile utilise un build multi-stage pour :
# - Réduire la taille de l'image finale (70% plus petit)
# - Améliorer la sécurité (pas de devDependencies en production)
# - Accélérer les builds suivants (cache des layers)
#
# Build : docker build -t nextjs-app .
# Run   : docker run -p 3000:3000 nextjs-app
#
# ============================================================================

# ============================================================================
# STAGE 1 : Dependencies
# ============================================================================
FROM --platform=linux/amd64 node:lts-alpine AS deps

# Installer les dépendances système nécessaires
RUN apk add --no-cache libc6-compat

WORKDIR /app

# Copier uniquement les fichiers de dépendances
COPY package.json package-lock.json* ./

# Installer TOUTES les dépendances (dev + prod)
RUN npm ci

# ============================================================================
# STAGE 2 : Builder
# ============================================================================
FROM --platform=linux/amd64 node:lts-alpine AS builder

WORKDIR /app

# Copier les node_modules depuis l'étape précédente
COPY --from=deps /app/node_modules ./node_modules

# Copier le code source
COPY . .

# Variables d'environnement pour le build
ENV NEXT_TELEMETRY_DISABLED 1
ENV NODE_ENV production

# Build de l'application Next.js
RUN npm run build

# ============================================================================
# STAGE 3 : Runner (Image finale)
# ============================================================================
FROM --platform=linux/amd64 node:lts-alpine AS runner

WORKDIR /app

# Configuration de l'environnement
ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1
ENV PORT 3000
ENV HOST 0.0.0.0

# Créer un utilisateur non-root pour la sécurité
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# Copier les fichiers nécessaires depuis le builder
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# Changer le propriétaire des fichiers
RUN chown -R nextjs:nodejs /app

# Utiliser l'utilisateur non-root
USER nextjs

# Exposer le port
EXPOSE 3000

# Health check
#HEALTHCHECK --interval=30s --timeout=10s --start-period=40s --retries=3 \
#    CMD node -e "require('http').get('http://localhost:3000/', (r) => {process.exit(r.statusCode === 200 ? 0 : 1)})"

# Démarrer l'application
CMD ["node", "server.js"]

