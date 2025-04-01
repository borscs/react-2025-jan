import EventsNavigation from "../components/EventsNavigation";
import {Outlet} from "react-router";

function EventRooutPage() {
	return (
		<>
			<EventsNavigation/>
			<Outlet/>
		</>
	)
}

export default EventRooutPage;
