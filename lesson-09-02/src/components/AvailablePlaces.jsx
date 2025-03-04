import Places from './Places.jsx';
import {useEffect, useState} from "react";
import Error from "./Error.jsx";
import {fetchAvailablePlaces} from "../http.js";
import {sortPlacesByDistance} from "../loc.js";
import {useFetch} from "../hooks/useFetch.jsx";


async function fetchSortedPlaces() {
	const placesData = await fetchAvailablePlaces();
	
	return new Promise(resolve => {
		navigator.geolocation.getCurrentPosition((position) => {
			const sortedPlaces = sortPlacesByDistance(
				placesData,
				position.coords.latitude,
				position.coords.longitude
			);
			resolve(sortedPlaces);
		});
	});
}

export default function AvailablePlaces({onSelectPlace}) {
	const {
		isFetching,
		error,
		fetchedData: availablePlaces,
	} = useFetch(fetchSortedPlaces, [])
	
	
	if (error) {
		return <Error title="Something went wrong while fetching places." message={error.message}/>
	}
	
	return (
		<Places
			title="Available Places"
			places={availablePlaces}
			isLoading={isFetching}
			fallbackText="No places available."
			onSelectPlace={onSelectPlace}
		/>
	);
}
