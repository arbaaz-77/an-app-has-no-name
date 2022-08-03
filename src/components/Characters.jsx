import React, { useEffect, useState } from "react";
import { fetchData } from "../utils/index";
import Character from "./Character";

const Characters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetchData().then((data) => {
      setCharacters(data);
    });
  }, []);

  return (
    <div className="grid md:grid-cols-4 gap-4">
      {characters.map((character) => (
        <Character key={character.id} character={character} />
      ))}
    </div>
  );
};

export default Characters;
