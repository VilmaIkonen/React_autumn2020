import React, { useState, useEffect } from 'react';
import axios from 'axios'

const URL = "http://localhost:3001/animals"

const AnimalCard = () => {

  const [animals, setAnimal] = useState([]);

  useEffect(() => {
    axios
    .get(URL)
    .then(res => {
      setAnimal(res.data);
    })
  }, []);

  return (
    <div>
        <ul> {animals.map(animal => 
        <li>
         { animal.name }
         { animal.aclass }
         { animal.img }
         { animal.desc }
         { animal.link }
        </li>
      )}
      </ul>      
    </div>
  );
};

export default AnimalCard;