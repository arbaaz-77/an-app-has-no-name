import { createContext, useState, useEffect } from "react";
import { fetchData } from "../utils/index";

const CharacterContext = createContext({
  characters: [],
  filteredResults: [],
});

export const CharacterProvider = ({ children }) => {
  const [characters, setCharacters] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);

  useEffect(() => {
    const getCharacters = async () => {
      const newData = await fetchData();
      setCharacters(newData);
    };

    getCharacters();
  }, []);

  const value = { characters, filteredResults, setFilteredResults };

  return (
    <CharacterContext.Provider value={value}>
      {children}
    </CharacterContext.Provider>
  );
};

export default CharacterContext;
