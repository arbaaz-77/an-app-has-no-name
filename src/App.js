import Characters from "./components/Characters";
import SearchBar from "./components/SearchBar";
import { CharacterProvider } from "./contexts/CharacterContext";

function App() {
  return (
    <CharacterProvider>
      <SearchBar />
      <Characters />
    </CharacterProvider>
  );
}

export default App;
