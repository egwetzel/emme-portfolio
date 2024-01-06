import React from "react";
import Socials from "../Socials";
import Link from "next/link";
import Button from "../Button";

const Footer = ({}) => {
  return (
    <>
    <div className="mt-10">
      <Socials />
    </div>
    
    <h1 className="text-sm text-bold mt-2 laptop:mt-10 p-2 laptop:p-0">
      Created by Emmeline Wetzel
    </h1>
    </>
  );
};

export default Footer;
