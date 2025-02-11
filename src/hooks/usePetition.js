import axios  from "axios";
import { useEffect } from "react";
import { useState } from "react";

const usePetition = ( endpointInfo, endpointHistory) => {

    const API_URL= import.meta.env.VITE_API_URL

    const [ data, setData ] = useState(
        {
            name: "",
            rank: "",
            symbol: "",
            priceUsd: 0,
            history: []
        }
    )

    const [ cargando, setCargando ] = useState()

    useEffect( ( ) =>{

        setCargando( true )

        const fetchData = async () =>{

            try {
                const [ response1, response2 ] = await Promise.all( [
                    axios.get( `${ API_URL }${ endpointInfo }` ),
                    axios.get( `${API_URL}${ endpointHistory }` )
                ])

                const { name, rank, symbol, priceUsd } = response1.data.data

                setData({
                    name,
                    rank,
                    symbol,
                    priceUsd,
                    history : response2.data.data
                }
                )
                
            } catch (error) {
                console.error( error )
            }
        }

        fetchData();

    }, [])
 
    return data

}

export default usePetition;

/* axios.get( `${ API_URL }${ endpointInfo }` )
        .then( ({ data: { data: { name, rank, symbol, priceUsd } } }) =>{
            setData( {
                name,
                rank,
                symbol,
                priceUsd
            } )
            setCargando( false )
        })
        .catch( error => console.error( error ))

        axios.get( `${API_URL}${ endpointHistory }` )
        .then( ( {data: {data}}) =>{
            setData( currentInfo =>({
                ...currentInfo,
                history: data
            }))
        })
        .catch( error => console.error( error ))*/