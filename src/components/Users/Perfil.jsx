import { useContext } from "react";
import { UserContext } from "../../context/UserContext";
import "./Perfil.css"

const Perfil = ( ) => {

    const usuario = useContext( UserContext );
    const { first_name, last_name, email, avatar } = usuario

    return (
        <div className="perfil">
            <h1>Perfil de { `${first_name} ${last_name}` }</h1>
            <img src={ avatar } alt={ `avatar de ${first_name}` } />
            <h2>{ email }</h2>
        </div>
    )
}

export default Perfil;