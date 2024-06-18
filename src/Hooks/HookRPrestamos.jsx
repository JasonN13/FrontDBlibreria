import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const HookRPrestamos = () => {

  const loginfo = window.localStorage.getItem('Papas')

  const [prestamos, setPrestamos] = useState([]);

  useEffect(() => {
    const obtenerPrestamos = async () => {
      const url = "http://localhost:3000/Registro_Prestamos"
      try {
        const response = await axios.get(url,{
          headers:{
                  'Authorization': `Bear ${loginfo} `
        }
      }); 
        setPrestamos(response.data);
      } catch (error) {
        console.error('Error al obtener los datos de préstamos:', error);
      }
    };

    obtenerPrestamos();
  }, []);

  return prestamos;
};



 