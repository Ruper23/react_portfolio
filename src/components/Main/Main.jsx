import './Main.scss'
import React from 'react'

const Main = (props) => {
  const main = document.querySelector('.main')
  const { section: showContentSection, setSection: setShowContentSection } = props

  let xDown = null;
  let yDown = null;

  function handleTouchStart(e) {
    xDown = e.touches[0].clientX;
    yDown = e.touches[0].clientY;
  };

  function handleTouchMove(e) {
    if (!xDown || !yDown) {
      return;
    }

    let xUp = e.touches[0].clientX;
    let yUp = e.touches[0].clientY;

    let xDiff = xDown - xUp;
    let yDiff = yDown - yUp;
    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      if (xDiff > 0) {
        /* left swipe */
        let newSection = showContentSection + 1
        if (newSection === props.content.length) {
          newSection = 0
        }
        setShowContentSection(newSection)
        main.classList.add('active')
        setTimeout(() => {
          main.classList.remove('active')
        }, 1000)
      } else {
        /* right swipe */
        let newSection = showContentSection - 1
        if (newSection < 0) {
          newSection = props.content.length - 1
        }
        setShowContentSection(newSection)
        main.classList.add('active')
        setTimeout(() => {
          main.classList.remove('active')
        }, 1000)

      }
    }
    /* reset values */
    xDown = null;
    yDown = null;
  };


  return (
    <main className="main"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}>
      <div className="main-wrap" >
        {props.content[showContentSection].section}
      </div>
    </main>
  )
}
export default Main