import { BrowserRouter, Route, Routes, Link } from "react-router-dom"
import { FormLibros_perdidos } from "./componentscreen/FormLibros_perdidos"
import { FormLibros } from "./componentscreen/Formlibros"
import { FormPrestamos } from "./componentscreen/FormPrestamos"
import { FormUsuarios } from "./componentscreen/FormUsuarios"
import { FormRPrestamos } from "./componentscreen/FormRPrestamos"
import { FormLibrosPerdidos } from "./componentscreen/FormRLPerdidos"
import './Style/App.css'


export const App = () => {
  

  return (
    <>
    <BrowserRouter>
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
              <Link to="/Consulta Prestamos">Consulta</Link>
            </li>
            <li>
              <Link to="/Consulta Libros Perdidos">Consulta LB Perdidos</Link>
            </li>
          </ul>
        </nav>
        <Routes>
           <Route path='/Registro_Libros_perdidos' element={<FormLibros_perdidos/>}/> 
           <Route path='/RegistroLibros' element={<FormLibros/>}/> 
           <Route path='/RegistroPrestamos' element={<FormPrestamos/>}/> 
           <Route path='/RegistroUsuarios' element={<FormUsuarios/>}/>   
           <Route path='/Consulta Prestamos' element={<FormRPrestamos/>}/>
           <Route path='/Consulta Libros Perdidos' element={<FormLibrosPerdidos/>}/>        
        </Routes>    
    </BrowserRouter>
      
    </>
  )
}


