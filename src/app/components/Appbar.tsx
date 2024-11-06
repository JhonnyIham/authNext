import React from "react";
import SigninButton from "./SigninButton";

const Appbar = () => {
  return (
    <header className="flex gap-4 p-4 bg-gradient-to-b from-gray-900 to-gray-800 shadow-lg">
      <SigninButton />
    </header>
  );
};

export default Appbar;
