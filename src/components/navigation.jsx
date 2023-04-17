import { Link } from "react-router-dom";
import './navigationStyle.css'
function Navigation  ()  {
    return ( 
        <nav className="nav">
        <ul>
         
          <li>
            <Link to="/reservation">Reservierung übersicht</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/boots">Boots übersicht</Link>
          </li>
        </ul>
      </nav>
     );
}
 
export default Navigation;