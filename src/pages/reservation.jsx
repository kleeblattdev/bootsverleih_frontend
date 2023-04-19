import { useState, useEffect } from "react";

import './ReservationStyle.css'
import axios from "axios";
const URL = "http://localhost:3000/api/v1/";

function Reservation() {
	const URL = "http://localhost:3000/api/v1/";

	const [data, setData] = useState([]);

	const [filtered, setFiltered] = useState({});

    const [reservation, setReservation] = useState([]);

    const handelDelete = (boatId)=> {
        console.log(boatId);
        axios.delete(`${URL}reservation` ,{ data :{id: boatId}})
    }

    const handelDeleteBoate = (boatId)=> {
        console.log(boatId);
        axios.delete(`${URL}boats`, { data :{id: boatId}})
    }

	const handelreservationSingle = (boatId) => {
		console.log(boatId);
		const filteredItem = data.find((item) => boatId === item._id);

        console.log(filteredItem);
		setFiltered(filteredItem);

        axios.post(`${URL}reservation`, filteredItem)
              .then((response) => {
                console.log(response.data);
              })
              .catch((error) => {
                console.log(error);
              });
          
	};
	useEffect(() => {
		axios
			.get(`${URL}boats`)
			.then((response) => {
				setData(response.data);
			})
			.catch((error) => {
				console.log(error);
			});

       axios.get(`${URL}reservation`)
        .then((response) => {
            setReservation(response.data);
        })
        .catch((error) => {
            console.log(error);
        })
	}, [reservation]);

	

	return (
		<div className="reservation">

            <div className="reserviert">
                <h1>reserviert</h1>
                <div>
                {reservation && reservation.map((reservation,i) => <ul key={i}>
                <li>boot nummer : {reservation.bootnr}</li>
                <button onClick={()=>handelDelete(reservation._id)}>🗑️</button>
                </ul>)}
                </div>
            </div>
            <div className="reservieren">
                <h1>reservieren</h1>
                <div>
                {data &&
				data.map((boate) => {
    
					return (
						<ul key={boate._id}>
							<li>boot nummer : {boate.bootnr}</li>
							<li>baujahr : {boate.baujahr}</li>
							<li>bootart : {boate.bootart}</li>
							<li>material : {boate.material}</li>
							<li>seriennummer : {boate.seriennummer}</li>
			
                            <p >
                            {reservation.find((item) => item.bootnr === boate.bootnr) ? <li className="schonReserviert">reserviert</li> : <button className="reser"
                            onClick={() => {
									handelreservationSingle(boate._id);
								}}>reservieren</button>
                                }
                            </p>
                            <button className="deleteButton" onClick={()=>handelDeleteBoate(boate._id)}>
                                DEL
                            </button>
						</ul>
					);
			
                })}
                  </div>
            </div>
			
		</div>
	);
}

export default Reservation;
