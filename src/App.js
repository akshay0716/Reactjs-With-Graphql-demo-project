import logo from "./logo.svg";
import "./App.css";
import CharacterList from "./pages/CharacterList";
import Character from "./pages/Character";
import { Routes, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <Switch> */}
      <Routes>
        <Route exact path="/" element={<CharacterList />} />
        <Route exact path="/:id" element={<Character />} />
      </Routes>
      {/* </Switch> */}
      {/* <CharacterList /> */}
    </div>
  );
}

export default App;
