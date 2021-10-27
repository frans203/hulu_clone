import React from "react";
import requests from "../utils/requests";
import { useRouter } from "next/dist/client/router";
import { useState } from "react";

function Nav() {
  const router = useRouter();
  const [isClicked, setIsClicked] = useState(false);
  return (
    <nav className="relative">
      <div
        className="flex px-10 sm:px-20 text-2xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll 
        overflow-y-hidden
        scrollbar-hide
        "
      >
        {Object.entries(requests).map(([key, { title, url }]) => {
          return (
            <h2
              onClick={() => {
                router.push(`/?genre=${key}`);
                setIsClicked(true);
                console.log(router, key, title);
              }}
              className={`cursor-pointer transition duration-100 transform hover:scale-125 hover:text-white active:text-red-500 ${
                router.query.genre === key
                  ? "text-red-500 hover:text-red-500"
                  : ""
              }`}
              key={key}
            >
              {title}
            </h2>
          );
        })}
      </div>
      <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-2/12" />
    </nav>
  );
}

export default Nav;
