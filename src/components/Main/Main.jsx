import './Main.scss'

const Main = (props) => {

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
        changeSectionAnimation(newSection)
      } else {
        /* right swipe */
        let newSection = showContentSection - 1
        if (newSection < 0) {
          newSection = props.content.length - 1
        }
        changeSectionAnimation(newSection)
      }
    }
    /* reset values */
    xDown = null;
    yDown = null;
  };

  const changeSectionAnimation = (section) => {
    const main = document.querySelector('.main')
    main.classList.add('active')
    setTimeout(() => {
      setShowContentSection(section)
    }, 200)
    setTimeout(() => {
      main.classList.remove('active')
    }, 1000)
  }
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