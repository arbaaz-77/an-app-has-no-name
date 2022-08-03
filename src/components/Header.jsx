import React from "react";

const Header = () => {
  return (
    <header>
      <div className="flex flex-col justify-between items-center md:flex-row">
        <h1 className="text-5xl text-pinkish font-bold">Valar Morghulis</h1>
        <p className="font-bold">
          Welcome to Westeros. <br />
          Explore characters from the HBO classic Game of Thrones
        </p>
      </div>
    </header>
  );
};

export default Header;
