import './AboutMe.scss'

const AboutMe = () => {
  return (
    <section className="about">
      <div className="about-content">
        <div className="content-img">
          <img src="./public/img/About.jpg" alt="MyPhoto" />
        </div>
        <div className="content-description">
          <h3 className="description-title slide-title">Обо мне</h3>
          <p className="description-text">Трудолюбив и привык добиваться поставленных целей.</p>
          <p className="description-text">Всегда нравилось выполнять работу и видеть  результат. Большое удовольствие приносит
            решать  задачи и воплощать в жизнь задумки, особенно, если они нестандартные.

          </p>
          <p className="description-text">Хорошо развиты воображение и дизайнерские навыки. Коммуникабельный, легко обучаюсь, усердный, самоучка.</p>
          <p className="description-text">Как хобби развиваю ВЭБ разработку, создание сайтов и браузерных приложений.
            Неплохо владею такими языками как HTML, CSS, JavaScript.</p>
        </div>
      </div>
    </section>
  )
}
export default AboutMe