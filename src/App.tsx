import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from "./modules/Home";
import SignIn from "./modules/SignIn";
import SignUp from "./modules/SignUp";
import NotFound from "./modules/notFound";
import ResumeEditor from "./modules/editor";
import TemplateSelection from "./modules/template";

function App() {
	const router = createBrowserRouter([
		{
			path: "*",
			element: <NotFound />,
		},
		{
			path: "/404",
			element: <NotFound />,
		},
		{
			path: "/",
			element: <Home />,
		},
		{
			path: "/signin",
			element: <SignIn />,
		},
		{
			path: "/signup",
			element: <SignUp />,
		},
		{
			path: "/editor",
			element: <ResumeEditor />,
		},
		{
			path: "/template",
			element: <TemplateSelection />,
		},
	]);
	return (
		<div className="App">
			<RouterProvider router={router} />
			<Toaster position="bottom-center" reverseOrder={false} />
		</div>
	);
}

export default App;
