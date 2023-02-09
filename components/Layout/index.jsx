import React from "react";
import Aside from "../Aside";
import Sound from "../Backsound";

const Layout = ({ children }) => {
  return (
    <>
      <main className="w-full h-full grid grid-cols-1 lg:grid-cols-12 overflow-hidden">
        <div className="col-span-8 overflow-hidden">
          <Aside />
        </div>
        <div className="col-span-4 w-full relative bg-white h-full">
          {children}
        </div>
      </main>
    </>
  );
};

export default Layout;