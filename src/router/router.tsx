import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import PageNotFound from "../pages/PageNotFound";
import Help from "../pages/Help";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/Home",
        element: <Home />
    },
    {
        path: "/Help",
        element: <Help />
    },
    {
        path: '*',
        element: <PageNotFound />
    },
]);

export default router;