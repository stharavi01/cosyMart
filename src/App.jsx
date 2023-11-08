import { RouterProvider, createBrowserRouter } from "react-router-dom";

import {
	About,
	Cart,
	Checkout,
	Error,
	HomeLayout,
	Landing,
	Login,
	Orders,
	Products,
	Register,
	SingleProduct,
} from "./pages";

import { ErrorElement } from "./components";

import { loader as landingLoader } from "./pages/Landing";
import { loader as singleProductLoader } from "./pages/SingleProduct";
import { loader as productsLoader } from "./pages/Products";

import { action as registerAction } from "./pages/Register";

const router = createBrowserRouter([
	{
		path: "/",
		element: <HomeLayout />,
		errorElement: <Error />,
		children: [
			{
				index: true,
				element: <Landing />,
				loader: landingLoader,
				errorElement: <ErrorElement />,
			},
			{
				path: "products",
				element: <Products />,
				errorElement: <ErrorElement />,
				loader: productsLoader,
			},
			{
				path: "products/:id",
				errorElement: <ErrorElement />,
				element: <SingleProduct />,
				loader: singleProductLoader,
			},
			{
				path: "cart",
				element: <Cart />,
			},
			{
				path: "about",
				element: <About />,
			},
			{
				path: "checkout",
				element: <Checkout />,
			},
			{
				path: "orders",
				element: <Orders />,
			},
		],
	},
	{ path: "/login", element: <Login />, errorElement: <Error /> },
	{
		path: "/register",
		element: <Register />,
		errorElement: <Error />,
		action: registerAction,
	},
]);

const App = () => {
	return <RouterProvider router={router} />;
};
export default App;
