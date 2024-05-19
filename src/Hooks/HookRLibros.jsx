import { useState, useEffect } from 'react';
import axios from 'axios';

export const HookRLibros = () => {
    const [NewLibro, setNewLibro] = useState([]);

    useEffect(() => {
        const fetchNLibro = async () => {
            try {
                const response = await axios.get('http://localhost:3000/Registro_NLibros');
                setNewLibro(response.data);
            } catch (error) {
                console.error("Error al obtener los registros de los Libros:", error.message);
            }
        };

        fetchNLibro();
    }, []);

    return NewLibro;
};