import './Burger.scss'
import React from 'react';

const Burger = () => {
  const burgerMenuHandler = () => {
    const burgIcon = document.querySelector('.burger__icon')
    const burgMenu = document.querySelector('.nav')
    const bodyFixed = document.querySelector('body')
    if (burgIcon) {
      burgMenu.classList.toggle('active')
      burgIcon.classList.toggle('active')
      bodyFixed.classList.toggle('active')
    }
  }

  return (
    <div className="burger__icon" onClick={burgerMenuHandler}>
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}
export default Burger