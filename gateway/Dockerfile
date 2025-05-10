# Imagen base de Node.js
FROM node:20

# Directorio de trabajo
WORKDIR /usr/src/app

# Copiar dependencias
COPY package*.json ./
RUN npm install

# Copiar el código del Gateway
COPY . .

# Exponer el puerto (usaremos 4000 para el Gateway)
EXPOSE 4000

# Comando de inicio
CMD ["node", "index.js"]
