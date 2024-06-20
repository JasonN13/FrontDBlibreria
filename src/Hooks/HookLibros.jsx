import React, { useState } from 'react';
import axios from 'axios';

export const HookLibros = () => {
 
  const loginfo = window.localStorage.getItem('Papas')

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
    try {
      const result = await axios.post(url, dataform, {
        headers:{
                'Authorization': `Bear ${loginfo} `
      }
    });
        const dataresult = result.data;
    
        setresultado(dataresult.mensaje + ' id: ' + dataresult.Obj_insertado[0].libro_id);
        
    } catch (error) {
      if (axios.isAxiosError(error)) {
          const { response } = error;
          const { data } = response;
          console.log(data);
      } else {
          console.log("Error Desconocido");
      }
  }
        
      }

      return { dataform, resultado, registro, submit }; 
    }
 