import React, { useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import './App.scss'
import Main from "./components/Main/Main";
import Home from "./components/Home/Home";
import AboutMe from "./components/AboutMe/AboutMe";
import Expirience from "./components/Expirience/Expirience";
import Skills from "./components/Skills/Skills";
import Contacts from "./components/Contacts/Contacts";
import Portfolio from "./components/Portfolio/Portfolio";
import Burger from "./components/Burger/Burger";
import Courses from "./components/Courses/Courses";

const App = () => {

  const content = [
    {
      key: 0,
      section: <Home />
    },
    {
      key: 1,
      section: <AboutMe />
    },
    {
      key: 2,
      section: <Expirience />
    },
    {
      key: 3,
      section: <Skills />
    },
    {
      key: 4,
      section: <Courses />
    },
    {
      key: 5,
      section: <Contacts />
    },
    {
      key: 6,
      section: <Portfolio />
    },
  ]
  let [section, setSection] = useState(0)

  const changeSection = (section) => {

    setSection(section)
  }
  return (
    <div className="app">
      <Burger />
      <NavBar onChangeSection={changeSection} />
      <Main
        content={content}
        section={section}
        setSection={setSection} />
    </div>

  )
}
export default App
