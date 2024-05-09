<p align="center">
  <a href="https://docs.docker.com/" target="blank"><img src="https://devtalles.com/images/openai-white-shadow.png" width="150" height="150" alt="OpenAI Logo" /></a>
</p>

# Descripción:

Este proyecto utiliza React para el frontend y Nest para el backend para crear una interfaz que permite a los usuarios interactuar con modelos de OpenAI.

## Resumen

Esta guía es una recopilación de todos los pasos necesarios para construir un
entorno de escritorio a partir de una instalación limpia basada en React y Nest.
Voy a asumir que te manejas bien con sistemas operativos y sus líneas de comandos. 
Ya que estás leyendo esto, asumiré también que sabes programar en javascript con typescript 
y usar github para clonar el proyecto. Y las instalaciones recomendadas asi como herramientas 
que se usaran en el proyecto. Esta guía es básicamente una descripción de cómo levantar mi
entorno de escritorio con react en el frontend y nest en el backend desde 0.

***Idioma***

-🇪🇸 Español

***Enlaces  Rápidos***

# Índice

### Instalaciones recomendadas

## Necesarias

* [Visual Studio Code](https://code.visualstudio.com/)

* [Postman](https://www.postman.com/downloads/)

* [Node](https://nodejs.org/en)



### Extensiones de VSCode recomendadas:

* [Activitus Bar](https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.activitusbar)

* [ES7 React/Redux](https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets)

* [Simple React Snippets](https://marketplace.visualstudio.com/items?itemName=burkeholland.simple-react-snippets)

* [Auto Close Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-close-tag)

* [Auto Rename Tag](https://marketplace.visualstudio.com/items?itemName=formulahendry.auto-rename-tag)

* [Paste JSON as Code](https://marketplace.visualstudio.com/items?itemName=quicktype.quicktype)

* [TypeScript importer - opcional](https://marketplace.visualstudio.com/items?itemName=pmneo.tsimporter)

* [.env](https://marketplace.visualstudio.com/items?itemName=mikestead.dotenv)

* [Tailwind CSS IntelliSense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss)

* [PostCSS Language Support](https://marketplace.visualstudio.com/items?itemName=csstools.postcss)

* [Better Comments](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments)

# Clonar el repositorio

```bash
git clone https://github.com/MyLittleViruzbx1/OpenAI-API.git

```

### React Frontend

```bash
cd react-gtp
npm install
npm run dev
```

Vite server corre en el puerto ```http://localhost:5173/```

### Nest Backend

```bash
cd nest-gpt
npm install
npm run start:dev
```

### Variable de entorno
Al archivo 
  .env.tample

cambialo a .env
```bash
  VITE_GPT_API=http://localhost:3000/gpt
```

Listo tendras completo el front-end