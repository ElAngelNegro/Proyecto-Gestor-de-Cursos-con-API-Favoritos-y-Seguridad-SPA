# Gestor de Cursos React

Aplicación web SPA desarrollada en React como parte de la EVA 3 del curso de Programación Frontend en INACAP.

## Descripción

Gestor de cursos que consume datos desde una API externa, permite buscar cursos por texto, filtrar por docente, marcar favoritos y alternar entre modo claro y oscuro. Los favoritos y la preferencia de modo oscuro se guardan en localStorage.

## Tecnologías utilizadas

- React 19 + Vite
- Axios
- LocalStorage
- ESLint
- SonarQube Cloud

## Estructura del proyecto

src/
├── components/
│   ├── CourseCard.jsx
│   ├── CourseList.jsx
│   ├── SearchBar.jsx
│   └── Header.jsx
├── hooks/
│   └── useLocalStorage.js
├── services/
│   └── courseService.js
├── utils/
│   └── sanitize.js
├── App.jsx
├── main.jsx
└── App.css

## Funcionalidades

- Consumo de API externa con async/await (jsonplaceholder.typicode.com)
- Búsqueda de cursos por texto en tiempo real
- Filtro por docente
- Favoritos con persistencia en localStorage
- Modo oscuro con persistencia en localStorage
- Manejo de errores con botón de reintento
- Sanitización de texto desde la API
- Análisis de calidad con SonarQube Cloud

## Buenas prácticas de seguridad aplicadas

- Sin uso de dangerouslySetInnerHTML
- Sanitización de datos externos
- Sin almacenamiento de datos sensibles en localStorage
- Validación de entradas del usuario (maxLength, trim, toLowerCase)
- Separación de responsabilidades por carpetas

## Instalación

```bash
npm install
npm run dev
```

## Autor

Sebastián Andres Pasmiño Toledo — INACAP Valparaíso