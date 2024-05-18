import React from 'react';
import { HookPrestamos } from '../Hooks/HookPrestamos';
import '..//Style//FormPrestamos.css'

export const FormPrestamos = () => {
  const {dataform,resultado,registro,submit} = HookPrestamos();
  
  return (
    <>
      <div className="form-prestamos">
      <h1>Registro de prestamo de libros</h1>
      <form onSubmit={submit}>
        <label>Ingrese el nombre del usuario</label>
        <input type='text' name='usuario_id' placeholder='Ingrese el id del usuario' onChange={registro}  />
        <label>Ingrese el nombre del libro </label>
        <input type='text' name='libro_id' placeholder='Ingrese el id del libro' onChange={registro}  /> 
        <label>Fecha de prestamo </label>
        <input type='date' name='fecha_prestamo' placeholder='Fecha de prestamo' onChange={registro}  />
        <label>Fecha de devolucion </label>
        <input type='date' name='fecha_devolucion' placeholder='Fecha de devolucion' onChange={registro} />
        <button type='submit'>Enviar</button>
      </form>
      <p>{resultado}</p>
      </div>
    </>
  )
}
