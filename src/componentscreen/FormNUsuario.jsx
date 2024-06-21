import React from 'react';
import { CrearUsuarioHook } from '../Hooks/CrearUsuarioHook';
import '..//Style//Registro.css'

export const FormNUsuario = () => {
    const { changeHandler, submithandler } = CrearUsuarioHook("http://localhost:3000/Nuevo_usuario");

    return (
        <div id='form-container'>
            <h1 id='form-title' className='mt-5'>Creacion de Usuario</h1>
            <form id='frm' onSubmit={submithandler}>
                <div className="mt-3">
                    <label htmlFor="nombre_usuario" className="form-label">Nombre de Usuario</label>
                    <input type="text" id="nombre_usuario" className="form-control" name='nombre_usuario' onChange={changeHandler} />
                </div>
                <div className="mt-3">
                    <label htmlFor="nombre" className="form-label">Nombre</label>
                    <input type="text" id="nombre" className="form-control" name='nombre' onChange={changeHandler} />
                </div>
                <div className="mt-3">
                    <label htmlFor="apellido" className="form-label">Apellido</label>
                    <input type="text" id="apellido" className="form-control" name='apellido' onChange={changeHandler} />
                </div>
                <div className="mt-3">
                    <label htmlFor="email" className="form-label">Correo Electronico</label>
                    <input type="email" id="email" className="form-control" name='email' onChange={changeHandler} />
                </div>
                <div className="mt-3">
                    <label htmlFor="contrasena" className="form-label">Contraseña</label>
                    <input type="password" id="contrasena" className="form-control" name='contrasena' onChange={changeHandler} />
                </div>
                
                <div className='mt-3' id='btn'>
                    <button type="submit" id="submit-btn" className="btn btn-primary w-100">Registrar</button>
                </div>
            </form>
        </div>
    );
};

