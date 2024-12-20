import React from "react";

export default function SiderbarLinks({ info }) {
//   const location = useLocation();
//   const pathname = location.pathname;

  const isActive = (path) => {
     if(path === '/') return true
  };

  return (
    <button
      className={`z-[200] flex px-3 py-2 mr-4 items-center rounded-md text-black hover:border-primary transition ${isActive(info.redirectTo) && "active shadow-md border-primary text-white bg-[#1890FF]"} `}
    >
        <span className="flex leading-tight ml-2">{info?.title}</span>
    </button>
  );
}
