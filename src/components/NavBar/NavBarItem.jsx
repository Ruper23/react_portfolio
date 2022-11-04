import './NavBarItem.scss'
const NavBarItem = (props) => {

  const activeSectionHandler = e => {
    let currBtn = e.target
    const main = document.querySelector('.main')
    const navBody = document.querySelector('.nav__body')
    const navItem = document.querySelectorAll('.nav__item')
    let navItemKey = e.target.dataset.btn
    if (e.target === navBody) {
      return
    }
    main.classList.add('active')
    navBody.classList.add('blocked')
    setTimeout(() => {
      navItem.forEach(elem => {
        elem.classList.remove('active')
      })
      props.onChangeSection(+navItemKey)
      currBtn.classList.add('active')
    }, 200)
    setTimeout(() => {
      main.classList.remove('active')
      navBody.classList.remove('blocked')
    }, 1000)

  }

  return (
    <div className="nav__body" onClick={activeSectionHandler}>
      <button className="nav__item active" data-btn='0'>Главная
      </button>
      <button className="nav__item" data-btn='1'>Обо Мне
      </button>
      <button className="nav__item" data-btn='2'>Опыт
      </button>
      <button className="nav__item" data-btn='3'>Навыки
      </button>
      <button className="nav__item" data-btn='4'>Курсы
      </button>
      <button className="nav__item" data-btn='5'>Контакты
      </button>
      <button className="nav__item" data-btn='6'>Портфолио
      </button>
    </div>
  )
}
export default NavBarItem