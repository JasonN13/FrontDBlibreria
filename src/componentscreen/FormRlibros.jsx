import React from 'react'
import { HookRLibros } from '../Hooks/HookRLibros';
import '..//Style//RegistroLibros.css'


export const FormRLibros = () => {
    const New_Libros = HookRLibros();
  return (
    <div className="form-NLibros-container">
      <h1 className="form-NLibros-title">Lista de Libros</h1>
      <ul className="form-NLibros-list">
        {New_Libros.map(libro => (
          <li key={libro.libro_id} className="form-NLibros-item">
            <span className="form-NLibros-details"><strong>Titulo:</strong></span>
            <span className="form-NLibros-data">{libro.titulo}</span><br />
            <span className="form-NLibros-details"><strong>Autor:</strong></span>
            <span className="form-NLibros-data">{libro.autor}</span><br />
            <span className="form-NLibros-details"><strong>Año de publicacion:</strong></span>
            <span className="form-NLibros-data">{libro.anio_publicacion}</span><br />
            <span className="form-NLibros-details"><strong>Isbn:</strong></span>
            <span className="form-NLibros-data">{libro.isbn}</span>
            <span className="form-NLibros-details"><strong>Estado del libro:</strong></span>
            <span className="form-NLibros-data">{libro.disponibilidad}</span>
          </li>
        ))}
      </ul>
    </div>
  )

};