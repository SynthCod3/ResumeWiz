import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from "./modules/Home";
import SignIn from "./modules/SignIn";
import SignUp from "./modules/SignUp";

function App() {
    const router = createBrowserRouter([
        {
          path: "/",
          element: <Home />
        },  
        {
            path: "/signIn",
            element: <SignIn />
          },  
          {
              path: "/signUp",
              element: <SignUp />
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