import { useLoaderData } from 'react-router';
import { NavLink } from 'react-router-dom';

function Coffee() {
    const coffee = useLoaderData();

    return (
        <div className='coffee'>
            <div className='flex'>
                {coffee.map((item, index) => (
                    <div className='item' key={index}>
                        <img
                            src={item.image}
                            alt={`coffee-${item.id}`}
                            width={250}
                            height={250}
                        />
                        <h4>{item.title}</h4>
                        <p className='truncate'>{item.description}</p>
                        <NavLink to={item.id + ''}>See Details</NavLink>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Coffee;

export const coffeeLoader = async () => {
    const res = await fetch('https://api.sampleapis.com/coffee/iced');
    return res.json();
};
