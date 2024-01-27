import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from "./modules/Home";

function App() {
    const router = createBrowserRouter([
        {
          path: "/",
          element: <Home />
        }   
    ]);
    return (
        <div className="App">
            <RouterProvider router={router} />
            <Toaster
                position="bottom-center"
                reverseOrder={false}
                toastOptions={{
                    success: {
                        style: {
                            background: "var(--border)",
                            color: "var(--foreground)",
                        },
                    },
					error: {
						style: {
							background: "var(--border)",
							color: "var(--foreground)",
						},
					}
                }}
            />
        </div>
    );
}

export default App;