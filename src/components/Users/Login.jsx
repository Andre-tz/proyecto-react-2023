import axios from "axios";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import "./Login.css"

const Login = ( ) => {

    const navigation = useNavigate();

    const [ user, setUser ] = useState({
        email : "",
        password : ""
    });

    const [ loading, setLoading ] = useState( false );
    const [ error, setError ] = useState(  );

    const handleInput = e => {
        setUser( {
            ...user,
            [ e.target.name ] : e.target.value
        } )        
    }

    const handleSubmit = e => {
        
        e.preventDefault();
        setLoading( true );
        setError( null );

        axios.post( "https://reqres.in/api/login", user )
            .then( data => { 
                const token = data.data.token
                localStorage.setItem( "tokenLogin", token )
                navigation( "/" )
            } )
            .catch( error => {
                console.error( error )
                setError( error.response.data.error );
            })
            .finally( () => setLoading( false ) )
    }

    if( localStorage.getItem( "tokenLogin")) return  <Navigate to= "/" />

    return (
        <div className="login-container">
            <h1>Iniciar sesion</h1>
            <form onSubmit={ handleSubmit}>

                <div className="field">
                    <label>
                        Correo Electronico
                        <input required onChange={ handleInput} type="email"  name="email" value={ user.email }/>
                    </label>
                </div>

                <div className="field">
                    <label>
                        Contraseña
                        <input required onChange={ handleInput } type="password"  name="password" value={ user.password }/>
                    </label>
                </div>
                    
                <div className="submit">
                    <input type="submit" value ={ loading ? "Cargando..." : "Ingresar"} id="" />
                </div>
                
            </form>

            {
                error && <span className="error">Error: { error }</span>
            }
        </div>
    )
}

export default Login;