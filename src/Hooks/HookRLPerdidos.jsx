import { useState, useEffect } from 'react';
import axios from 'axios';

export const HookLibrosPerdidos = () => {
    const [librosPerdidos, setLibrosPerdidos] = useState([]);

    useEffect(() => {
        const fetchLibrosPerdidos = async () => {
            try {
                const response = await axios.get('http://localhost:3000/Registro_libros_perdidos');
                setLibrosPerdidos(response.data);
            } catch (error) {
                console.error("Error al obtener los registros de libros perdidos:", error.message);
            }
        };

        fetchLibrosPerdidos();
    }, []);

    return librosPerdidos;
};




