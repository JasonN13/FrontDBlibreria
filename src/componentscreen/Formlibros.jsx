import React from 'react';
import { HookLibros } from '../Hooks/HookLibros';
import '..//Style//FormLibros.css'

export const FormLibros = () => {
  const {dataform,resultado,registro,submit} = HookLibros();
  
  return (
    <>
      <div className="form-libros">
      <h1>Registro de libros</h1>
      <form onSubmit={submit}>
        <label>Ingrese el Título del libro</label>
        <input type='text' name='titulo' onChange={registro} placeholder='Título del libro' />
        <label>Ingrese el Autor del libro</label>
        <input type='text' name='autor' onChange={registro} placeholder='Autor del libro' />
        <label>Ingrese el Género del libro</label>
        <input type='text' name='genero' onChange={registro} placeholder='Género del libro' />
        <label>Ingrese el Año de publicación</label>
        <input type='number' name='anio_publicacion' onChange={registro} placeholder='Año de publicación' />
        <label>Ingrese el ISBN</label>
        <input type='text' name='isbn' onChange={registro} placeholder='ISBN' />
        <label>Ingrese el Estado del libro </label>
        <input type='text' name='disponibilidad' onChange={registro} placeholder='Disponibles' />
        <button type='submit'>Enviar</button>
      </form>
      <p>{resultado}</p>
      </div>
    </>
  )
}
