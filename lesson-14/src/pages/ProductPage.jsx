import {Link} from "react-router";

const PRODUCTS = [
	{id: 'p1', title: 'Product 1'},
	{id: 'p2', title: 'Product 2'},
	{id: 'p3', title: 'Product 3'},
];


function ProductPage() {
	return (
		<>
			<h1>Products</h1>
			<ul>
				{PRODUCTS.map((product, index) => (
					<li key={index}>
						<Link to={product.id}>{product.title}</Link>
					</li>
				))}
			</ul>
		</>
	)
};

export default ProductPage;
