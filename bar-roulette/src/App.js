import "./css/App.css";
import "./css/footer.css";
import "./css/header.css";
import "./css/resultsPage.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Footer } from "./components/general/Footer";
import { Landing } from "./pages/Landing";
import { Header } from "./components/general/Header";
import ResultPage from "./pages/Results";

export default function App() {
  return (
  <div className="App">
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="results" element={<ResultPage/>}></Route>
      </Routes>
      <Footer />
    </Router>
    </div>
  );
}