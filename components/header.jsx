"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import RadicalLogo from "@/public/images/radical_logo.svg";

export const Header = ({ children }) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [bannerStyle, setBannerStyle] = useState("py-2.5");
  const [navStyle, setNavStyle] = useState("bg-transparent");

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = window.scrollY;

      if (currentScrollPosition > scrollPosition) {
        setBannerStyle("h-0 py-0");
        setNavStyle("bg-black bg-opacity-80");
      } else if (currentScrollPosition === 0) {
        setBannerStyle("py-2.5");
        setNavStyle("bg-transparent");
      }

      setScrollPosition(currentScrollPosition);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPosition, bannerStyle]);

  useEffect(() => {
    if (window.scrollY) {
      setBannerStyle("h-0 py-0");
      setNavStyle("bg-black bg-opacity-80");
    } else {
      setBannerStyle("py-2.5");
      setNavStyle("bg-transparent");
    }
  }, []);

  return (
    <header
      className={`fixed top-0 z-[50] w-full text-white text-sm ${navStyle}`}
    >
      <div
        className={`flex justify-center font-futura_pt_book px-6 text-center overflow-hidden transition-all ease-in-out duration-500 w-full ${bannerStyle}`}
      >
        Some kind of banner across the top, for subtle messages duis mollis, est
        non commodo luctus,
      </div>
      <nav className="container font-futura_pt_medium flex justify-between items-center lg:text-base">
        <Link href="/">
          <Image src={RadicalLogo} className="w-52" alt="Radical logo" />
        </Link>
        <ul className="flex gap-x-5 items-center">
          <li className="transition-all ease-in-out duration-300 hover:text-[#F2CB13] cursor-pointer">
            Cars
          </li>
          <li className="transition-all ease-in-out duration-300 hover:text-[#F2CB13] cursor-pointer">
            Drive
          </li>
          <li className="transition-all ease-in-out duration-300 hover:text-[#F2CB13] cursor-pointer">
            Our story
          </li>
          <li className="text-[#F2CB13] cursor-pointer">News</li>
          <li className="transition-all ease-in-out duration-300 hover:text-[#F2CB13] cursor-pointer">
            Contact us
          </li>
          <li>{children}</li>
        </ul>
      </nav>
    </header>
  );
};
