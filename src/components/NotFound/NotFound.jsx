import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <main className="not-found">
      <p className="not-found__code">404</p>
      <h1 className="not-found__title">Pagina no encontrada</h1>
      <Link className="not-found__link" to="/">Volver al inicio</Link>
    </main>
  );
}

export default NotFound;
