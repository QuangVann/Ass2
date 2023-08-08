import { createBrowserRouter } from "react-router-dom";
import HomePage from "./components/HomePage/HomePage";
import LayoutAdmin from "./components/Admin/AdminPage";
import { Navigate } from "react-router-dom";
import Dashboard from "./pages/admin/dashboard";
import AdminProduct from "./pages/admin/product";
import AdminProductAdd from "./pages/admin/product/add";
import AdminProductEdit from "./pages/admin/product/edit";
import Footer from './pages/footer'
export const router = createBrowserRouter([
    { path: "/", element: <HomePage />,
 },
    {
        path: "/admin",
        element: <LayoutAdmin />,
        children: [
            { index: true, element: <Navigate to="dashboard" /> },
            {
                path: "dashboard",
                element: <Dashboard />,
            },
            {
                path: "product",
                element: <AdminProduct />,
            },
            {
                path: "product/add",
                element: <AdminProductAdd />,
            },
            {
                path: "product/:idProduct/edit",
                element: <AdminProductEdit />,
            },
        ],
    },
]);
