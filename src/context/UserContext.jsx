import axios from "axios";
import { createContext, useEffect, useState } from "react";

const UserContext = createContext();

const UserContextProvider = ( { children } ) =>{

    const [ usuario, setUsuario ] = useState( { } )

    useEffect ( () => {
        axios.get( "https://reqres.in/api/users/2" )
            .then( data => setUsuario( data.data.data))
            .catch( error => console.error( error ) )
    }, [])

    return(
        <UserContext.Provider value = { usuario }>
            { children }
        </UserContext.Provider>
    )
}

export { UserContext, UserContextProvider };
