import { Layout } from "antd";
import React from "react";
import SiderbarLinks from "./sidebarLink";

const { Header } = Layout;

function CustomHeader({ setIsOpen }) {
  return (
    <Header className="fixed w-full flex justify-between items-center shadow-b bg-white z-[200]">
      <div className="flex items-center">
        <img
          src="/assets/svgs/logo.svg"
          className="w-[40px] h-[36px]"
          alt="logo"
        />
        <h3 className="text-[#14437B] ml-2">TeamSpark</h3>
      </div>
      <div className="md:flex hidden">
        <SiderbarLinks info={{ title: "Company", redirectTo: "/about" }} />
        <SiderbarLinks info={{ title: "Support", redirectTo: "/about" }} />
        <SiderbarLinks info={{ title: "Get Started", redirectTo: "/" }} />
      </div>
      <button
        className="md:hidden block"
        onClick={() => {
          setIsOpen((prev) => !prev);
        }}
      >
        <img src="/assets/svgs/toggle-btn.svg" alt="toggle btn" />
      </button>
    </Header>
  );
}

export default CustomHeader;
