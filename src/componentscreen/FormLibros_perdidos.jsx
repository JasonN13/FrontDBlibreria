import React from 'react';
import { HookLibrosperdidos } from '../Hooks/HookLibrosperdidos';

export const FormLibros_perdidos = () => {
  const {dataform,resultado,registro,submit} = HookLibrosperdidos();
  
  return (
    <>
      <h1>Registro de libros perdidos</h1>
      <form onSubmit={submit}>
        <input type='text' name='id_libro' onChange={registro} placeholder='Id libro' /> 
        <input type='date' name='fecha_notificacion' onChange={registro} placeholder='Fecha de reporte' />
        <input type='text' name='id_usuario' onChange={registro} placeholder='Id Usuario' />
        <button type='submit'>Enviar</button>
      </form>
      <p>{resultado}</p>
    </>
  )
}
