import axios from 'axios';
import {useState   , useEffect} from "react";
import Coins from './components/Coins';
import Navbar from './components/Navbar';
import {Routes , Route} from 'react-router-dom'
import Coin from './routes/Coin';


function App() {

  const [coins  , setCoins] =useState([])
  const [search , setSearch]=useState('')

    const changeHandler=event=>{
        setSearch(event.target.value)
    }

  const url="https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false"

  useEffect(()=>{
    axios.get(url).then((response)=>{
      setCoins(response.data)
      

    }).catch((error)=>{
      console.log(error)
    })
  } ,[])
  

  

  return (

   <>
   <Navbar changeHandler={changeHandler}/>
   
   <Routes >
    <Route path='/' element={<Coins search={search} coins={coins}/>}/>
    <Route path='/coin' element={<Coin/>}>
      <Route path=':coinID' element={<Coin/>}/>

    </Route>
   </Routes>
   
   </>
  );
}

export default App;
