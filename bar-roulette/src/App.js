import "./css/App.css";
import "./css/footer.css";

import { Footer } from "./components/general/footer";
import Landing from "./pages/Landing";


function App() {
  return (
    <div className="App">
      <Landing />
      <Footer />
    </div>
  );
}

export default App;
