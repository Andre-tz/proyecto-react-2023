import parseFloatNumber from "../../helpers/floatNumber";

const CriptoInfo = ( { name, rank, symbol, priceUsd, maxSupply, marketCapUsd, volumeUsd24Hr, changePercent24Hr, vwap24Hr} ) => {

    return (
        <div className="info">

            <div className="main-info">
                <span>Ranking: {rank}</span>
                <h1>{name}</h1>
                <span className="symbol">{symbol}</span>
            </div>

            <div className="details">
                <ul>

                    <li className="detail">
                        <span className="label">Precio: </span>
                        <span>{parseFloatNumber(priceUsd, 3)}</span>
                    </li>
                    <li className="detail">
                        <span className="label">MaxSupply: </span>
                        <span>{parseFloatNumber(maxSupply, 3)}</span>
                    </li>
                    <li className="detail">
                        <span className="label">Market Cap (USD): </span>
                        <span>{parseFloatNumber(marketCapUsd, 3)}</span>
                    </li>
                    <li className="detail">
                        <span className="label">Volumen (USD - 24 Hrs.): </span>
                        <span>{parseFloatNumber(volumeUsd24Hr, 3)}</span>
                    </li>
                    <li className="detail">
                        <span className="label">Variación (24 Hrs.): </span>
                        <span>{parseFloatNumber(changePercent24Hr, 3)}</span>
                    </li>
                    <li className="detail">
                        <span className="label">Vwap 24 Hrs.: </span>
                        <span>{parseFloatNumber(vwap24Hr, 3)}</span>
                    </li>

                </ul>
            </div>
            
    </div>
    )
}

export default CriptoInfo;