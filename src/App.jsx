import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage, NavBar } from "./components";

import "./tailwind.css";

const App = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
