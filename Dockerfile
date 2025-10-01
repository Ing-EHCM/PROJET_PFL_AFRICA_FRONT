FROM node:22-alpine

# Création du dossier de l'application
WORKDIR /app

# Copie des fichiers package.json et package.lock.json

COPY package*.json ./

# Installation des dépendances

RUN npm install 

# Copie des fichiers de l'installation
COPY . .

# Exposition du port
EXPOSE 4200

# Démarrage de l'application (varie en fonction du framework )
CMD ["npm", "run", "start"]

# Pour créer l'image docker build -t nom-image:version1

#  docker images  //lister les images 

# run -p 4200:4200 mma-ms:version1      //créer un container (varie en fonction du framework )

# docker ps 