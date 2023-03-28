import ReactDOM from 'react-dom'
import Home from './pages/Home';
import Info from './pages/Info'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Math from './pages/Math';
import Economie from './pages/Economie';
import Electric from './pages/Electric';
import Mecanic from './pages/Mecanic';

const router = createBrowserRouter([
    {
        path: "/Home",
        element: <Home />,
    },
    {
        path: '/info',
        element: <Info/>,
    },
    {
        path: '/Math',
        element: <Math/>,
    },
    {
        path: '/Economie',
        element: <Economie/>,
    },
    {
        path: '/Electric',
        element: <Electric/>,
    },
    {
        path: '/Mecanic',
        element: <Mecanic/>,
    },

]);

ReactDOM.render(
    <RouterProvider router={router} />
    ,
    document.getElementById("root")
);