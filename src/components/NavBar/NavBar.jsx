import React from 'react'
import './NavBar.scss'
import NavBarItem from './NavBarItem'


const NavBar = (props) => {
  const changeSection = (newSection) => {
    props.onChangeSection(newSection)
  }
  const menuCloseHandler = e => {

    const mediaQuery = window.matchMedia('(max-width: 768px)');

    if (mediaQuery.matches) {
      const burgIcon = document.querySelector('.burger__icon');
      const burgMenu = document.querySelector('.nav');
      const bodyFixed = document.querySelector('body')
      if (e.target) {
        burgMenu.classList.toggle('active');
        burgIcon.classList.toggle('active');
        bodyFixed.classList.toggle('active');
      }

    }

  }
  return (
    <nav className="nav" onClick={menuCloseHandler}>
      <NavBarItem
        onChangeSection={changeSection}
      />
      <div className="nav__footer">
        <ul className="social">
          <li className="social__item">
            <a href="https://www.linkedin.com/in/vitali-skarbinski-fe/" target='_blank' rel='noreferrer'><i className="fa-brands fa-linkedin"></i></a>
          </li>
          <li className="social__item">
            <a href="https://www.instagram.com/ruper292/?igshid=YmMyMTA2M2Y%3D" target='_blank' rel='noreferrer'><i className="fa-brands fa-square-instagram"></i></a>
          </li>
          <li className="social__item">
            <a href="https://www.facebook.com/ruper.rup/" target='_blank' rel='noreferrer'><i className="fa-brands fa-square-facebook"></i></a>
          </li>
          <li className="social__item">
            <a href="https://vk.com/ruper23" target='_blank' rel='noreferrer'><i className="fa-brands fa-vk"></i></a>
          </li>
          <li className="social__item">
            <a href="https://github.com/Ruper23" target='_blank' rel='noreferrer'><i className="fa-brands fa-square-github"></i></a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
export default NavBar