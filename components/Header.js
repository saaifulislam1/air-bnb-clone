import Image from "next/image";
import { useState } from "react";
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UserCircleIcon,
  UsersIcon,
} from "@heroicons/react/solid";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { Router, useRouter } from "next/dist/client/router";

//This is complete header

function Header({placeHolder}) {
  const [SearchInput, setSearchInput] = useState("");

  const [startDate, setStartDate] = useState(new Date()); // Date picker,
  const [endDate, setendDate] = useState(new Date());

  const [noOfGuests, setnoOfGuests] = useState(1);

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };
  // So what is happening here ,
  // We are getting the ranges from component and we are just setting the final state
  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setendDate(ranges.selection.endDate);
  };
  const resetInput = () => {
    setSearchInput("");
  };

  // using useRouter to navigate through
  const router = useRouter();
  // query as parameter to link: 
  // Talk about this
  const search = () => {
    router.push({
      pathname: "/search",
      query: {
        location: SearchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        noOfGuests,
      },
    });
  };

  return (
    <header
      className="sticky top-0 z-50 grid grid-cols-3
     bg-white shadow-md py-5 px-5 md:px-10"
    >
      {/* Left */}
      <div
        onClick={() => router.push("/")}
        className="relative flex items-center h-10 cursor-pointer"
      >
        <Image
          src="https://links.papareact.com/qd3"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>

      {/* middle */}
      <div
        className="flex items-center md:border-2 rounded-full py-2
       md:shadow-sm "
      >
        <input
          value={SearchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className=" flex-grow pl-5 
          bg-transparent outline-none text-sm
           text-gray-600 placeholder-gray-400"
          type="text"
          placeholder={placeHolder || "start your search"}
        />
        <SearchIcon  onClick={search}
          
          className=" hidden md:inline-flex h-8 bg-red-400 
          text-white rounded-full p-2 cursor-pointer md:mx-2"
        />
      </div>

      {/* right */}
      {/* flex items center does the centering of  element 
       and justify-end pushes the element into end */}
      <div className=" flex items-center space-x-4 justify-end text-gray-500">
        <p className="hidden md:inline cursor-pointer">Become a host</p>
        <GlobeAltIcon className="hidden " className=" h-6 cursor-pointer" />

        <div className="flex items-center space-x-2 border-2 p-2 rounded-full">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
      {/* This argument says if there is a search input value then show the following div */}
      {SearchInput && (
        <div className="flex flex-col col-span-3 mx-auto">
          <DateRangePicker
            ranges={[selectionRange]}
            minDate={new Date()} //You cant choose a date before today
            rangeColors={["#FD5B61"]}
            onChange={handleSelect}
          />
          <div className="flex items-center border-b mb-4">
            <h2 className="text-2xl flex-grow font-semibold">
              Number of Guests
            </h2>

            <UsersIcon className="h-5" />
            <input
              value={noOfGuests}
              onChange={(e) => setnoOfGuests(e.target.value)}
              min={1}
              type="number"
              className="w-12 pl-2 text-lg ouline-none text-red-400"
            />
          </div>
          <div className="flex">
            <buttton
              onClick={resetInput}
              className="flex-grow text-gray-500 cursor-pointer"
            >
              Cancel
            </buttton>
            <buttton  onClick={search} className="flex-grow text-red-400 cursor-pointer">
              Search
            </buttton>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
