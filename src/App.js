import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import TripsList from "./components/TripsList";
import TripDetail from "./components/TripDetail";
import { Route, Routes } from "react-router";

function App() {
  return (
    <div id="page-top">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/trips" element={<TripsList />} />
        <Route path="/tripsdetail" element={<TripDetail />} />
      </Routes>
    </div>
  );
}

export default App;
