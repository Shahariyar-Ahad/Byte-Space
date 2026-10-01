
import student from '../../../assets/ByteSpace.png';
import FloatingCards from '../../../Components/Floating/FloatingCard';

import progressCard from '../../../assets/Auto Layout Vertical (1).png';

const Growth = () => {
    return (
        <div className="bg-soft-glow h-full w-full overflow-hidden px-4 py-12 sm:py-16 md:px-10 lg:overflow-visible lg:px-[122px]">

            {/* Content + Image Parent */}
            <div className="mx-auto flex h-auto w-full max-w-[1258px] flex-col items-center justify-center gap-12 md:gap-16 lg:h-[552px] lg:flex-row lg:gap-[120px]">

                {/* Content portion */}
                <div className="w-full lg:w-auto">
                    <h2 className="poppins-black w-full text-left text-[28px] leading-[1.15] sm:text-[38px] md:text-[44px] lg:w-150 lg:shrink-0">
                        Discover What Our Community Is Saying
                    </h2>

                    <p className="w-full py-6 text-left text-[15px] leading-[26px] text-gray-600 sm:py-[40px] sm:text-[16px] sm:leading-[29px] lg:w-150">
                        At ByteSpace, our vibrant community of learners and creators is at
                        the heart of what we do. Hear directly from those who have
                        experienced the transformative journey of learning and creating on
                        our platform. Explore testimonials that reflect the diverse
                        perspectives of enthusiastic learners and accomplished creators.
                    </p>

                    <div className="stats max-w-full shadow">
                        <div className="stat px-4 sm:px-6">
                            <div className="stat-value text-primary">12K</div>
                            <div className="stat-desc">Students</div>
                        </div>

                        <div className="stat px-4 sm:px-6">
                            <div className="stat-value text-secondary">70+</div>
                            <div className="stat-desc">Courses</div>
                        </div>

                        <div className="stat px-4 sm:px-6">
                            <div className="stat-value">16</div>
                            <div className="stat-title">Creators</div>
                        </div>
                    </div>
                </div>

                {/* Image portion */}
                <div className="relative mx-auto h-[360px] w-full max-w-[420px] overflow-hidden sm:h-[460px] sm:max-w-[560px] lg:h-[540px] lg:w-[577px] lg:max-w-none lg:overflow-visible">

                    {/* Student - front */}
                    <img
                        src={student}
                        alt="Student learning online"
                        className="absolute bottom-0 right-0 z-20
                            h-[85%] w-auto translate-x-0 object-contain
                            sm:h-[92%]
                            lg:-right-[180px] lg:h-auto lg:-translate-x-1/2"
                    />

                    {/* Course card - back (mobile e scale kore choto kora hoise) */}
                    <div
                        className="absolute bottom-[90px] left-0 z-10
                            w-[1100px] origin-bottom-left scale-[0.36]
                            sm:bottom-[130px] sm:scale-[0.5]
                            md:scale-[0.52]
                            lg:bottom-50 lg:left-[-100px] lg:scale-100"
                    >
                        <FloatingCards />
                    </div>

                    {/* Progress card - top */}
                    <img
                        src={progressCard}
                        alt="Learning progress 55%"
                        className="absolute right-0 top-[58%] z-[999]
                            w-[120px]
                            sm:top-[300px] sm:w-[190px]
                            lg:left-[250px]"
                    />

                </div>

            </div>

        </div>
    );
};

export default Growth;