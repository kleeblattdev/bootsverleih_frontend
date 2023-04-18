import {useState , useEffect} from 'react';
import axios from 'axios';
const URL = 'http://localhost:3000/api/v1/';


function Reservation() {

    const URL = 'http://localhost:3000/api/v1/';
   
    const [data , setData] = useState([]);

    const [selectedBoatId , setSelectedBoatId] = useState([]);

    const [filtered , setFiltered] = useState({});

    const handelreservationSingle = ()=> {
        const filteredItem = data.find((item) => selectedBoatId === item._id);

        setFiltered(filteredItem);
        if (Object.keys(filtered).length > 0){
            console.log(true);
        }else {null}
  
    }
    useEffect(() => {
          axios.get(`${URL}boats`)
          .then((response) => {
            setData(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      }, []);

      /*useEffect(() => {
        axios.get(`${URL}reservation`)
        .then((response) => {
            setAllReservation(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }, []);*/


    return (
        <div className='reservation'>
            
        {data && data.map((boate)=> {
            return(
                <ul key={boate._id
                }>
                    <li>boot nummer{boate.bootnr}</li>
                    <li>baujahr:{boate.baujahr}</li>
                    <li>bootart:{boate.bootart}</li>
                    <li>material:{boate.material}</li>
                    <li>seriennummer:{boate.seriennummer}</li>
                    <li>status:</li>
                    <button onClick={() => {setSelectedBoatId(boate._id);
                    handelreservationSingle()}}>reservieren</button>
                </ul>
            )
            
        })}
        </div>
    );
  }
  
  export default Reservation;