import "react";
import boy from "../../assets/ByteSpace.png";

const ByteSpace = ({ className = "" }) => {
  return (
    <div className={className}>
      <img
        src={boy}
        alt="ByteSpace Student"
        className="w-full h-auto object-contain static"
      />
    </div>
  );
};

export default ByteSpace;