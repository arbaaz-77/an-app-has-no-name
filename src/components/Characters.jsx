import { useContext } from "react";
import Character from "./Character";
import CharacterContext from "../contexts/CharacterContext";

const Characters = () => {
  const { filteredResults } = useContext(CharacterContext);
  return (
    <div className="grid md:grid-cols-4 gap-4">
      {filteredResults.map((character) => (
        <Character key={character.id} character={character} />
      ))}
    </div>
  );
};

export default Characters;
