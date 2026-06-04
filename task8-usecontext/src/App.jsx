import React, { createContext, useState } from "react";
import ProfileSection from "./Context/ProfileSection";
import RegistrationForm from "./Context/RegistrationForm";
import "./App.css";

export const AppContext = createContext();

function App() {
  const [theme, setTheme] = useState("light");

  const contextData = {
    company: "Fowtayess Pvt Ltd",
    trainer: "Vishwas",
    theme,
    setTheme,
  };

  return (
    <AppContext.Provider value={contextData}>
      <div className={`app ${theme}`}>
        <h1>Employee Registration Portal</h1>

        <ProfileSection />

        <RegistrationForm />
      </div>
    </AppContext.Provider>
  );
}

export default App;