
import review from "../../../assets/review1.png";
import review2 from "../../../assets/review2.png";
import review3 from "../../../assets/review3.png";

const TestimonialCard = () => {
  const reviews = [
    {
      id: 1,
      name: "Sarah M",
      background: "Enthusiastic Learner",
      review:
        "ByteSpace has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.",
      image: review,
    },
    {
      id: 2,
      name: "Jane Smith",
      background: "LifeLong Learner",
      review:
        "ByteSpace has been a game-changer for me. The courses are well-structured, and the creators are incredibly knowledgeable. I appreciate the interactive learning experience and the opportunity to connect with like-minded individuals. Highly recommended!",
      image: review2,
    },
    {
      id: 3,
      name: "Mike Johnson",
      background: "Inspired Creator",
      review:
        "As a creator, ByteSpace has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.",
      image: review3,
    },
  ];

  return (
    <>
      {reviews.map((review) => (
        <div
          className="card bg-base-100  shadow-sm w-[374px] h-[432px] rounded-3xl border border-white "
          key={review.id}
        >
          <figure className="justify-start pt-6 pl-6">
            <img
              src={review.image}
              alt={review.name}
              className="rounded-xl"
            />
          </figure>

          <div className="card-body">
            <h2 className="card-title font-bold text-[20px] poppins-bold ">
              {review.name}
            </h2> 
            <h2 className=" text-[#003BE2] text-[18px] font-normal">
              {review.background}
            </h2> 


    
            <p className="text-[#4F4F4F] text-[18px] font-normal">
              {review.review}
            </p>

           
          </div>
        </div>
      ))}
    </>
  );
};

export default TestimonialCard;