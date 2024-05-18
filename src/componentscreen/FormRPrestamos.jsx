import React from 'react';
import { HookRPrestamos } from '../Hooks/HookRPrestamos';
import '..//Style//Consultas.css'


export const FormRPrestamos = () => {
  const prestamos = HookRPrestamos();

  return (
    <div className="container">
      <h2 className="title">Préstamos</h2>
      <ul className="prestamos-list">
        {prestamos.map((prestamo, index) => (
          <li key={index} className="prestamo-item">
            <span className="prestamo-details"><strong>Usuario:</strong></span>
            <span className="prestamo-data">{prestamo.nombre_usuario}</span>, 
            <span className="prestamo-details"><strong>Libro:</strong></span>
            <span className="prestamo-data">{prestamo.titulo_libro}</span>, 
            <span className="prestamo-details"><strong>Fecha del préstamo:</strong></span>
            <span className="prestamo-data">{prestamo.fecha_prestamo}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};


