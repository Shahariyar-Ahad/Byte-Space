import { use } from 'react';
import Card from '../Card/Card';

const Cards = ({ coursesPromise }) => {
    const courses = use(coursesPromise);

    return (
    <div className="mx-auto grid w-fit grid-cols-1 justify-items-center gap-10 md:grid-cols-2 lg:grid-cols-3">
    {courses.map((course) => (
        <Card key={course.id} course={course} />
    ))}
</div>
    );
};

export default Cards;