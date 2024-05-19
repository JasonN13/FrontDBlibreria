import React from 'react'
import { HookRUsuarios } from '../Hooks/HookRUsuarios'
import '..//Style//Nuevosusuarios.css'


export const FormRUsuarios = () => {
    const usuarios = HookRUsuarios();
  return (
    <div className="form-usuarios-container">
      <h1 className="form-usuarios-title">Lista de Usuarios</h1>
      <ul className="form-usuarios-list">
        {usuarios.map(usuario => (
          <li key={usuario.usuario_id} className="form-usuarios-item">
            <span className="form-usuarios-details"><strong>Nombre:</strong></span>
            <span className="form-usuarios-data">{usuario.nombre}</span><br />
            <span className="form-usuarios-details"><strong>Dirección:</strong></span>
            <span className="form-usuarios-data">{usuario.direccion}</span><br />
            <span className="form-usuarios-details"><strong>Teléfono:</strong></span>
            <span className="form-usuarios-data">{usuario.telefono}</span><br />
            <span className="form-usuarios-details"><strong>Correo Electrónico:</strong></span>
            <span className="form-usuarios-data">{usuario.correo_electronico}</span>
          </li>
        ))}
      </ul>
    </div>
  )

};


