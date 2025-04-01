// import {useEffect, useState} from "react";
import EventsList from "../components/EventsList";
import {useLoaderData} from "react-router";

// function EventsPage() {
//
// 	const [fetchedEvents, setFetchedEvents] = useState();
// 	const [loading, setLoading] = useState(false);
// 	const [error, setError] = useState();
//
// 	useEffect(() => {
// 		async function fetchEvents() {
// 			setLoading(true);
// 			const response = await fetch('http://localhost:8080/events');
//
// 			if(!response.ok){
// 				setError('Fetching data failed!');
// 				setLoading(false);
// 				return;
// 			}
//
// 			const resData = await response.json();
// 			setFetchedEvents(resData.events);
// 			setLoading(false);
// 		};
//
// 		fetchEvents();
// 	}, []);
//
// 	return (
// 		<>
// 			<div style={{textAlign: "center"}}>
// 				{loading && <p>Loading....</p>}
// 				{error && <p>{error}</p>}
// 			</div>
// 			{!loading && fetchedEvents && <EventsList events={fetchedEvents} />}
// 		</>
// 	)
// }


function EventsPage() {
	const data = useLoaderData();
	const events = data.events;
	return <EventsList events={events} />;
}
export default EventsPage;

export  async function eventsPageLoader(){
	const response = await fetch('http://localhost:8080/events');
	
	if(!response.ok){
		//...
	}else{
		return response;
	}
}
