import {Link, useNavigate} from "react-router";

function HomePage() {
	const navigate = useNavigate();
	
	function navigationHandler(){
		navigate('/products');
	}
	
	return (
		<>
			<h1>Home Page</h1>
			<p>
			 Go to <Link to="/products">the list of products</Link>.
			</p>
			<p>
				<button onClick={navigationHandler}>Run Function</button>
			</p>
		</>
	)
};

export default HomePage;
