import 'react';

import Lorem from '../Lorem/Lorem';
import Skills from '../Skills/Skills';
import Cards from '../../../Components/Cards/Cards';
import AllServices from '../AllServices/AllServices';

import Cta from '../CTA/Cta';
import Testimonial from '../Testimonial/Testimonial';
import Hero from '../Hero/Hero';
import Growth from '../Growth/Growth';

const coursesPromise = fetch('/Courses.json').then(res => res.json());
const servicesPromise = fetch('/service.json').then(res => res.json());

const Home = () => {
    return (
        <div>
            <Hero></Hero>
            <Lorem></Lorem>
            
            <Skills></Skills>
            <Cards coursesPromise={coursesPromise}></Cards>
          
            <AllServices servicesPromise={servicesPromise}></AllServices>
             <Growth></Growth>
             <Cta></Cta>
             <Testimonial></Testimonial>
        </div>
    );
};

export default Home;