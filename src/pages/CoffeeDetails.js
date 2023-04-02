import { useLoaderData, useParams } from 'react-router';
import { useState } from 'react';
import { Navigate, Await } from 'react-router-dom';

function CoffeeDetails() {
    const params = useParams();
    const coffeeDetails = useLoaderData();
    const [isAuthenticated, setIsAuthenticated] = useState(true);

    if (!isAuthenticated) {
        return <Navigate to='/' replace={true} />;
    }

    return (
        <div>
            <Await
                resolve={coffeeDetails}
                children={
                    <>
                        <h4>{coffeeDetails.title}</h4>
                        <p>{coffeeDetails.description}</p>
                        <button onClick={() => setIsAuthenticated(false)}>
                            Logout
                        </button>
                    </>
                }
                errorElement={<div>Could not load coffee details</div>}
            />
        </div>
    );
}

export default CoffeeDetails;

export const coffeeDetailsLoader = async ({ params }) => {
    const { id } = params;
    console.log(id);
    const res = await fetch('https://api.sampleapis.com/coffee/iced/' + id);
    return res.json();
};
