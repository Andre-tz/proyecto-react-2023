import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Components/App.jsx'
import "./main.css"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Pagina404 from './Components/404.jsx'
import Cuadricula from './Components/Cuadricula.jsx'
import Home from './Components/Home.jsx'
import CriptoPage from './Criptos/CriptoPage.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
    
     <BrowserRouter>

        <Routes>

            <Route path='/' element={<App/>}>

                 <Route index element={<Home />}/>

            </Route>
            
            <Route path='/criptomonedas' element={<App />} >

                <Route index element={<Cuadricula />}/>

                <Route path=':id' element={<CriptoPage />} />

            </Route>

            <Route path="*" element={<Pagina404 />}/>

        </Routes>

        </BrowserRouter>

)
