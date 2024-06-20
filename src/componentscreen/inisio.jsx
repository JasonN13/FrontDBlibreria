import React from 'react';
import { InisioSesionfrmHook } from '../Hooks/InisioSesionfrmHook';
import '..//Style//login.css'

export const Inisio = () => {
    const { dataform, changehandler, submitHandler, Registrar } = InisioSesionfrmHook();

    return (
        <>
            <div className='container' id='registro-container'>
                <form id='registro-form' onSubmit={submitHandler}>
                    <h1 id='titulo'>Inicio de sesión</h1>
                    <div className="mt-3">
                        <label htmlFor="nombre-usuario" className="form-label">Nombre de Usuario</label>
                        <input id='nombre-usuario' onChange={changehandler} type="text" className="form-control" name='nombre_usuario' />
                    </div>
                    <div className="mt-3">
                        <label htmlFor="contrasena" className="form-label">Contraseña</label>
                        <input id='contrasena' onChange={changehandler} type="password" className="form-control" name='contrasena' />
                    </div>
                    <div className='mt-3'>
                        <button id='iniciar-sesion-btn' type="submit" className="btn btn-primary w-100">Iniciar sesión</button>
                    </div>
                    <div className='mt-3'>
                        <button id='registro-btn' type="button" onClick={Registrar} className="btn btn-primary w-100">Registro</button>
                    </div>
                </form>
            </div>
        </>
    );
};