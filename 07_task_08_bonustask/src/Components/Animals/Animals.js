import React from 'react';
import AnimalCard from './AnimalCard'
import NewAnimal from './NewAnimal'
import axios from 'axios'
import { useState } from 'react';

const URL = "http://localhost:3001/animals";

const Animals = () => {

  const [animal, setAnimal] = useState({
    name:"",
    aclass:"",
    img:"",
    desc:"",
    link:""
  })

  const submitAnimal = () => {
    axios.post(URL, animal);
  }

  const changeHandler = (event) => {
    setAnimal({
      ...animal, 
      [event.target.name]: event.target.value,
    });
  }


  return (
    <div>
      <AnimalCard 
      submit={submitAnimal}
      onChange={changeHandler}
      name={animal.name}
      aclass={animal.aclass}
      img={animal.img}
      desc={animal.desc}
      link={animal.link}
      />
      <NewAnimal onChange={changeHandler} submit={submitAnimal}/>      
    </div>
  );
};

export default Animals;