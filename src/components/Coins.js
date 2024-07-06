import CoinItem from "./CoinItem";
import './Coins.css'
import { Link } from "react-router-dom";
import Coin from "../routes/Coin";


const Coins = (props) => {
    return (  
        <div className='container'>
            <div>
                <div className="heading gr">
                    <p>#</p>
                    <p className="coin-name gr">Coin</p>
                    <p>Price</p>
                    <p>24h <span className="green">↑</span> <span className="red">↓</span> </p>
                    <p className="hide-mobile gr">Volume</p>
                    <p className='hide-mobile gr'>Mkt Cap</p>
                </div>
                {props.coins.filter(val =>{
                    if(props.search==='')
                    return val
                    else if(val.name.toLowerCase().includes(props.search.toLowerCase()))
                    return val
                }).map(coins =>{
                    return(
                        <Link to={`/coin/${coins.id}`} element={<Coin />} key={coins.id}>
                        <CoinItem  coins={coins} key={coins.id}/>
                        </Link>
                        )
                    })}
            </div>
        </div>
     );
}
 
export default Coins;