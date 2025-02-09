import axios  from "axios";
import { useEffect } from "react";
import { useState } from "react";

const usePetition = ( endpointInfo, endpointHistory) => {

    const API_URL= import.meta.env.VITE_API_URL

    const [ data, setData ] = useState(
        {
            rank: "",
            symbol: "",
            supply: "",
            maxSupply: "",
            history: []
        }
    )

    useEffect( ( ) =>{

        axios.get( `${ API_URL }${ endpointInfo }` )
        .then( ({ data: { data: { name, rank, symbol, priceUsd } } }) =>setData( {
            name,
            rank,
            symbol,
            priceUsd
        } ) )
        .catch( error => console.error( error ))

        axios.get( `${API_URL}${ endpointHistory }` )
        .then( ( {data: {data}}) =>{
            setData( currentInfo =>({
                ...currentInfo,
                history: data
            }))
        })
        .catch( error => console.error( error ))

    }, [])


    
    return data

}

export default usePetition;