import { useParams } from 'react-router';
import { useState, Suspense } from 'react';
import { Navigate, Await, defer, useLoaderData } from 'react-router-dom';

function CoffeeDetails() {
    const params = useParams();
    const { data } = useLoaderData();
    const coffeeDetails = data._data;
    const [isAuthenticated, setIsAuthenticated] = useState(true);
    console.log(data);
    if (!isAuthenticated) {
        return <Navigate to='/' replace={true} />;
    }

    return (
        <div>
            <Suspense fallback={<p>Loading package location...</p>}>
                <Await
                    resolve={data}
                    errorElement={<div>Could not load coffee details</div>}
                >
                    {(data) => (
                        <>
                            <h4>{data.title}</h4>
                            <p>{data.description}</p>
                            <button onClick={() => setIsAuthenticated(false)}>
                                Logout
                            </button>
                        </>
                    )}
                </Await>
            </Suspense>
        </div>
    );
}

export default CoffeeDetails;

export const coffeeDetailsLoader = async ({ params }) => {
    const { id } = params;
    console.log(id);
    // const res = ;
    return defer({
        data: fetch('https://api.sampleapis.com/coffee/iced/' + id).then(
            (res) => res.json()
        ),
    });
};
