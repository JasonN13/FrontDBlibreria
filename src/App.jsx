import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { FormLibros_perdidos } from "./componentscreen/FormLibros_perdidos";
import { FormLibros } from "./componentscreen/Formlibros";
import { FormPrestamos } from "./componentscreen/FormPrestamos";
import { FormUsuarios } from "./componentscreen/FormUsuarios";
import { FormRPrestamos } from "./componentscreen/FormRPrestamos";
import { FormLibrosPerdidos } from "./componentscreen/FormRLPerdidos";
import { FormRUsuarios } from "./componentscreen/FormRUsuarios";
import { FormRLibros } from "./componentscreen/FormRlibros";
import { FormNUsuario } from "./componentscreen/FormNUsuario";
import { useState } from "react";
import './Style/App.css';
import { Inisio } from "./componentscreen/inisio";

export const App = () => {
  const [loginfo, setloginf] = useState(window.localStorage.getItem('Papas'));
  const [islog, setislog] = useState(loginfo ? true : false);

  const CerrarSesion = () => {
    try {
      window.localStorage.removeItem('Papas');
      setislog(false);
      location.href = '/';
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <BrowserRouter>
        {islog && (
          <nav>
            <ul>
              <li>
                <Link to="/Registro_Libros_perdidos">Registro Libros Perdidos</Link>
              </li>
              <li>
                <Link to="/RegistroLibros">Registro Libros</Link>
              </li>
              <li>
                <Link to="/RegistroPrestamos">Registro Prestamos</Link>
              </li>
              <li>
                <Link to="/RegistroUsuarios">Registro Usuarios</Link>
              </li>
              <li>
                <Link to="/Consulta_Prestamos">Consulta Prestamos</Link>
              </li>
              <li>
                <Link to="/Consulta_Libros_Perdidos">Consulta LB Perdidos</Link>
              </li>
              <li>
                <Link to="/Registro_de_usuarios">Consulta de Usuarios</Link>
              </li>
              <li>
                <Link to="/Registro_de_Libros">Historial Libros</Link>
              </li>
              <li>
                <button onClick={CerrarSesion}>Cerrar Sesión</button>
              </li>
            </ul>
          </nav>
        )}
        <Routes>
          {islog ? (
            <>
              <Route path="/Registro_Libros_perdidos" element={<FormLibros_perdidos />} />
              <Route path="/RegistroLibros" element={<FormLibros />} />
              <Route path="/RegistroPrestamos" element={<FormPrestamos />} />
              <Route path="/RegistroUsuarios" element={<FormUsuarios />} />
              <Route path="/Consulta_Prestamos" element={<FormRPrestamos />} />
              <Route path="/Consulta_Libros_Perdidos" element={<FormLibrosPerdidos />} />
              <Route path="/Registro_de_usuarios" element={<FormRUsuarios />} />
              <Route path="/Registro_de_Libros" element={<FormRLibros />} />
            </>
          ) : (
            <Route path="/" element={<Inisio />} />
          )}
          <Route path="/Nuevo_usuario" element={<FormNUsuario/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
