# Etapa 1: Construcción de la aplicación
FROM node:18-alpine AS build
WORKDIR /app

# Copiar archivos necesarios para instalar dependencias
COPY package*.json ./
# Instalar todas las dependencias para construir (incluyendo devDependencies)
RUN npm ci

# Copiar el resto de los archivos de la aplicación
COPY . ./
# Construir la aplicación Angular
RUN npm run build --configuration=production

# Etapa 2: Imagen final para producción
FROM node:18-alpine
WORKDIR /usr/app

# Copiar la carpeta de salida de la etapa de construcción
COPY --from=build /app/dist/camara-comercio ./dist

# Instalar únicamente dependencias de producción
COPY package*.json ./
RUN npm ci --only=production

# Comando para iniciar la aplicación SSR
CMD ["node", "dist/server/server.mjs"]

# Exponer el puerto en el que correrá el servidor
EXPOSE 4000
