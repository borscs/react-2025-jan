import EventForm from "../components/EventForm";
import {redirect} from "react-router";

function NewEventPage() {
	return <EventForm/>
}

export default NewEventPage;


export async function newEventAction({request, params}) {
	const data = await request.formData();
	
	const eventData = {
		title: data.get('title'),
		image: data.get('image'),
		description: data.get('description'),
		date: data.get('date'),
	};
	console.log(eventData);
	const response = await fetch('http://localhost:8080/events', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(eventData),
	});
	
	if (!response.ok) {
		throw new Response(JSON.stringify({ message: 'Could not save event.' }), {
			status: 500,
		});
	}
	
	return redirect('/events');
}
