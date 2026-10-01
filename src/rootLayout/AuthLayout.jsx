import React from 'react';
import { Link, Outlet } from 'react-router';
import Logo from '../Components/Logo/Logo';
import Card from '../Components/Card/Card'; // <-- tomar Card file er path onujayi thik koro
import frame1 from '../assets/Frame.png';
import frame2 from '../assets/Frame (1).png';

// JSON data
const courses = [
  {
    id: 1,
    title: 'Learn Figma from Basic',
    instructor: 'purepearl studio',
    rating: 4.5,
    level: 'Beginner',
    price: 25,
    priceType: 'lifetime',
    image: frame1,
  },
  {
    id: 2,
    title: 'Build Digital Asset',
    instructor: 'purepearl studio',
    rating: 4.5,
    level: 'Beginner',
    price: 25,
    priceType: 'lifetime',
    image: frame2,
  },
];

const AuthLayout = () => {
  return (
    <div className="min-h-screen w-full relative overflow-hidden bg-grid-blue">
      {/* logo */}
      <div className="ml-4 pt-8 lg:ml-30.5">
      <Link to="/"><Logo /></Link>  
      </div>

      <div className="flex flex-col lg:flex-row items-center  gap-10 px-4 lg:px-[122px] py-10 lg:py-16">
        {/* left side */}
        <div className="w-full lg:w-1/2 text-white">
          <h3 className="text-lg font-semibold">Sign up and come in</h3>
          <p className="mt-3 max-w-md text-sm leading-6 text-white/80">
            The registration process is straightforward, uncomplicated, and
            efficient, allowing you to sign up quickly, easily, and at no cost
          </p>

          {/* card gulo ekta er upor arekta */}
          <div className="relative mt-10 h-130 max-w-125">
            <div className="absolute left-0 top-0 w-93.25">
              <Card course={courses[0]} />
            </div>
            <div className="absolute left-27.5 top-30 w-93.25">
              <Card course={courses[1]} />
            </div>
          </div>
        </div>

        {/*  form */}
        
<div className="w-full lg:w-144.75 lg:min-h-196 shrink-0 rounded-3xl bg-white p-8 lg:p-16 shadow-xl">
  <Outlet />
</div>
      </div>
    </div>
  );
};

export default AuthLayout;