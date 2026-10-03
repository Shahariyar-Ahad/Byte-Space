import { GiNetworkBars } from "react-icons/gi";
import { IoIosStar } from "react-icons/io";
const Card = ({ course }) => {
    const {
        title,
        instructor,
        rating,
        level,
        
        price,
        priceType,
        image,
    } = course;

    const reviewImage = [
    "/reviews/review1.png",
    "/reviews/review2.png",
    "/reviews/review3.png",
    "/reviews/review4.png",
    "/reviews/review5.png",
];

    return (
        <div className="w-full">
            <div className="card bg-base-100 w-93.25 h-96 rounded-3xl border border-blue-100 shadow-sm ">

                {/* Course Image */}
                 <div className="p-4 pb-0 shrink-0">
        <img
            src={image}
            alt={title}
            className="h-48.75 w-full rounded-xl object-cover"
        />
    </div>
                <div className="card-body">

                    {/* Title + Rating */}
                    <h2 className="card-title">
                        {title}

                        <span className="ml-auto text-sm font-normal flex items-center">
                            {rating} <IoIosStar />
                        </span>
                    </h2>

                    {/* Instructor */}
                    <div className="flex items-center">
                        <p>
                            by{" "}
                            <span className="text-[#003BE2]">
                                {instructor}
                            </span>
                        </p>
                    </div>

                    {/* Level + Review Images */}
                    <div className="card-actions justify-start items-center gap-3">

                        {/* Level */}
                        <div className="badge badge-outline w-24.25 h-8 px-3 py-1.5 rounded-3xl bg-[#F5F5F6] flex items-center gap-1">
                            <GiNetworkBars className="w-[12.5px] h-[13.33px]" />
                            {level}
                        </div>

                        {/* Review Images */}
                        <div className="flex items-center -space-x-2">
                            {reviewImage.map((image, index) => (
                                <img
                                    key={index}
                                    src={image}
                                    alt={`Reviewer ${index + 1}`}
                                    className="h-8 w-8 rounded-full"
                                />
                            ))}
                        </div>

                    </div>

                    {/* Price */}
                    <p className="font-bold">
                         <span className=" font-bold text-[25px]  text-[#003BE2]">
     ${price}
</span> /<span className="text-[#4F4F4F] font-normal text-[12px]">{priceType}</span>  
                    </p>

                </div>
            </div>
        </div>
    );
};

export default Card;