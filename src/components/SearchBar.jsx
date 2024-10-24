import React, { useState } from 'react'


const SearchBar = () => {
  const [search,setSearch]=useState();
  return (
    <div className="mt-[60px] flex justify-center items-center p-4  w-full bg-gray-100">
            <input
                type="text"
                name="Search Location"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search Location"
                className="border border-gray-300 rounded-lg p-2 w-full sm:w-2/3 mr-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
            />
            <button
                className="bg-white text-blue rounded-lg px-4 py-2 hover:bg-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400"
            >
                Search
            </button>
        </div>
    );
}

export default SearchBar;

 