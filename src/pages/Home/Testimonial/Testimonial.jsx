import TestimonialCard from "./TestimonialCard";

const Testimonial = () => {
  return (
    <div className="testimonial-bg relative w-full min-h-[784px] overflow-clip">
      <div className="mx-auto w-full max-w-[1200px] px-5 pt-[50px] md:px-8 md:pt-[74px]">

        {/* Header row */}
        <div className="flex flex-col items-start gap-6 lg:h-[145px] lg:flex-row lg:items-center lg:justify-between lg:gap-0">

          <h2 className="poppins-black w-full text-left text-[32px] leading-[1.15] sm:text-[38px] md:text-[44px] lg:w-[600px] lg:shrink-0">
            Discover What Our Community Is Saying
          </h2>

          <p className="w-full text-left text-[15px] leading-[26px] text-gray-600 sm:text-[16px] sm:leading-[29px] lg:w-[580px]">
            At ByteSpace, our vibrant community of learners and creators is at
            the heart of what we do. Hear directly from those who have
            experienced the transformative journey of learning and creating on
            our platform. Explore testimonials that reflect the diverse
            perspectives of enthusiastic learners and accomplished creators.
          </p>

        </div>

        {/* Cards row */}
        <div className="mx-auto grid w-fit grid-cols-1 justify-items-center gap-[72px] pt-12 pb-20 md:pt-17 md:pb-30 lg:grid-cols-3">
          <TestimonialCard />
        </div>

      </div>
    </div>
  );
};

export default Testimonial;