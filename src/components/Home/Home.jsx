import './Home.scss'
const Home = () => {
  const frameSize = window.matchMedia("(min-width: 768px)").matches

  return (
    <section className={frameSize ? 'home' : 'home swipe'}>
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