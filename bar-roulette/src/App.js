import "./css/App.css";
import "./css/footer.css";
import ResultPage from "./pages/results";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import { Footer } from "./components/general/footer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}> 
          <Route path="results" element={<ResultPage />}/>  
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
