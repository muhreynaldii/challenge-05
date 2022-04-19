import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home.jsx";
import Cars from "./pages/Cars/Cars.jsx";
import Search from "./pages/Search/Search.jsx";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="search" element={<Search/>} />
          <Route path="cars/:id" element={<Cars/>} />
        </Route>
      </Routes>
  );
}

export default App;
