
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from './Home/Home.tsx';
import About from './Pages/About/About.tsx';
import Shoop from './Pages/Shop/Shoop.tsx';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path:'/shop',
                element:<Shoop/>
            }
        ]
    },
]);

createRoot(document.getElementById('root')!).render(

    <RouterProvider router={router} />
)
