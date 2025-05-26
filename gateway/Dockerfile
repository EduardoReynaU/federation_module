# Imagen base oficial de Node.js
FROM node:20

# Establecer variable de entorno para producción
ENV NODE_ENV=production

# Directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# Copiar archivos de dependencias
COPY package*.json ./

# Instalar solo dependencias necesarias para producción
RUN npm install --omit=dev

# Copiar el resto del código fuente
COPY . .

# Exponer el puerto del Gateway (4000)
EXPOSE 4000

# Comando para iniciar el servidor
CMD ["node", "index.js"]
