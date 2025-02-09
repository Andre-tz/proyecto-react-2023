import "./Menu.css"
import { NavLink } from "react-router-dom"
const Menu = ()=>{
    return (
        <>

            <nav className="main-menu">

                <ul>

                    <li><NavLink  to="/">Incio</NavLink></li>
                    <li><NavLink to="/criptomonedas">Lista de Criptos</NavLink></li>
                    
                </ul>

            </nav>

        </>
    )
}

export default Menu