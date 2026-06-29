import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import UserList from "./pages/UserList";
import UserDetails from "./pages/UserDetails";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/users" element={<UserList />} />

        <Route path="/user/:id" element={<UserDetails />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;