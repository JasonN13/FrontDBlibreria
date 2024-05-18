import React from "react";
import { HookLibrosPerdidos } from "../Hooks/HookRLPerdidos";

export const FormLibrosPerdidos = () => {
    // Obtener los libros perdidos usando el hook
    const librosPerdidosRaw = HookLibrosPerdidos();

    // Convertir a un array si no lo es
    const librosPerdidos = Array.isArray(librosPerdidosRaw) ? librosPerdidosRaw : [];

    return (
        <div className="container">
            <h2 className="title">Registros de Libros Perdidos</h2>
            <ul>
                {librosPerdidos.map((libroPerdido, index) => (
                    <li key={index} className="prestamo-item">
                        <strong className="prestamo-details">Usuario:</strong>
                        <span className="prestamo-data">{libroPerdido.nombre_usuario}</span>,
                        <strong className="prestamo-details">Libro:</strong>
                        <span className="prestamo-data">{libroPerdido.titulo_libro}</span>,
                        <strong className="prestamo-details">Fecha de Extravío:</strong>
                        <span className="prestamo-data">{libroPerdido.fecha_extravio}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};
