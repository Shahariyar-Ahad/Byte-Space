import avatar1 from "../../assets/Ellipse.png";
import avatar2 from "../../assets/Ellipse (1).png";
import avatar3 from "../../assets/Ellipse (2).png";
import avatar4 from "../../assets/Ellipse (3).png";
import countBadge from "../../assets/Ellipse (4).png";

const avatars = [avatar1, avatar2, avatar3, avatar4, countBadge];

const Students = ({ rating = "4.5", reviews = 240 }) => {
  return (
    <div className="rounded-2xl bg-white p-4 shadow-lg">
      <h4 className="text-base font-medium text-[#1a1a1a]">Happy Students</h4>

      {/* rating */}
      <div className="mt-1 flex items-center gap-1 text-xs">
        <span className="font-semibold">{rating}</span>
        <span className="text-gray-400">({reviews})</span>
        <span className="text-[#d4f21a]">★</span>
      </div>

      {/* overlapping avatars */}
      <div className="mt-3 flex -space-x-3">
        {avatars.map((src, index) => (
          <img
            key={index}
            src={src}
            alt="student"
            className="h-9 w-9 rounded-full border-2 border-white object-cover"
          />
        ))}
      </div>
    </div>
  );
};

export default Students;