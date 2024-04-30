import React from "react";
import Image from "next/image";

const Search = () => {
  return (
    <div className="relative w-full lg:w-11/12 h-[5rem] lg:h-[5.5rem] rounded-lg z-0 overflow-hidden">
      <div className="absolute w-full h-full bg-white-100 opacity-30"></div>

      {/* Mobile Search */}
      <div className="md:hidden">
        <div className="absolute z-20 h-full flex items-center left-6">
          <Image
            src={"/assets/icons/search.svg"}
            alt="search"
            width={23}
            height={23}
            className="opacity-80"
          />
        </div>

        <div className="absolute w-full h-full z-10 flex items-center justify-center">
          <input
            type="text"
            placeholder="Enter a job title or keyword"
            className="w-11/12 h-14 rounded-md pl-10 placeholder-black placeholder-opacity-60 focus:outline-secondary text-black"
          />
        </div>
      </div>

			{/* Tablet/Desktop Search */}
      <div className="hidden md:flex">
        <div className="absolute z-20 h-full flex items-center left-7">
          <Image
            src={"/assets/icons/search.svg"}
            alt="search"
            width={27}
            height={27}
            className="opacity-80"
          />
        </div>

        <div className="absolute w-full h-full z-10 flex items-center justify-center">
          <div className="w-[95%] lg:w-[97%] flex gap-8">
            <input
              type="text"
              placeholder="Enter a job title or keyword"
              className="w-full h-14 md:h-[3.75] rounded-md pl-12 placeholder-black placeholder-opacity-60 focus:outline-secondary text-black text-lg"
            />

            <button type="button" className="bg-black hover:bg-opacity-80 hover:cursor-pointer px-5 py-2 rounded-lg text-lg font-medium">Search</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
