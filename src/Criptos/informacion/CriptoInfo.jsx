import parseFloatNumber from "../../helpers/floatNumber";

const CriptoInfo = ( { name, rank, symbol, priceUsd} ) => {

    return (
        <div className="info">
            <ul>
                <li><span className="label">Nombre: </span>{name}</li>
                <li><span className="label">Ranking: </span>{rank}</li>
                <li><span className="label">Simbolo: </span>{symbol}</li>
                <li><span className="label">Precio: $ </span>{ parseFloatNumber( priceUsd, 3 ) }</li>
            </ul>
        </div>
    )
}

export default CriptoInfo;