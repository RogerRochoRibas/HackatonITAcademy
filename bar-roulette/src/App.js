import "./css/App.css";
import "./css/footer.css";
import "./css/header.css";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Footer } from "./components/general/footer";
import { Landing } from "./pages/Landing";
import { Header } from "./components/general/header";
import { ProfileTeam } from "./components/landing/ProfileTeam";
import ResultPage from "./pages/results";

export default function App() {
  return (
    <Router className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="results" element={<ResultPage/>}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}
