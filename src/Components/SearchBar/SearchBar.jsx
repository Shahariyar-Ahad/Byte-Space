import 'react';
import { IoSearchOutline } from 'react-icons/io5';

const SearchBar = () => {
    return (
        <div>
             <div className="flex items-center justify-center">
                   <form className="flex gap-4">
                        <div className="flex items-center bg-gray-100 rounded-full w-full sm:w-[500px] h-12 p-1">
                                {/* search icon */}
                                <div className="pl-4 pr-2">
                                    <IoSearchOutline className="text-black" />
                                </div> 
            
                                {/* input  */}
                               
                            <input
                                type="search"
                                name="location"
                                placeholder="course, topic, creator"
                                className="grow bg-transparent outline-none border-none 
                                           text-sm px-2 text-black"
                            /> 
            
                        </div>
                        <button
                                type="submit"
                                className="bg-[#D4FB20] rounded-3xl px-6 py-3 w-26 h-11.5 text-black"
                            >
                                Search
                            </button>
                   </form>
                </div>
        </div>
    );
};

export default SearchBar;