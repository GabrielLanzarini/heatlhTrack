import React from "react"
import ReactDOM from "react-dom/client"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import "./style/index.css"
import 'animate.css'
import DoctorLogin from "./pages/DoctorLogin"
import DoctorRegister from "./pages/DoctorRegister"
import PacientLogin from "./pages/PacientLogin"
import PacientRegister from "./pages/PacientRegister"
import Teste from "./pages/Teste"

const router = createBrowserRouter([
    {
        element: <DoctorLogin />,
        path: "doctor/login",
    },
    {
        element: <DoctorRegister />,
        path: "doctor/register",
    },
    {
        element: <PacientLogin />,
        path: "pacient/login",
    },
    {
        element: <PacientRegister />,
        path: "pacient/register",
    },
    {
        element: <Teste />,
        path: "",
    },
])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)


