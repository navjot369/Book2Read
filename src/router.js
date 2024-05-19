import { createBrowserRouter } from "react-router-dom";
import App from './App.js';
import Auth from "./auth/auth.js";
  
const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
        
        ]
    },
    {
        path: "/auth",
        element: <Auth />
    }

])

export default router;