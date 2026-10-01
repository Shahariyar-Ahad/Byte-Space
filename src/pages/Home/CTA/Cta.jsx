import coneWhite from '../../../assets/Cone(1).png';
import torusYellow from '../../../assets/Cone.png';
import springWhite from '../../../assets/white Spring.png';
import spring from '../../../assets/spring.png'
import coneGreen from '../../../assets/Cone (2).png' 

const Cta = () => {
  return (
    <div className="bg-grid-blue relative min-h-130 w-full overflow-hidden text-white sm:min-h-125 lg:h-[488px] lg:min-h-0">
      
      {/* Shapes */}
      <img
        src={springWhite}
        alt=""
        className="absolute left-44.5 top-1.25 h-43.75 w-43.75 -rotate-180 hidden lg:block"
      />

     <img
  src={spring}
  alt=""
  className="absolute -left-17.5 -top-22.5 h-[280px] w-[280px] hidden lg:block -rotate-[135deg] object-contain "
/>

     <img
  src={coneWhite}
  alt=""
  className="absolute -left-[20px] top-[225px] h-[188px] w-[188px] hidden lg:block"
/>
     <img
  src={coneGreen}
  alt=""
  className="absolute right-[300px] top-[-0.41px] h-[188px] w-[188px] hidden lg:block"
/>
    <div className="absolute -right-[40px] top-[40px] h-[288px] w-[210px] 
    hidden lg:block -rotate-[12deg] rounded-[50px] bg-white " /> 

     <img
        src={spring}
        alt=""
        className=" absolute
    right-[100px]
    -bottom-[135px]
    w-[342px]
    hidden
    lg:block"
      />

     <img
  src={torusYellow}
  alt=""
  className="
    absolute
    left-[100px]
    bottom-0
    w-[342px]
    hidden
    lg:block
    
  "
/>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center">
        <h2 className="poppins-black pt-21.25 text-center sm:text-[40px] lg:text-[44px]">
          Unlock Your Potential as a <br />
          Creator with ByteSpace
        </h2>

        <p className="poppins-bold pt-10 text-center text-[18px] ">
          Experience the collaboration of numerous creators and an expanding
          selection of courses. Register now and become
          <br />
          a part of a community comprising over 10,000 local and international
          creators. Utilize our Course Editor, and showcase your
          <br />
          expertise by publishing your finest course on the ByteSpace Course
          Library.
        </p>

        <button className="btn mt-10 mb-21 h-11.5 w-43 rounded-3xl border-0 bg-[#D4FB20] px-6 py-3 text-black">
          Join as creator
        </button>
      </div>
    </div>
  );
};

export default Cta;