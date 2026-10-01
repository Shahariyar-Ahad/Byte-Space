
import Card from "../Card/Card";

import courses from "../../../public/Courses.json";

const FloatingCards = () => {
  const card1 = courses[1];


  return (
    <div className="relative h-[420px] w-[600px]">

      {/* ================= BACK CARD ================= */}
      <div className="floating-card absolute left-0 top-[100px] z-10 scale-[0.72]">
        <Card course={card1} />
      </div>

     

    </div>
  );
};

export default FloatingCards;