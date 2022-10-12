import './NavBarItem.scss'
const NavBarItem = () => {
  return (
    <div className="nav-body">
      <button>
        <div className="nav-item active">Главная</div>
      </button>
      <button>
        <div className="nav-item">Обо Мне</div>
      </button>
      <button>
        <div className="nav-item">Опыт</div>
      </button>
      <button>
        <div className="nav-item">Навыки</div>
      </button>
      <button>
        <div className="nav-item">Контакты</div>
      </button>
      <button>
        <div className="nav-item">Портфолио</div>
      </button>
    </div>

  )
}
export default NavBarItem