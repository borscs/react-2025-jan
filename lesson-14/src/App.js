import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";
import Root from "./pages/Root";
import ErrorPage from "./pages/ErrorPage";
import ProductDetailPage from "./pages/ProductDetailPage";


const router = createBrowserRouter([
	{
		path: "/",
		element: <Root/>,
		errorElement: <ErrorPage/>,
		children: [
			{path: '/', element: <HomePage/>},
			{
				path: '/products',
				element: <ProductPage/>,
				// children: [
				// 	{path: '/:productId', element: <ProductDetailPage />}
				// ]
			},
			{path: '/products/:productId', element: <ProductDetailPage />},
		]
	}
	
])


// const routerDefinitions = createRoutesFromElements(
// 	<Route>
// 		<Route path="/" element={<HomePage/>}/>
// 		<Route path='/products' element={<ProductPage/>} />
// 	</Route>
// )
//
// const router = createBrowserRouter(routerDefinitions);

function App() {
	return <RouterProvider router={router}/>;
}


export default App;
