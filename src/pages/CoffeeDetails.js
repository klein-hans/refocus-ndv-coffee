import { useLoaderData } from 'react-router';
import { Suspense, useState } from 'react';
import { Navigate, Await } from 'react-router-dom';
import CoffeeDetailsSkeleton from '../components/CoffeeDetailsSkeleton';

function CoffeeDetails() {
    const coffeeDetails = useLoaderData();
    const [isAuthenticated, setIsAuthenticated] = useState(true);

    if (!isAuthenticated) {
        return <Navigate to='/' replace={true} />;
    }
    return (
        <div>
            <Suspense fallback={<CoffeeDetailsSkeleton />}>
                <Await
                    resolve={coffeeDetails}
                    errorElement={<div>Could not load coffee 😬</div>}
                    children={(resolvedCoffee) => (
                        <div>
                            <h4>{coffeeDetails.title}</h4>
                            <p>Description: {coffeeDetails.description}</p>
                            <p>Ingredients: {coffeeDetails.ingredients}</p>
                        </div>
                    )}
                />
            </Suspense>

            <button onClick={() => setIsAuthenticated(false)}>Logout</button>
        </div>
    );
}

export default CoffeeDetails;

// data loader
export const coffeeDetailsLoader = async ({ params }) => {
    const { id } = params;

    const res = await fetch('https://api.sampleapis.com/coffee/iced/' + id);
    console.log('params');
    console.log(params);
    return res.json();
};
