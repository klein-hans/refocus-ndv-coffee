import { useLoaderData } from 'react-router-dom';

export default function Coffee() {
    const coffee = useLoaderData();
    console.log('coffee');
    console.log(coffee);

    return (
        <div className='coffee'>
            <div className='flex'>
                {coffee.map((item, index) => (
                    <div className='item'>
                        <img
                            src={item.image}
                            alt={`coffee-${index}`}
                            width={170}
                            height={170}
                        />
                        <h4>{item.title}</h4>
                        <p className='truncate'>{item.description}</p>
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
