import React, { useState } from 'react';
import axios from 'axios';

export const HookUsuarios = () => {
    const [dataform, setdataform] = useState(
        {
            "nombre" : "",
            "direccion" : "",
            "telefono" : "",
            "correo_electronico" : ""
        });
    
      const [resultado, setresultado] = useState("");
    
      const registro = (event) => {
        const { name, value } = event.target;
        setdataform({ ...dataform, [name]: value });
        console.log(dataform);
      }
    
      const submit = async (event) => {
        event.preventDefault();
        const url = "http://localhost:3000/Usuarios";
    
        const result = await axios.post(url, dataform);
        const dataresult = result.data;
    
        setresultado(dataresult.mensaje + ' id: ' + dataresult.Obj_indertado.id);
      }

      return { dataform, resultado, registro, submit }; 
    }
 