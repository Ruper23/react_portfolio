import React from "react";
import NavBar from "./components/NavBar/NavBar";
import './App.scss'
import Contacts from "./components/Contacts/Contacts";
// import Main from "./components/Main/Main";
// import AboutMe from "./components/AboutMe/AboutMe";
// import Expirience from "./components/Expirience/Expirience";
// import Skills from "./components/Skills/Skills";
function App() {
  return (
    <div className="app">
      <NavBar />
      {/* <Main /> */}
      {/* <AboutMe /> */}
      {/* <Expirience /> */}
      {/* <Skills /> */}
      <Contacts />
    </div>
  );
}

export default App;
