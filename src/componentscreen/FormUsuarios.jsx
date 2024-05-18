import React from 'react';
import { HookUsuarios } from '../Hooks/HookUsuarios';
import '..//Style//FormUsuarios.css'

export const FormUsuarios = () => {
  const {dataform,resultado,registro,submit} = HookUsuarios();
  
  return (
    <>
      <div className="form-usuarios">
      <h1>Registro de Usuarios</h1>
      <form onSubmit={submit}>
      <label>Ingrese el nombre del usuario</label>
        <input type='text' name='nombre' onChange={registro} placeholder='Ingrese su nombre' />
        <label>Ingrese su direccion</label>
        <input type='text' name='direccion' onChange={registro} placeholder='ingrese su direccion' />
        <label>Ingrese su numero de telefono</label>
        <input type='text' name='telefono' onChange={registro} placeholder='ingrese su numero de telefono' />
        <label>Ingrese su correo</label>
        <input type='text' name='correo_electronico' onChange={registro} placeholder='Ingrese su correo' />
        <button type='submit'>Enviar</button>
      </form>
      <p>{resultado}</p>
      </div>
    </>
  )
}
