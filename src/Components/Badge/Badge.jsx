import { useState } from 'react';

const categories = [
    'Featured',
    'Music',
    'Drawing & Painting',
    'Marketing',
    'Animation',
    'Social Media',
    'UI/UX Design',
    'Creative Marketing',
    'Digital Illustration',
    'Film & Video',
    'Crafts',
    'Freelance & Entrepreneurship',
    'Graphic Design',
    'Photography',
    'Productivity',
    'Web Development',
    'Data Science',
    'Cooking',
];

const Badge = () => {
    const [active, setActive] = useState('Featured');

    return (
        <div className="bg-white px-4 py-6">
            <div className="mx-auto flex max-w-[1050px] flex-wrap justify-center gap-x-3 gap-y-4">
                {categories.map((item) => (
                    <button
                        key={item}
                     onClick={()=> setActive(item)}
                        className={`rounded-full px-5 py-2.5 text-sm font-medium text-black transition-colors ${
                            active === item
                                ? 'bg-[#D4F82A]'
                                : 'bg-[#F5F5F5] hover:bg-gray-200'
                        }`}
                    >
                        {item}
                    </button>
                ))}

                <button className="px-2 py-2.5 text-sm font-medium text-blue-600">
                    + More
                </button>
            </div>
        </div>
    );
};

export default Badge;