import React from "react";

const Character = ({ character }) => {
  return (
    <div className="border border-black flex flex-col p-5 justify-between items-center gap-4">
      <div>
        <img className="h-48 w-48" src={character.imageUrl} alt="" />
      </div>
      <div className="">
        <h4>
          {character.firstName} {character.lastName}
        </h4>
      </div>
    </div>
  );
};

export default Character;
