import {useLoaderData, useParams, useRouteLoaderData} from "react-router";
import EventItem from "../components/EventItem";

function EventDetailPage() {
	const data = useRouteLoaderData('event-detail');
	
	return (
		<>
			<h1>EventDetailPage</h1>
			<EventItem event={data.event}/>
		</>
	);
}

export default EventDetailPage;


export async function eventDetail({request, params}) {
	const id = params.eventId;
	
	const response = await fetch('http://localhost:8080/events/' + id);
	
	if (!response.ok) {
		throw new Response(JSON.stringify({ message: 'Could not fetch event details.' }), {
			status: 500,
		});
	} else {
		return response;
	}
}
