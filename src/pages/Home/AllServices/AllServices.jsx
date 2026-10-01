import 'react';
import { use } from 'react';
import ServiceCard from '../../../Components/ServiceCard/ServiceCard';

const AllServices = ({servicesPromise}) => { 
    const services= use(servicesPromise)
    return (
        <div className='mt-18'>
            <div  className='text-center'>
                <h2 className="poppins-bold text-[36px]">
                Explore Diverse Learning Paths at Bytespace
                </h2>
                <p className='text-[18px] text-[#82868E] pt-4'>At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various <br /> fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories.</p>
            </div> 
            <div className='mx-auto justify-items-center w-fit grid grid-cols-2 gap-10 lg:grid-cols-6 pt-17 pb-30'>
                {
                    services.map((service)=>(
                        <ServiceCard key={service.id} service={service}></ServiceCard>
                    ))
                }
            </div>
        </div>
    );
};

export default AllServices;