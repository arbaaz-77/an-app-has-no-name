import { useContext} from "react";
import CharacterContext from "../contexts/CharacterContext";

const SearchBar = () => {
  const { characters, setFilteredResults } = useContext(CharacterContext);

  const handleChange = (e) => {
    const results = characters.filter(
      (item) =>
        item.firstName.includes(e.target.value) ||
        item.lastName.includes(e.target.value)
    );
    setFilteredResults(results);
  };

  return (
    <div className="py-12 px-8">
      <input
        className="w-full p-4 focus:outline-none"
        type="search"
        placeholder="Search"
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchBar;
