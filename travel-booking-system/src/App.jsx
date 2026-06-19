import { Routes, Route } from "react-router-dom";
import { useContext } from "react";

import { ThemeContext } from "./context/ThemeContext";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Destinations from "./pages/Destinations";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Profile from "./pages/Profile";

import Adventure from "./services/Adventure";
import Family from "./services/Family";
import Honeymoon from "./services/Honeymoon";
import DestinationDetails from "./services/DestinationDetails";
import Booking from "./pages/Booking";
import UserManagement from "./pages/UserManagement";

function App() {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={theme}>
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/destinations"
          element={<Destinations />}
        />

        <Route
          path="/destination/:id"
          element={<DestinationDetails />}
        />

        <Route
          path="/services"
          element={<Services />}
        >
          <Route
            path="adventure"
            element={<Adventure />}
          />

          <Route
            path="family"
            element={<Family />}
          />

          <Route
            path="honeymoon"
            element={<Honeymoon />}
          />
        </Route>

        <Route
          path="/contact"
          element={<Contact />}
        />

        <Route
          path="/profile"
          element={<Profile />}
        />

        <Route
          path="/booking"
          element={<Booking />}
        />

        <Route
          path="/users"
          element={<UserManagement />}
        />
      </Routes>
    </div>
  );
}

export default App;