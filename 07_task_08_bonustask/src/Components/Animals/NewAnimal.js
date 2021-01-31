import React, { useState, useEffect } from 'react';
import axios from 'axios'

const URL = "http://localhost:3001/animals"

const AnimalCard = ({onChange, submit, aclass}) => {

  const [animals, setAnimal] = useState([]);

  useEffect(() => {
    axios
    .get(URL)
    .then(res => {
      setAnimal(res.data);
    })
  }, []);

  const closeHandler = () => {
    window.location.reload();
  }

  return (
    <div>
      <form onSubmit={submit}>
        <div>
          <label htmlFor="name">Name (species)</label>
          <input
            type="text"
            name="name"
            id="name"
            required
          />
        </div>
        <div>
          <label htmlFor="aclass">Class</label>
          <select name="aclass" value={aclass} onChange={onChange}>
            <option value="" disabled selected>Select class</option>
            <option value="mammal">Mammal</option>
            <option value="bird">Bird</option>
            <option value="insect">Insect</option>
            <option value="fish">Fish</option>
          </select>
        </div>
        <div>
          <label htmlFor="img">Image url</label>
          <input
            type="text"
            name="img"
            id="img"
            required
          />
        </div>
        <div>
          <label htmlFor="desc">Description</label>
          <input
            type="text"
            name="desc"
            id="desc"
            required
          />
        </div>
        <div>
          <label htmlFor="link">Link to Wikipedia</label>
          <input
            type="text"
            name="link"
            id="link"
            required
          />
        </div>
        <input onClick= {submit} onClick={closeHandler} type="submit" value="Post new animal card" />    
      </form>   
    </div>
  );
};

export default AnimalCard;