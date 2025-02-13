import { useContext } from "react"
import "./Menu.css"
import { NavLink, useNavigate } from "react-router-dom"
import { UserContext } from "../context/UserContext";

const Menu = ()=>{

    const usuario = useContext( UserContext );

    const navigation = useNavigate();

    const handleButton = ( ) => {
        localStorage.removeItem( "tokenLogin")
        navigation( "/login ")
    }

    return (
        <>

            <nav className="main-menu">

                <ul>

                    <li><NavLink  to="/">Incio</NavLink></li>
                    <li><NavLink to="/criptomonedas">Lista de Criptos</NavLink></li>
                    <li><NavLink to="/perfil" >Perfil de { usuario.first_name }</NavLink></li>
                    <li><a onClick={ handleButton } >Cerrar Sesion</a></li>
                    
                </ul>

            </nav>

        </>
    )
}

export default Menu