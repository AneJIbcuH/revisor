import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Favorites from "./pages/Favorites";
import Catalog from "./pages/Catalog";
import "./styles/css/App.css";

const App: React.FC = () => {
  return (
    <div className="container">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" element={<Catalog />}></Route>
          <Route path="/favorites" element={<Favorites />}></Route>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
