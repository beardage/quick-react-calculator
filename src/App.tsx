import "./App.css";
import Calculator from "./components/Calculator/Calculator";
import ContactCard from "./components/ContactCard";

function App() {
  return (
    <div className="App bg-gray-800">
      <header>
        <h1 className="text-3xl font-bold mt-8">Quick React Calculator</h1>
      </header>
      <Calculator />
      <ContactCard />
    </div>
  );
}

export default App;
