// import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';

import {
    Route,
    createBrowserRouter,
    createRoutesFromElements,
    RouterProvider,
} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Coffee, { coffeeLoader } from './pages/Coffee';
import RootLayout from './layouts/RootLayout';
import MenuLayout from './layouts/MenuLayout';
import MainCourse from './pages/MainCourse';
import NotFound from './pages/NotFound';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<RootLayout />}>
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='menu' element={<MenuLayout />}>
                <Route
                    index
                    path='coffee'
                    element={<Coffee />}
                    loader={coffeeLoader}
                />
                <Route path='main-course' element={<MainCourse />} />{' '}
            </Route>
            <Route path='*' element={<NotFound />} />
        </Route>
    )
);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
