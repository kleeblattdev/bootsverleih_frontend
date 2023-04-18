import { Link } from "react-router-dom";
import './navigationStyle.css'

import HomeIcon from '../../public/home.png'

import ReservationIcon from '../../public/booking.png'

import BoateIcon from '../../public/yacht.png'
function Navigation  ()  {
    return ( 
        <nav className="nav">
        <ul>
         
          <li>
            <Link to="/reservation"><img src={ReservationIcon} /></Link>
          </li>
          <li>
            <Link to="/"><img src={HomeIcon} /></Link>
          </li>
          <li>
            <Link to="/boots"><img src={BoateIcon} /></Link>
          </li>
        </ul>
      </nav>
     );
}
 
export default Navigation;