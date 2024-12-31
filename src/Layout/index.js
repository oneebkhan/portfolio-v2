import React from "react";
import Header from "./Header";
import ReactLenis from "lenis/react";

const Layout = ({ children }) => {
  return (
    <div className="bg-zinc-950 max-w-[100vw]">
      <ReactLenis
        root
        style={{
          position: 'relative'
        }}
        options={{
          lerp: 0.05,
        }}
      >
        <Header />
        {children}
      </ReactLenis>
    </div>
  );
};

export default Layout;
