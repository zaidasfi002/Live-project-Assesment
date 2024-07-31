import "./App.css";
import Counter from "./Counter";
import DataFetcher from "./DataFetcher";
import HelloWorld from "./HelloWorld";
import Navbar from "./Navbar";
import RegistrationForm from "./RegistrationForm";

function App() {
  return (
    <>
      <Navbar />
      <HelloWorld />
      <Counter />
      <DataFetcher />
      <RegistrationForm />
    </>
  );
}

export default App;
