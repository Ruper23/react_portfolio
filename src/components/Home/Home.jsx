import './Home.scss'
const Home = () => {
  // const swipeAnimation = () => {
  //   const home = document.querySelector('.home')
  //   if (window.matchMedia("(max-width: 768px)")) {
  //     home.classList.add('swipe')
  //     setTimeout(() => { home.classList.remove('swipe') }, 3000)
  //   }
  // }
  // swipeAnimation()

  return (
    <section className={window.matchMedia("(max-width: 768px)") ? 'home swipe' : 'home'}>
      <div className="home__title">
        <h2 className="subtitle">Привет! Я,</h2>
        <h1 className="title">Скарбинский <br /> Виталий</h1>
        <div className="home__specialization">
          <h2 className="subtitle">Frontend</h2>
          <h2 className="subtitle">Developer</h2>
        </div>
      </div>
    </section>
  )
}
export default Home