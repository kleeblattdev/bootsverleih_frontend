import axios from 'axios';
import {useState , useEffect} from 'react'

import './bootsStyle.css'

function Boots() {

    const URL = 'http://localhost:3000/api/v1/boats';

    const [formData, setFormData] = useState({
        bootnr: 0,
        baujahr: 0,
        seriennummer: "",
        material: "",
        bootart: "",
      });

    const handleChange = (event) => {
        setFormData({
          ...formData,
          [event.target.name]: event.target.value,
        });
      };

    const handleSubmit = (event) => {
        event.preventDefault();
          axios.post(`${URL}`, formData)
          .then((response) => {
            console.log(response.data);
          })
          .catch((error) => {
            console.log(error);
          });
      };
    
    return (
        <div className="boots">
            <form onSubmit={handleSubmit}>
    
        <input
        placeholder='Boot Number'
          type="number"
          id="bootnr"
          name="bootnr"
          onChange={handleChange}
        />
        <br />
        
        <input
        placeholder='Baujahr'
          type="number"
          id="baujahr"
          name="baujahr"
          onChange={handleChange}
        />
        <br />
     
        <input
        placeholder='Seriennummer'
          type="text"
          id="seriennummer"
          name="seriennummer"
          onChange={handleChange}
        />
        <br />
        
        <input
        placeholder='Bootart'
          type="text"
          id="bootart"
          name="bootart"
          onChange={handleChange}
        />
        <br />

        <label for='material'>
        material 
        </label>
        <select id="material" name="material" value={formData.material} onChange={handleChange}>
        <option value="GFK">GFK</option>
        <option value="Holz">Holz</option>
        <option value="Metall">Metall</option>
        <option value="Pappe">Pappe</option>
        <option value="Seelen">Seelen</option>
      </select>
        <button type="submit" onClick={handleSubmit}>Add Boot</button>
      </form>
        </div>
    );
  }
  
  export default Boots;