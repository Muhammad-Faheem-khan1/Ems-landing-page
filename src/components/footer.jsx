import { Layout } from "antd";
import React from "react";

const { Footer } = Layout;

function CustomFooter() {
  return (
    <Footer className="bg-[#1F68BF]">
      <div className="grid grid-cols-7 text-white">
        <div className="md:col-span-3 md:block hidden">
          <img
            src="/assets/svgs/footerLogo.png"
            className="w-[260px] h-[110px]"
            alt="logo"
          />
        </div>
        <div className="md:col-span-1 col-span-3">
          <h3 className="font-bold">SUPPORT</h3>
          <p>Contact Us</p>
          <p>Help Center</p>
          <p>Features</p>
        </div>
        <div className="md:col-span-1 col-span-3">
          <h3 className="font-bold">COMPANY</h3>
          <p>Contact Us</p>
        </div>
        <div className="flex items-end md:col-span-2 col-span-7 md:mt-0 mt-5">
          <img
            src="/assets/svgs/x-icon.svg"
            className="w-[28px] h-[28px] mr-3"
            alt="x-icon"
          />
          <img
            src="/assets/svgs/facebook-icon.svg"
            className="w-[28px] h-[28px] mr-3"
            alt="facebook-icon"
          />
          <img
            src="/assets/svgs/insta-icon.svg"
            className="w-[28px] h-[28px] mr-3"
            alt="insta-icon"
          />
          <p>© 2024 All rights reserved.</p>
        </div>
      </div>
    </Footer>
  );
}

export default CustomFooter;
