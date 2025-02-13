import { useParams } from "react-router-dom"
import "./CriptoPage.css";
import usePetition  from '../hooks/usePetition.js'
import CriptoInfo from "./informacion/CriptoInfo.jsx";
import CriptoHistorial from "./informacion/CriptoHistorial.jsx";

const CriptoPage = () =>{
    const params =useParams()
    const [ peticion, loading ] = usePetition( `assets/${params.id}` , `assets/${params.id}/history?interval=d1`)
    const { name, rank, symbol, priceUsd, history }= peticion // destructurando el estado "info"

    if( loading ) return <span>Cargando....</span>
    
    return (
        <div className="cripto-page-container">
            {
                peticion && 
                <CriptoInfo 
                name={ name }
                 rank={ rank }
                symbol={ symbol }
                priceUsd={ priceUsd } />
            }
            
            {
                history && <CriptoHistorial history={ history } />
            }
            
        </div>
        
    )
}
export default CriptoPage