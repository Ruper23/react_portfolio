import React from "react";
import NavBar from "./components/NavBar/NavBar";
import './App.scss'
// import Main from "./components/Main/Main";
// import AboutMe from "./components/AboutMe/AboutMe";
// import Expirience from "./components/Expirience/Expirience";
// import Skills from "./components/Skills/Skills";
import Contacts from "./components/Contacts/Contacts";
// import Portfolio from "./components/Portfolio/Portfolio";
function App() {
  return (
    <div className="app">
      <NavBar />
      {/* <Main /> */}
      {/* <AboutMe /> */}
      {/* <Expirience /> */}
      {/* <Skills /> */}
      <Contacts />
      {/* <Portfolio /> */}
    </div>
  );
}

export default App;
