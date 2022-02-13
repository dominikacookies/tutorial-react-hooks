import { PersonProvider } from "./context/PersonContext";
import Homepage from "./pages/homepage/Homepage";
import "./App.css";

function App() {
  return (
    <PersonProvider>
      <Homepage />;
    </PersonProvider>
  );
}

export default App;
