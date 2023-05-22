import AddAuthor from "../pages/AddAuthor";
import AuthorDetail from "../pages/AuthorDetail";
import Authors from "../pages/Authors";
import Home from "../pages/Home";
import MainRoot from "../pages/MainRoot"
import NotFound from "../pages/NotFound";


export const ROUTES = [
    {
        path: '/',
        element: <MainRoot />,
        children: [
            {
                path: '',
                element: <Home />
            },
            {
                path: '/authors',
                element:<Authors/>
            },
            {
                path: '/author/:id',
                element: <AuthorDetail/>
            },
            {
                path: '/add-author',
                element: <AddAuthor/>
            },
            {
                path: '*',
                element: <NotFound />
            }
        ]
    }
]