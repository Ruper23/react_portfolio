import './Home.scss'
const Home = () => {
  return (
    <section className="home">
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