import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainPage from "./pages/MainPage.jsx";
import ListPage from "./pages/ListPage.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage />,
    },
    {
        path: "/:category",
        element: <ListPage />,
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
