import React from "react";
import CatIcon from "../../../public/cat-5.svg";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
      <div style={{ height: "40px", width: "40px" }}>
            <Image src={CatIcon} alt="Cat Icon" />
      </div>
        <p className="text-slate-600">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
