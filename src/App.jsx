import { BrowserRouter, Route, Routes } from "react-router-dom"
import { FormLibros_perdidos } from "./componentscreen/FormLibros_perdidos"
import { FormLibros } from "./componentscreen/Formlibros"
import { FormPrestamos } from "./componentscreen/FormPrestamos"
import { FormUsuarios } from "./componentscreen/FormUsuarios"

export const App = () => {
  

  return (
    <>
    <BrowserRouter>
        <Routes>
           <Route path='/Registro_Libros_perdidos' element={<FormLibros_perdidos/>}/> 
           <Route path='/RegistroLibros' element={<FormLibros/>}/> 
           <Route path='/RegistroPrestamos' element={<FormPrestamos/>}/> 
           <Route path='/RegistroUsuarios' element={<FormUsuarios/>}/>        
        </Routes>    
    </BrowserRouter>
      
    </>
  )
}


