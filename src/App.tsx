import "./App.css";
import Calculator from "./components/Calculator/Calculator";
import ContactCard from "./components/ContactCard";

function App() {
  return (
    <div className="App bg-gray-600">
      <header>
        <h1 className="text-3xl font-bold mt-8 text-amber-500">
          Quick React Calculator
        </h1>
      </header>
      <Calculator />
      <ContactCard />
    </div>
  );
}

export default App;
