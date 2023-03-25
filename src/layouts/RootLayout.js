import { NavLink, Outlet } from 'react-router-dom';

function RootLayout() {
    return (
        <div className='root-layout'>
            <header>
                <nav>
                    <h1>Northdale Coffee</h1>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='menu/coffee'>Menu</NavLink>
                    <NavLink to='about'>About</NavLink>
                </nav>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    );
}

export default RootLayout;
