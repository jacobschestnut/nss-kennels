import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
//import the components we will need
import { AnimalCard } from './AnimalCard';
import { getAllAnimals, getAnimalById, deleteAnimal } from '../../modules/AnimalManager';


export const AnimalList = () => {
  
  const navigate = useNavigate();
  // The initial state is an empty array
  const [animals, setAnimals] = useState([]);

  const handleDeleteAnimal = id => {
    deleteAnimal(id)
    .then(() => getAllAnimals().then(setAnimals));
  };

  const getAnimals = () => {
    // After the data comes back from the API, we
    //  use the setAnimals function to update state
    return getAllAnimals().then(animalsFromAPI => {
      setAnimals(animalsFromAPI)
    });
  };

  <>
  <section className="section-content">
  <button type="button"
      className="btn"
      onClick={() => {navigate("/animals/create")}}>
      Admit Animal
  </button>
  </section>
  </>

  // got the animals from the API on the component's first render
  useEffect(() => {
    getAnimals();
  }, []);

  // Finally we use .map() to "loop over" the animals array to show a list of animal cards
  return (
    <div className="container-cards">
    <section className="section-content">
      <button type="button"
          className="btn"
          onClick={() => {navigate("/animals/create")}}>
          Admit Animal
      </button>
    </section>
      {animals.map(animal => <AnimalCard key={animal.id} animal={animal} handleDeleteAnimal={handleDeleteAnimal} />)}
    </div>
  );
};