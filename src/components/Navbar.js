import {FaCoins} from 'react-icons/fa'
import './Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = (props) => {

    




    return ( 
        <div className='con'>
       <Link to='/'>
            <div className="navbar">
                <FaCoins className='icons'/>
                <h1> <span className="red"> Coin </span><span className='gr'>Geko</span></h1>
            </div>
        </Link>
        <div>
            <form >
                <input type="text" className='coin-input' onChange={props.changeHandler} placeholder='Search...'/>
            </form>
        </div>
        </div>
     );
}
 
export default Navbar;