import React from 'react';
import { HookUsuarios } from '../Hooks/HookUsuarios';

export const FormUsuarios = () => {
  const {dataform,resultado,registro,submit} = HookUsuarios();
  
  return (
    <>
      <h1>Registro de libros</h1>
      <form onSubmit={submit}>
        <input type='text' name='nombre' onChange={registro} placeholder='Ingrese su nombre' />
        <input type='text' name='direccion' onChange={registro} placeholder='ingrese su direccion' />
        <input type='text' name='telefono' onChange={registro} placeholder='ingrese su numero de telefono' />
        <input type='text' name='correo_electronico' onChange={registro} placeholder='Ingrese su correo' />
        <button type='submit'>Enviar</button>
      </form>
      <p>{resultado}</p>
    </>
  )
}
