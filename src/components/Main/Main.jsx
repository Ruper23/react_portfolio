import './Main.scss'
import React from 'react'

const Main = (props) => {
  let showContentSection = props.section

  // const setNewSection = () => {
  //   showContentSection = props.section
  // }
  //setNewSection(showContentSection)

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
        showContentSection--
        if (showContentSection < 0) {
          showContentSection = props.content.length - 1
        }
        console.log(showContentSection);
      } else {
        /* right swipe */
        showContentSection++
        if (showContentSection === props.content.length) {
          showContentSection = 0
        }
        console.log(showContentSection);
      }
    }
    /* reset values */
    xDown = null;
    yDown = null;
  };


  return (
    <main className="main">
      <div className="main-wrap"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        /* onClick={() => console.log(showContentSection)} */>
        {props.content[showContentSection].section}
      </div>
    </main>
  )
}
export default Main