import React from "react"
import ReactDOM from "react-dom/client"
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import "./style/index.css"
import "animate.css"
import DoctorRegister from "./pages/DoctorRegister/DoctorRegister"
import DoctorLogin from "./pages/DoctorLogin/DoctorLogin"
import DoctorConfig from "./pages/DoctorConfig/DoctorConfig"
import PacientLogin from "./pages/PacientLogin"
import PacientRegister from "./pages/PacientRegister"
import PacientConfig from "./pages/PacientConfig"

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
        element: <DoctorConfig />,
        path: "doctor/config",
    },
    {
        element: <PacientConfig />,
        path: "pacient/config",
    },
])

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
)
