import React from "react";
import { AiFillPhone } from "react-icons/ai";
import { CgWebsite } from "react-icons/cg";
import { SiGmail } from "react-icons/si";
import { ImLocation2 } from "react-icons/im";

function Footer() {
  return (
    <div className="text-[#ffffff] h-[170px] mt-10 bg-[#3357bbc4] inset-x-0  bottom-0 text-center md:justify-center">
      <div className="pl-10">
        <h1 className="text-2xl font-sans">Noah Beshah</h1>
        <h3 className="text-sm">Software Developer</h3>
      </div>
      <div className="flex items-center md:flex md:justify-center">
        <div className="">
          <div className="pl-6 pt-3 items-center flex">
            <AiFillPhone />
            <h1 className="pl-2">+251967813965</h1>
          </div>
          <div className="pl-6 items-center flex">
            <SiGmail />
            <h1 className="pl-2">noahbeshahb@gmail.com</h1>
          </div>
        </div>
        <div className="">
          <div className="pl-6 items-center flex">
            <CgWebsite />
            <a href="https://noah-beta.vercel.app/">
              <h1 className="pl-2">website</h1>
            </a>
          </div>
          <div className="pl-6 items-center flex">
            <ImLocation2 />
            <h1 className="pl-2">Ethiopia</h1>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-3">
        <h2>@2023</h2>
      </div>
    </div>
  );
}

export default Footer;
