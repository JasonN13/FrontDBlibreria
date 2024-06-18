import { useState, useEffect } from 'react';
import axios from 'axios';

export const HookRLibros = () => {

    const loginfo = window.localStorage.getItem('Papas')


    const [NewLibro, setNewLibro] = useState([]);

    useEffect(() => {
        const fetchNLibro = async () => {
            const url = "http://localhost:3000/Registro_NLibros"
            try {
                const response = await axios.get(url, {
                    headers:{
                            'Authorization': `Bear ${loginfo} `
                  }
                });
                setNewLibro(response.data);
            } catch (error) {
                console.error("Error al obtener los registros de los Libros:", error.message);
            }
        };

        fetchNLibro();
    }, []);

    return NewLibro;
};