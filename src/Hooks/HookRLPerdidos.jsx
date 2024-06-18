import { useState, useEffect } from 'react';
import axios from 'axios';

export const HookLibrosPerdidos = () => {

    const loginfo = window.localStorage.getItem('Papas')

    const [librosPerdidos, setLibrosPerdidos] = useState([]);

    useEffect(() => {
        const fetchLibrosPerdidos = async () => {
            const url = "http://localhost:3000/Registro_libros_perdidos"
            try {
                const response = await axios.get(url,{
                    headers:{
                            'Authorization': `Bear ${loginfo} `
                  }
                });
                setLibrosPerdidos(response.data);
            } catch (error) {
                console.error("Error al obtener los registros de libros perdidos:", error.message);
            }
        };

        fetchLibrosPerdidos();
    }, []);

    return librosPerdidos;
};




