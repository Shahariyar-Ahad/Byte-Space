import 'react';
import LoremEpsome from '../../../assets/Frame 2.png';

const Lorem = () => {
    return (
        <div className="w-full bg-[#F5F5F5]">
            <img
                src={LoremEpsome}
                alt="Partner logos"
                className=" w-full max-w-360 h-50.5 mx-auto object-contain "
            />
        </div>
    );
};

export default Lorem;