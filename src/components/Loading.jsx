import React from "react";
import { FadeLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <FadeLoader color="#2563eb" />
      <p className="mt-4 text-lg text-gray-700">Loading...</p>
    </div>
  );
};

export default Loading;
