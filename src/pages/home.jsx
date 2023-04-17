import './homeStyle.css';
import axios from 'axios';
import {useState , useEffect} from 'react'


function Home() {

    const URL = 'http://localhost:3000/api/v1/';

    const [data, setData] = useState([]);

    useEffect(() => {
      axios
        .get(`${URL}boats`)
        .then((response) => {
          setData(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);

    return (
        <div className="home">
            <h1>Dashboard</h1>
            <div className="infoContainer">
                <div className="infoBox">
                    <p>Aktuelle Reservierungen</p>
                    <p>10</p>
                </div>
                <div className="infoBox">
                    <p>Verfügbare Boote</p>
                    <p>8</p>
                </div>
                <div className="infoBox">
                    <p>Gesamtanzahl Boote</p>
                    <p>{data.length}</p>
                </div>
            </div>
        </div>
    )
  }
  
  export default Home;