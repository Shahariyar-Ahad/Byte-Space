import SearchBar from '../../../Components/SearchBar/SearchBar';
import springWhite from '../../../assets/white Spring.png';
import spring from '../../../assets/spring.png';
import coneGreen from '../../../assets/Cone (2).png';

import ellipse from '../../../assets/Ellipse 7.png';
import student from '../../../assets/ByteSpace.png';
import progressCard from '../../../assets/Auto Layout Vertical (1).png';
import studentsCard from '../../../assets/Auto Layout Vertical (2).png';
import courseCard from '../../../assets/Auto Layout Vertical.png';

const Hero = () => {
  return (
    <div className="bg-grid-blue relative w-full overflow-hidden">

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-5">

        <h2
          className="
            poppins-black pt-21.25 text-center text-[32px] leading-[1.1] text-white
            sm:text-[40px]
            lg:text-[72px]
          "
        >
          Get Access to Hundreds <br />
          Courses Available
        </h2>

        <p
          className="
            max-w-[700px] pt-8 text-center text-[16px] font-normal
            leading-[26px] text-[#E5E6E8]
            sm:text-[18px] sm:leading-[29px]
          "
        >
          Unlock your creativity, gain valuable knowledge, and grow your
          business with our wide range of courses.
        </p>

        <div className="mt-8 w-full max-w-[600px] sm:mt-10 lg:mt-12">
          <SearchBar />
        </div>
      </div>

      {/* Illustration area */}
      <div
        className="
          relative mx-auto mt-10 h-[380px] w-full
          sm:h-[460px]
          lg:mt-[-10px] lg:h-[540px] lg:max-w-[1440px]
        "
      >

        {/* Lime semicircle */}
        <img
          src={ellipse}
          alt=""
          className="
            absolute bottom-0 left-1/2
            w-[700px] -translate-x-1/2
            object-contain
            sm:w-[900px]
            lg:left-[145px] lg:w-[1100px] lg:translate-x-0
          "
        />

        {/* Student */}
        <img
          src={student}
          alt="Student learning online"
          className="
            absolute bottom-0 left-1/2
            w-[300px] -translate-x-1/2
            object-contain
            sm:w-[380px]
            lg:left-[431px] lg:w-auto lg:translate-x-0
          "
        />

        {/* Course Card */}
        <img
          src={courseCard}
          alt="UI/UX Design, 200 courses"
          className="
            absolute left-[5%] top-[160px]
            w-[130px]
            sm:left-[10%] sm:top-[190px] sm:w-[160px]
            lg:left-[350px] lg:top-[200px] lg:w-auto
          "
        />

        {/* Progress Card */}
        <img
          src={progressCard}
          alt="Learning progress 55%"
          className="
            absolute right-[5%] top-[160px]
            w-[130px]
            sm:right-[10%] sm:top-[190px] sm:w-[160px]
            lg:right-[350px] lg:top-[200px] lg:w-auto
          "
        />

        {/* Students Card */}
        <img
          src={studentsCard}
          alt="Happy students 4.5 rating"
          className="
            absolute left-[5%] top-[300px]
            w-[140px]
            sm:left-[10%] sm:top-[350px] sm:w-[170px]
            lg:left-[328px] lg:top-[400px] lg:w-auto
          "
        />

        {/* White Spring */}
        <img
          src={springWhite}
          alt=""
          className="
            absolute left-[5%] top-1
            hidden h-[150px] w-[150px] -rotate-180
            lg:left-44.5 lg:top-1.25 lg:block
            lg:h-43.75 lg:w-43.75
          "
        />

        {/* Green Cone */}
        <img
          src={coneGreen}
          alt=""
          className="
            absolute right-[5%] top-0
            hidden h-[120px] w-[120px]
            lg:right-[300px] lg:top-[-0.41px]
            lg:block lg:h-[188px] lg:w-[188px]
          "
        />
      </div>

      {/* Right Lime Shape */}
      <div
        className="
          absolute -right-[40px] top-[40px]
          hidden h-[288px] w-[210px]
          rotate-[-12deg] rounded-[50px]
          bg-[#D4FB20]
          lg:block
        "
      />

      {/* White Circle */}
      <div
        className="
          pointer-events-none absolute bottom-10 left-6
          hidden h-40 w-40 rounded-full
          border-[34px] border-white
          lg:block
        "
      />

      {/* Large Spring - Left */}
      <img
        src={spring}
        alt=""
        className="
          absolute -left-[100px] top-24
          z-20 hidden
          h-[250px] w-[350px]
          -rotate-[110deg]
          lg:-left-[200px] lg:block
          lg:h-[386.79px] lg:w-[500px]
        "
      />

      {/* White Spring - Right Bottom */}
      <img
        src={springWhite}
        alt=""
        className="
          absolute -bottom-3 right-[20px]
          z-20 hidden
          h-[220px] w-[220px]
          lg:right-[100px] lg:block
          lg:h-[330px] lg:w-[330px]
        "
      />
    </div>
  );
};

export default Hero;