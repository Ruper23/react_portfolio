import './NavBar.scss'
import NavBarItem from './NavBarItem'
const NavBar = () => {
  return (
    <nav className="nav">

      <NavBarItem />

      <div className="nav-footer">
        <ul className="social">
          <li className="social-item">
            <a href="https://www.linkedin.com/in/vitali-skarbinski-fe/"><i className="fa-brands fa-linkedin"></i></a>
          </li>
          <li className="social-item">
            <a href="https://www.linkedin.com/in/vitali-skarbinski-fe/"><i className="fa-brands fa-square-instagram"></i></a>
          </li>
          <li className="social-item">
            <a href="https://www.linkedin.com/in/vitali-skarbinski-fe/"><i className="fa-brands fa-square-facebook"></i></a>
          </li>
          <li className="social-item">
            <a href="https://www.linkedin.com/in/vitali-skarbinski-fe/"><i className="fa-brands fa-vk"></i></a>
          </li>
          <li className="social-item">
            <a href="https://www.linkedin.com/in/vitali-skarbinski-fe/"><i className="fa-brands fa-square-github"></i></a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
export default NavBar