import "./css/App.css";
import "./css/footer.css";
import "./css/header.css";

import { Footer } from "./components/general/footer";
import Landing from "./pages/Landing";
import { Header } from "./components/general/header";


function App() {
  return (
    <div className="App">
      <Landing />
      <Header />
      <div><h1>Welcome</h1></div>

      <Footer />
    </div>
  );
}

export default App;
