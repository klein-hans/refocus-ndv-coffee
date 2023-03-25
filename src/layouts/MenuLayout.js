import { NavLink, Outlet } from 'react-router-dom';

function MenuLayout() {
    return (
        <div className='menu-layout'>
            <h2>Menu</h2>
            <div className='flex'>
                <NavLink to='coffee'>Coffee</NavLink>
                <NavLink to='main-course'>Main Course</NavLink>
            </div>

            <Outlet />
        </div>
    );
}

export default MenuLayout;
