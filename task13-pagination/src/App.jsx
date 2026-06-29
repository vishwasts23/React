import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Employees from "./pages/Employees";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route
          path="/employees"
          element={<Employees />}
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;