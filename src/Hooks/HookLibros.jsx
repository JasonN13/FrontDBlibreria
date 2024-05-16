import React, { useState } from 'react';
import axios from 'axios';

export const HookLibros = () => {
    const [dataform, setdataform] = useState(
        {
            titulo : ""  ,
            autor : "" ,
            genero : "" ,
            anio_publicacion : "" ,
            isbn : "" ,
            disponibilidad : "" 
        });
    
      const [resultado, setresultado] = useState("");
    
      const registro = (event) => {
        const { name, value } = event.target;
        setdataform({ ...dataform, [name]: value });
        console.log(dataform);
      }
    
      const submit = async (event) => {
        event.preventDefault();
        const url = "http://localhost:3000/Libros";
    
        const result = await axios.post(url, dataform);
        const dataresult = result.data;
    
        setresultado(dataresult.mensaje + ' id: ' + dataresult.Obj_insertado.id);
      }

      return { dataform, resultado, registro, submit }; 
    }
 