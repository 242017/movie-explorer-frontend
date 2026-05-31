# Movie Explorer

Aplicacion React para buscar peliculas con la API de TMDb.

## Funcionalidad

- Pagina principal con descripcion del proyecto.
- Ruta `/movies` con resultados de la API.
- Busqueda por titulo.
- Preloader durante la solicitud.
- Mensajes de error y de resultados vacios.
- Tarjetas responsivas con poster, titulo, fecha, rating y sinopsis.
- Boton "Mostrar mas" para renderizar resultados de 3 en 3.
- Persistencia de la ultima busqueda en `localStorage`.

## Tecnologias

- React
- React Router
- Vite
- TMDb API
- CSS con metodologia BEM

## Variables de entorno

Crea un archivo `.env.local` en la raiz del proyecto:

```text
VITE_TMDB_TOKEN=tu_read_access_token_de_tmdb
```

El archivo `.env.local` no debe subirse al repositorio.

## Scripts

```bash
npm install
npm run dev
npm run build
npm run lint
```
