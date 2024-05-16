import React from 'react';
import { HookPrestamos } from '../Hooks/HookPrestamos';

export const FormPrestamos = () => {
  const {dataform,resultado,registro,submit} = HookPrestamos();
  
  return (
    <>
      <h1>Registro de libros</h1>
      <form onSubmit={submit}>
        <input type='text' name='usuario_id' placeholder='Ingrese el id del usuario' onChange={registro}  />
        <input type='text' name='libro_id' placeholder='Ingrese el id del libro' onChange={registro}  /> 
        <label>Fecha de prestamo :</label>
        <input type='date' name='fecha_prestamo' placeholder='Fecha de prestamo' onChange={registro}  />
        <label>Fecha de devolucion :</label>
        <input type='date' name='fecha_devolucion' placeholder='Fecha de devolucion' onChange={registro} />
        <button type='submit'>Enviar</button>
      </form>
      <p>{resultado}</p>
    </>
  )
}
