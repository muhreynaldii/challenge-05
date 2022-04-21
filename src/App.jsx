import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./pages/Home/Home.jsx";
import Cars from "./pages/Cars/Cars.jsx";
import Search from "./pages/Search/Search.jsx";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
      <Provider store={store}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="search" element={<Search/>} />
          <Route path="cars/:id" element={<Cars/>} />
        </Route>
      </Routes>
      </Provider>
  );
}

export default App;
