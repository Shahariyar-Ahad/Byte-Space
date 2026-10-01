import girls from "../../../assets/girls.png";
import spring from "../../../assets/spring.png";
import HappyStudents from "../../../Components/Happystudents/HappyStudents";




const features = [
  "Share Your Expertise",
  "Monetize Your Passion",
  "Flexibility and Autonomy",
  "Build a Community",
];

// blue ,
const CheckIcon = () => (
  <svg className="h-6 w-6 shrink-0 text-[#0A38E8]" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2a10 10 0 100 20 10 10 0 000-20zm-1.2 14.4L6.6 12.2l1.4-1.4 2.8 2.8 5.2-5.2 1.4 1.4-6.6 6.6z" />
  </svg>
);

const CreateAndManage = () => {
  return (
    <section className="create-section">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2">
        {/* ---------- Left: image + floating cards ---------- */}
        <div className="relative mx-auto h-[560px] w-full max-w-[540px]">
          {/* Total Revenue card */}
          <div className="absolute left-0 top-6 z-0 w-64 rounded-xl bg-[#0A38E8] p-4 text-white">
            <p className="text-base">Total Revenue</p>
            <p className="text-[10px] opacity-70">July 1-28</p>
            <p className="mt-2 text-2xl font-semibold">$120.29</p>
            <div className="mt-2 h-1.5 w-full rounded-full bg-white/30">
              <div className="h-full w-1/2 rounded-full bg-[#d4f21a]" />
            </div>
          </div>

          {/* Year to Date card */}
          <div className="absolute left-0 top-40 z-0 w-36 rounded-xl bg-[#0A38E8] p-4 text-white">
            <p className="text-base">Year to Date</p>
            <p className="text-[10px] opacity-70">2023</p>
            <p className="mt-2 text-2xl font-semibold">$1,200.38</p>
            <span className="mt-2 inline-block rounded-full bg-[#d4f21a] px-2 py-0.5 text-[10px] font-semibold text-black">
              +12$
            </span>
          </div>

          {/* girl image */}
          <img
            src={girls}
            alt="Student with headphones"
            className="absolute bottom-0 left-16 z-10 h-[520px] object-contain"
          />

          {/* green spring */}
          <img
            src={spring}
            alt=""
            className="absolute right-12 top-48 z-10 w-28"
          />

          {/* Happy Students card */}
          <div className="absolute bottom-10 right-0 z-20">
         <HappyStudents></HappyStudents>
          </div>
        </div>

        {/* ---------- Right: text content ---------- */}
        <div>
          <h2 className="text-4xl font-semibold leading-tight text-[#1a1a1a] md:text-[44px]">
            Create &amp; Manage Courses Easily.
          </h2>

          <p className="mt-6 text-lg text-gray-600">
            <span className="font-semibold text-[#1a1a1a]">ByteSpace</span> supports
            individuals or entities in the creation, publication, and administration
            of educational courses.
          </p>

          <ul className="mt-8 space-y-4">
            {features.map((item) => (
              <li key={item} className="flex items-center gap-3 text-lg text-[#1a1a1a]">
                <CheckIcon />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default CreateAndManage;

