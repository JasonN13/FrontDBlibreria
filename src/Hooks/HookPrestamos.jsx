import React, { useState } from 'react';
import axios from 'axios';

export const HookPrestamos = () => {

  const login = window.localStorage.getItem('Papas')

    const [dataform, setdataform] = useState(
        {
            fecha_prestamo : new Date()  ,
            fecha_devolucion : new Date 
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
    try {
      const result = await axios.post(url, dataform, 
        {
            headers: {
                'Authorization': `Bear ${login} `
            }
        });
      const dataresult = result.data;
  
      setresultado(dataresult.mensaje + ' id: ' + dataresult.Obj_indertado[0].prestamo_id);
      
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
 