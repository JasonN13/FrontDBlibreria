import React from 'react';
import { HookLibros } from '../Hooks/HookLibros';

export const FormLibros = () => {
  const {dataform,resultado,registro,submit} = HookLibros();
  
  return (
    <>
      <h1>Registro de libros</h1>
      <form onSubmit={submit}>
        <input type='text' name='titulo' onChange={registro} placeholder='Título del libro' />
        <input type='text' name='autor' onChange={registro} placeholder='Autor del libro' />
        <input type='text' name='genero' onChange={registro} placeholder='Género del libro' />
        <input type='number' name='anio_publicacion' onChange={registro} placeholder='Año de publicación' />
        <input type='text' name='isbn' onChange={registro} placeholder='ISBN' />
        <input type='text' name='disponibilidad' onChange={registro} placeholder='Disponibles' />
        <button type='submit'>Enviar</button>
      </form>
      <p>{resultado}</p>
    </>
  )
}
