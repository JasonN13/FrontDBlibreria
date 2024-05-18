import React from 'react';
import { HookLibrosperdidos } from '../Hooks/HookLibrosperdidos';
import '..//Style//FormPerdidos.css'
export const FormLibros_perdidos = () => {
  const {dataform,resultado,registro,submit} = HookLibrosperdidos();
  
  return (
    <>
      <div className="form-libros-perdidos">
      <h1>Registro de libros perdidos</h1>
      <form onSubmit={submit}>
        <label>Ingrese el Id libro</label>
        <input type='text' name='libro_id' onChange={registro} placeholder='Id libro' />
        <label>Ingrese la Fecha de reporte</label> 
        <input type='date' name='fecha_notificacion' onChange={registro} placeholder='Fecha de reporte' />
        <label>Ingrese el Id Usuari</label>
        <input type='text' name='usuario_id' onChange={registro} placeholder='Id Usuario' />
        <button type='submit'>Enviar</button>
      </form>
      <p>{resultado}</p>
      </div>
    </>
  )
}
