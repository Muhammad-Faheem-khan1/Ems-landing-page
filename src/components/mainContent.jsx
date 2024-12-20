import { Layout } from "antd";
import React from "react";
import FeatureCard from "./featureCard";
import { FEATURESDATA, REVIEWS } from "../utils/constants";
import ReviewCard from "./reviewCard";

const { Content } = Layout;

function MainContent() {
  return (
    <Content className="py-10 mt-10 bg-gradient-to-r from-[#fff] to-[#DDE4F0]">
      <div className="my-10 px-10">
        <h2 className="text-center text-4xl font-bold">
          <span className="text-[#2979FF]">Fast. </span>
          <span className="text-[#B0BEC5]">Simple. </span>
          <span className="text-[#FFB74D]">Empowering.</span>{" "}
        </h2>
        <p className="text-[#433E3F] text-center mt-6 text-lg">
          Our all-in-one enterprise management solution puts everything you need
          at your fingertips. From tracking attendance and accessing personal
          records to staying updated with company announcements, we empower
          employees and managers to work smarter and stay
          connected—effortlessly.
        </p>
        <div className="flex items-center justify-center mt-6 mb-10">
          <button className="rounded-md bg-[#1890FF] text-white py-2 px-3">
            Book a demo
          </button>
          <button className="rounded-md bg-white  py-2 px-3 ml-5">
            Schedule a Call
          </button>
        </div>
        <img
          src="/assets/svgs/main-img.svg"
          className="w-full"
          alt="showcase img"
        />
      </div>

      <div className="relative">
        <h3 className="text-[#1F68BF] text-center text-2xl font-bold px-10">
          Enterprise Management Software
        </h3>
        <p className="text-[#2B3A4B] text-center text-xl px-10">
          The operating core of your business
        </p>
        <img
          src="/assets/svgs/banner-img.svg"
          className="md:w-full mt-6"
          alt="banner img"
        />
        <div className="flex justify-center">
          <div className="py-4 px-6 bg-[#E1ECFA] rounded-md lg:w-[35%]md:w-[60%] w-full absolute md:bottom-[-4rem] bottom-[-8rem]">
            <p className="text-center text-[#0E315A] text-lg font-medium">
              We offer the customizability, feature depth, and product stability
              required to effectively manage a large-scale organization across
              all departments
            </p>
          </div>
        </div>
      </div>
      <div className="mt-10 md:px-8 px-3 pt-5">
        <h3 className="text-center text-2xl font-bold px-10 mt-10 pt-10">
          One Platform, One Enterprise
        </h3>
        {FEATURESDATA.map((feature, index) => (
          <FeatureCard feature={feature} key={index} index={index} />
        ))}
      </div>
      <div>
        <h3 className="text-center text-2xl font-bold px-10 mt-10 pt-10">
          Trusted by industry leading companies around the world
        </h3>
        <div className="flex md:flex-row flex-col justify-evenly items-center mt-8 mb-10">
          <img
            src="/assets/svgs/bonfire-logo.svg"
            className="w-[170px] h-[60px] mt-4"
            alt="logo"
          />
          <img
            src="/assets/svgs/copyAI-icon.svg"
            className="w-[170px] h-[60px] mt-4"
            alt="logo"
          />
          <img
            src="/assets/svgs/hatch-icon.svg"
            className="w-[170px] h-[60px] mt-4"
            alt="logo"
          />
          <img
            src="/assets/svgs/zoom-icon.svg"
            className="w-[170px] h-[60px] mt-4"
            alt="logo"
          />
          <img
            src="/assets/svgs/asan-icon.svg"
            className="w-[170px] h-[60px] mt-4"
            alt="logo"
          />
        </div>
      </div>
      <div>
        <div className="grid grid-cols-3 px-10">
        {REVIEWS.map((review)=>(
          <ReviewCard review={review} key={review?.imgSrc} />
        ))}
        </div>
        <div className="w-[30%] mx-auto flex justify-between px-10">
          <button>
            <img src="/assets/svgs/leftArrow.svg" className="w-[40px] h-[40px]" alt="right arrow"/>
          </button>
          <button>
            <img src="/assets/svgs/rightArrow.svg" className="w-[40px] h-[40px]" alt="right arrow"/>
          </button>
        </div>
      </div>
     
      <div className="mt-8">
        <h3 className="text-center text-2xl font-bold px-10 mt-10 pt-10">
          Ready to take your Organization to the next level?
        </h3>
        <div className="flex items-center justify-center mt-10 mb-10">
          <button className="rounded-md bg-[#1890FF] text-white py-2 px-3">
            Book a demo
          </button>
          <button className="rounded-md bg-white  py-2 px-3 ml-5">
            Schedule a Call
          </button>
        </div>
      </div>
    </Content>
  );
}

export default MainContent;
