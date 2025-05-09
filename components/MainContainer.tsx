"use client";

import React from "react";

import { twMerge } from "tailwind-merge";

interface MainContainerProps {
  children: React.ReactNode;
}

const MainContainer: React.FC<MainContainerProps> = ({ children }) => {
  return (
    <div className={twMerge(`flex h-full backdrop-blur-md bg-black/50`, "")}>
      {/* left */}
      <div className="flex h-full backdrop-blur-sm">
        <div></div>
      </div>
      {}
      <main>{children}</main>
      {}
      <div></div>
    </div>
  );
};

export default MainContainer;
