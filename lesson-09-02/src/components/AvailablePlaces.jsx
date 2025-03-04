import Places from './Places.jsx';
import {useEffect, useState} from "react";

export default function AvailablePlaces({ onSelectPlace }) {
  const [places, setPlaces] = useState([]);
  useEffect(() => {
    fetch('http://localhost:3000/places').then((response) => {
      return response.json();
    }).then((resData) => {
      setPlaces(resData.places);
    })
  }, []);
  
  return (
    <Places
      title="Available Places"
      places={places}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
