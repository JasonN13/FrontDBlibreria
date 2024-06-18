import { useState, useEffect } from 'react';
import axios from 'axios';

export const HookRUsuarios = () => {

    const loginfo = window.localStorage.getItem('Papas')


    const [NewUsuario, setNewUsuario] = useState([]);

    useEffect(() => {
        const fetchNusuario = async () => {
            const url = "http://localhost:3000/Registro_NUsuarios"
            try {
                const response = await axios.get(url,
                {
                    headers:{
                            'Authorization': `Bear ${loginfo} `
                  }
                });
                setNewUsuario(response.data);
            } catch (error) {
                console.error("Error al obtener los registros de los usuarios:", error.message);
            }
        };

        fetchNusuario();
    }, []);

    return NewUsuario;
};