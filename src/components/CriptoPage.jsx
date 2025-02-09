import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import axios from "axios"
import "./CriptoPage.css";
import usePetition  from '../hooks/usePetition.js'

const CriptoPage = () =>{
    
    const API_URL= import.meta.env.VITE_API_URL
    const params =useParams()
    const peticion = usePetition( `assets/${params.id}` , `assets/${params.id}/history?interval=d1`)
    const { name, rank, symbol, priceUsd, history }= peticion // destructurando el estado "info"

    return (
        <>
            <h1>Soy la criptomoneda: {params.id}</h1>
            {
                peticion && (
                    <div className="info">
                        <ul>
                            <li><span className="label">Nombre: </span>{name}</li>
                            <li><span className="label">Ranking: </span>{rank}</li>
                            <li><span className="label">Simbolo: </span>{symbol}</li>
                            <li><span className="label">Precio: $ </span>{priceUsd}</li>
                        </ul>
                    </div>
                )
            }
            

            {
                history && (
                <table>

                    <thead>
                        <tr>
                            <th>Fecha</th>
                            <th>Precio</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            history?.map(( { date, priceUsd, time } ) => (
                                <tr key={ time }>
                                    <td>{ new Date( date ).toDateString( ) }</td>
                                    <td>{ parseFloat( priceUsd, 3 ) }</td>
                                </tr>
                            )) || <tr><td>No hay datos</td></tr>
                        }
                    </tbody>

                </table>
                )
            }
            
        </>
        
    )
}
export default CriptoPage