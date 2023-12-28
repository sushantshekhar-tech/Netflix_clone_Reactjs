import React from "react";

const Footer = () => {
  return (
    <>
      <div className="bg-gray absolute h-500 w-full flex justify-center items-center my-10 z-50 opacity-70"></div>
      <div className="bg-gray relative h-500 w-full flex justify-center items-center my-10 z-50 opacity-70">
        <h1 className="text-gray-200 size-500 font-nsans-bold">
          Netflix Clone using React / tailswind / Firebase
        </h1>
      </div>
      <div className="bg-gray relative h-500 w-full flex justify-center items-center my-2 z-50 opacity-70">
        <h1 className="text-gray-200 size-500 font-nsans-bold">
          Made by Sushant Shekhar
        </h1>
      <p className="font-nsans-light ">  .....All Copyright Reserved @2023</p>
      </div>
    </>
  );
};

export default Footer;
