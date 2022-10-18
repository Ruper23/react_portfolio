import './NavBarItem.scss'
const NavBarItem = (props) => {

  const activeSection = e => {
    let currBtn = e.target
    const navItem = document.querySelectorAll('.nav-item')
    let navItemKey = e.target.dataset.btn
    navItem.forEach(elem => {
      elem.classList.remove('active')
    })
    currBtn.classList.add('active')

    props.onChangeSection(navItemKey)
  }


  return (
    <div className="nav-body" onClick={activeSection}>
      <button className="nav-item active" data-btn='0'>Главная
      </button>
      <button className="nav-item" data-btn='1'>Обо Мне
      </button>
      <button className="nav-item" data-btn='2'>Опыт
      </button>
      <button className="nav-item" data-btn='3'>Навыки
      </button>
      <button className="nav-item" data-btn='4'>Контакты
      </button>
      <button className="nav-item" data-btn='5'>Портфолио
      </button>
    </div>

  )
}
export default NavBarItem