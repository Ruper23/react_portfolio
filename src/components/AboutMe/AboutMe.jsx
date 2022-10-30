import './AboutMe.scss'

const AboutMe = () => {
  return (
    <section className="about">
      <div className="about__content">
        <div className="content__img">
          <img src="img/About.jpg" alt="MyPhoto" />
        </div>
        <div className="description">
          <h3 className="description__title slide-title">Обо мне</h3>
          <p className="description__text p-text">Трудолюбив и привык добиваться поставленных целей.</p>
          <p className="description__text p-text">Всегда довожу дело до результата. Большое удовольствие приносит
            решать  задачи и воплощать в жизнь задумки, особенно, если они нестандартные.

          </p>
          <p className="description__text p-text">Хорошо развиты воображение и дизайнерские навыки. Коммуникабельный, легко обучаюсь, усердный, самоучка.</p>
          <p className="description__text p-text">Пока как хобби развиваю ВЭБ-разработку, создание сайтов и браузерных приложений.</p>
          <p className="description__text p-text">Планирую хобби превратить в полноценную работу.</p>
        </div>
      </div>
    </section>
  )
}
export default AboutMe