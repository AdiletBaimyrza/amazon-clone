import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "./components";

import "./tailwind.css";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
