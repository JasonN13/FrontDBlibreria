import { useState, useEffect } from 'react';
import axios from 'axios';

export const HookRUsuarios = () => {
    const [NewUsuario, setNewUsuario] = useState([]);

    useEffect(() => {
        const fetchNusuario = async () => {
            try {
                const response = await axios.get('http://localhost:3000/Registro_NUsuarios');
                setNewUsuario(response.data);
            } catch (error) {
                console.error("Error al obtener los registros de los usuarios:", error.message);
            }
        };

        fetchNusuario();
    }, []);

    return NewUsuario;
};