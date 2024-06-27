import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App.jsx'
import './index.css'
import {AuthProvider} from "./AuthContext.jsx";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <div>404 Not found!</div>,
    },
    {
        path: "/about-us",
        element: <div>About us</div>
    }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <AuthProvider>
            {/*<App />*/}
            <RouterProvider router={router}/>
        </AuthProvider>
    </React.StrictMode>,
)