import React, { useState, useEffect } from 'react';
import axios from 'axios';

export const HookRPrestamos = () => {
  const [prestamos, setPrestamos] = useState([]);

  useEffect(() => {
    const obtenerPrestamos = async () => {
      try {
        const response = await axios.get('http://localhost:3000/Registro_Prestamos'); 
        setPrestamos(response.data);
      } catch (error) {
        console.error('Error al obtener los datos de préstamos:', error);
      }
    };

    obtenerPrestamos();
  }, []);

  return prestamos;
};



 