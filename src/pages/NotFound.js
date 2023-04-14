import React from 'react';
import { NavLink } from 'react-router-dom';

function NotFound() {
    return (
        <div className='notFound'>
            <h2>NotFound</h2>
            <NavLink to='/'>Go Back to the Home Page</NavLink>
        </div>
    );
}

export default NotFound;
