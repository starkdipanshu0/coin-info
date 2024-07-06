import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import './Coin.css'
const Coin = () => {

    const params=useParams()
    const [coin , setCoin]=useState({})
    const url=`https://api.coingecko.com/api/v3/coins/${params.coinID}`

    useEffect(()=>{
        axios.get(url).then((res)=>{
            setCoin(res.data)
        }).catch(error =>{
            console.log(error)
        })
    },[])
    

    return ( 
        <div>
            <div className="coin-container">
                <div className="content">
                    <h1>{coin.name}</h1>
                </div>
                <div className="content">
                    <div className="rank">
                        <span className="rank-btn">Rank #{coin.market_cap_rank}</span>
                    </div>
                    <div className="info">
                        <div className="coin-heading">
                            {coin.image &&<img src={coin.image.small}/>}
                            <p>{coin.name}</p>
                            <p>{coin.symbol && coin.symbol.toUpperCase()}</p>
                        </div>
                        <div className="coin-price">
                            <h1>₹{coin.market_data && coin.market_data.current_price && coin.market_data.current_price.inr.toLocaleString()}</h1>
                        </div>
                    </div>
                </div>
                <div className="content">
                    <table>
                        <thead>
                        <tr>
                            <th>1hr</th>
                            <th>24hr</th>
                            <th>7d</th>
                            <th>14d</th>
                            <th>38d</th>
                            <th>1yr</th>
                        </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td className={coin.market_data && coin.market_data.price_change_percentage_1h_in_currency && coin.market_data.price_change_percentage_1h_in_currency.inr>0?"green":"red"}>
                                {coin.market_data && coin.market_data.price_change_percentage_1h_in_currency && coin.market_data.price_change_percentage_1h_in_currency.inr.toFixed(2)}%</td>
                            <td className={coin.market_data && coin.market_data.price_change_percentage_24h_in_currency && coin.market_data.price_change_percentage_24h_in_currency.inr>0?"green":"red"}>
                                {coin.market_data && coin.market_data.price_change_percentage_24h_in_currency && coin.market_data.price_change_percentage_24h_in_currency.inr.toFixed(2)}%</td>
                            <td className={coin.market_data && coin.market_data.price_change_percentage_7d_in_currency && coin.market_data.price_change_percentage_7d_in_currency.inr>0?"green":"red"}>
                                {coin.market_data && coin.market_data.price_change_percentage_7d_in_currency && coin.market_data.price_change_percentage_7d_in_currency.inr.toFixed(2)}%</td>
                            <td className={coin.market_data && coin.market_data.price_change_percentage_14d_in_currency && coin.market_data.price_change_percentage_14d_in_currency.inr>0?"green":"red"}>
                                {coin.market_data && coin.market_data.price_change_percentage_14d_in_currency && coin.market_data.price_change_percentage_14d_in_currency.inr.toFixed(2)}%</td>
                            <td className={coin.market_data && coin.market_data.price_change_percentage_30d_in_currency && coin.market_data.price_change_percentage_30d_in_currency.inr>0?"green":"red"}>
                                {coin.market_data && coin.market_data.price_change_percentage_30d_in_currency && coin.market_data.price_change_percentage_30d_in_currency.inr.toFixed(2)}%</td>
                            <td className={coin.market_data && coin.market_data.price_change_percentage_1y_in_currency && coin.market_data.price_change_percentage_1y_in_currency.inr>0?"green":"red"}>
                                {coin.market_data && coin.market_data.price_change_percentage_1y_in_currency && coin.market_data.price_change_percentage_1y_in_currency.inr.toFixed(2)}%</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="content">
                    <div className="stats">
                        <div className="left">
                            <div className="row">
                                <h4>24 Hour Low</h4>
                                <p >₹{coin.market_data && coin.market_data.low_24h && coin.market_data.low_24h.inr.toLocaleString()}</p>
                            </div>    
                            <div className="row">
                                <h4>24 Hour High</h4>
                                <p>₹{coin.market_data &&  coin.market_data.high_24h && coin.market_data.high_24h.inr.toLocaleString()}</p>
                            </div>    
                        </div>
                        <div className="right">
                            <div className="row">
                                <h4>Market Cap</h4>
                                <p>₹{coin.market_data &&  coin.market_data.market_cap.inr.toLocaleString()}</p>
                            </div>    
                            <div className="row">
                                <h4>Circulating Supply</h4>
                                <p>{coin.market_data && coin.market_data.circulating_supply}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="content">
                    <div className="about">
                        <h3>About</h3>
                        <p>{coin.description && coin.description.en}</p>
                    </div>
                </div>

            </div>
        </div>
        
     );
}
 
export default Coin;