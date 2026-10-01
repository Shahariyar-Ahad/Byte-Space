
import Badge from '../../../Components/Badge/Badge';


const Skills = () => { 
   
    return (
        <div className='bg-white mt-10.5'>
            {/* headline */}
           <h2 className="font-['Poppins'] text-[44px] font-semibold leading-[1.2] tracking-[-0.01em] text-center text-black">
    Discover your passion, <br /> Build your skills
</h2> 
{/* paragraph */} 
<p className="font-['Satoshi'] text-[18px] font-normal leading-[1.6] tracking-normal text-center">
    At Bytespace Courses, we bring you closer to life-changing knowledge. Explore a variety of courses across different <br /> fields, from technology to the arts, and make a difference in your career and life.
</p> 
<Badge></Badge> 

        </div>
    );
};

export default Skills;