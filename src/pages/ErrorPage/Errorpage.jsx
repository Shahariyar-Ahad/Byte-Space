
import { Link } from 'react-router';

const Errorpage = () => {
    return (
        <div className="bg-grid-blue relative w-full overflow-hidden flex flex-col justify-center items-center text-center h-screen">

            <h1 className="text-[480px] font-bold poppins-bold text-[#D4FB20F5] leading-none">
                404
            </h1>

            <h2 className="text-[72px] font-bold poppins-regular text-white -translate-y-[125px]">
                The page you are looking <br />
                for doesn’t exist
            </h2>

            <p className="text-[18px] font-normal text-white -translate-y-[80px]">
                The page you are looking for doesn’t exist
            </p>
          <Link
    to="/"
   className="btn mt-10 mb-21 h-11.5 w-43 rounded-3xl border-0 bg-[#D4FB20] px-6 py-3 text-black"
>
    Back to Home
</Link>
        </div>
    );
};

export default Errorpage;