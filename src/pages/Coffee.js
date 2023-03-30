import { useLoaderData, NavLink } from 'react-router-dom';

export default function Coffee() {
    const coffee = useLoaderData();

    return (
        <div className='coffee'>
            <div className='flex'>
                {coffee.map((item, index) => (
                    <div className='item'>
                        <img
                            src={item.image}
                            alt={`coffee-${index}`}
                            width={250}
                            height={250}
                        />
                        <h4>{item.title}</h4>
                        <p className='truncate'>{item.description}</p>
                        <NavLink to={`${item.id}`}>See Details</NavLink>
                    </div>
                ))}
            </div>
        </div>
    );
}

// data loader
export const coffeeLoader = async () => {
    const res = await fetch('https://api.sampleapis.com/coffee/iced');
    return res.json();
};
