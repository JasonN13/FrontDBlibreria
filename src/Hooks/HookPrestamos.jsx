import React, { useState } from 'react';
import axios from 'axios';

export const HookPrestamos = () => {
    const [dataform, setdataform] = useState(
        {
            fecha_prestamo : Date  ,
            fecha_devolucion : Date 
        });
    
      const [resultado, setresultado] = useState("");
    
      const registro = (event) => {
        const { name, value } = event.target;
        setdataform({ ...dataform, [name]: value });
        console.log(dataform);
      }
    
      const submit = async (event) => {
        event.preventDefault();
        const url = "http://localhost:3000/Prestamos";
    
        const result = await axios.post(url, dataform);
        const dataresult = result.data;
    
        setresultado(dataresult.mensaje + ' id: ' + dataresult.Obj_indertado[0].id);
      }

      return { dataform, resultado, registro, submit }; 
    }
 