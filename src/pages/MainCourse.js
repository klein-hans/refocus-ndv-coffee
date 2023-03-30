import { useLoaderData } from 'react-router-dom';

export default function MainCourse() {
    const mainCourse = useLoaderData();
    console.log('mainCourse');

    const fiteredMainCourse = mainCourse.filter(
        (item) => item.description !== '' && item.course === 'Main Course'
    );
    const slicedMainCourse = fiteredMainCourse.slice(0, 6);
    console.log(slicedMainCourse);
    return (
        <div className='mainCourse'>
            <div className='flex'>
                {slicedMainCourse.map((item, index) => (
                    <div className='item' key={index}>
                        <img
                            src={item.photoUrl}
                            alt={`main-course-${index}`}
                            width={250}
                            height={250}
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
export const mainCourseLoader = async () => {
    const res = await fetch('https://api.sampleapis.com/recipes/recipes');
    return res.json();
};
