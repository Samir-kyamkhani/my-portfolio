import React from "react";

const Loader = () => {
  return (
    <div>
      <div className="w-full h-[50vh] bg-opacity-50 flex justify-center bg-[#F1F1F1] items-center">
        <div className="loader border-t-4 border-black w-12 h-12 rounded-full animate-spin"></div>
      </div>
    </div>
  );
};

export default Loader;
