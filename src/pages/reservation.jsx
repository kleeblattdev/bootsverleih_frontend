import { useState, useEffect } from "react";
import axios from "axios";
const URL = "http://localhost:3000/api/v1/";

function Reservation() {
	const URL = "http://localhost:3000/api/v1/";

	const [data, setData] = useState([]);

	const [filtered, setFiltered] = useState({});

	const handelreservationSingle = (boatId) => {
		console.log(boatId);
		const filteredItem = data.find((item) => boatId === item._id);

		console.log(filteredItem);

		if (Object.keys(filtered).length > 0) {
			setFiltered(filteredItem);
		}
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
		<div className="reservation">
			{data &&
				data.map((boate) => {
					return (
						<ul key={boate._id}>
							<li>boot nummer{boate.bootnr}</li>
							<li>baujahr:{boate.baujahr}</li>
							<li>bootart:{boate.bootart}</li>
							<li>material:{boate.material}</li>
							<li>seriennummer:{boate.seriennummer}</li>
							<li>status:</li>
							<button
								onClick={() => {
									handelreservationSingle(boate._id);
								}}
							>
								reservieren
							</button>
						</ul>
					);
				})}
		</div>
	);
}

export default Reservation;
