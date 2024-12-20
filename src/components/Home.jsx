import { Drawer, Layout } from "antd";
import React, { useState } from "react";
import MainContent from "./mainContent";
import CustomFooter from "./footer";
import CustomHeader from "./header";
import SiderbarLinks from "./sidebarLink";

function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Layout>
        <CustomHeader setIsOpen={setIsOpen} />
        <MainContent />
        <CustomFooter />
      </Layout>
      <Drawer
        classNames="md:hidden block bg-customgray-2 overflow-hidden"
        onClose={() => {
          setIsOpen(false);
        }}
        open={isOpen}
        placement="left"
        width={260}
      >
        <div className="flex flex-col mt-5">
          <div className="flex items-center mb-10">
            <img src="/assets/svgs/logo.svg" className="w-[40px] h-[36px]" />
            <h3 className="text-[#14437B] ml-2">TeamSpark</h3>
          </div>
          <SiderbarLinks info={{ title: "Company", redirectTo: "/about" }} />
          <SiderbarLinks info={{ title: "Support", redirectTo: "/about" }} />
          <SiderbarLinks info={{ title: "Get Started", redirectTo: "/" }} />
        </div>
      </Drawer>
    </>
  );
}

export default Home;
