import React from 'react'
import ReactDOM from 'react-dom/client'
import {App} from './App.jsx'
import './index.css'
import {AuthProvider} from "./AuthContext.jsx";
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

const rootElement = document.getElementById('root')
if (!rootElement) throw new Error("Failed to find the root element")

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        errorElement: <div>404 Not found!</div>,
    },
    {
        path: "/about-us",
        element: <div>About us</div>
    }
]);

ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
        <AuthProvider>
            {/*<App />*/}
            <RouterProvider router={router}/>
        </AuthProvider>
    </React.StrictMode>,
)