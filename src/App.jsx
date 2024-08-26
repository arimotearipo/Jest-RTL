import "./App.css";
import { List } from "./components/List";
import { TextInput } from "./components/TextInput";
import { Toggle } from "./components/Toggle";

function App() {
  const handleSubmit = (value) => {
    console.log("value", value);
  };

  return (
    <div className="container">
      <List />
      <Toggle />
      <TextInput onSubmit={handleSubmit} />
    </div>
  );
}

export default App;
