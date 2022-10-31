import ContactForm from './ContactForm'
import './Contacts.scss'
const Contacts = () => {
  return (
    <section className="contacts">
      <div className="contacts__wrap container">
        <h3 className="contacts__title slide-title">Контакты</h3>
        <ul className="contacts__list">
          <li className='contats__list-item'><address><i className="fa-solid fa-location-dot"></i>Гродно,Беларусь</address> </li>
          <li className='contats__list-item'><a href="tel:+375298689474"><i className="fa-solid fa-phone"></i> +375(29)86-89-474</a></li>
          <li className='contats__list-item'><a href="mailto:vitali.skarbinski@gmail.com"><i className="fa-solid fa-envelope"></i>vitali.skarbinski@gmail.com</a></li>
          <li className='contats__list-item'><a href="https://www.linkedin.com/in/vitali-skarbinski-fe/"><i className="fa-brands fa-linkedin"></i>LinkedIn</a></li>
          <li className='contats__list-item'><i className="fa-brands fa-telegram"></i>@Ruper292</li>
          <li className='contats__list-item'><i className="fa-brands fa-discord"></i>Ruper#8847</li>
          <li className='contats__list-item'><a href="pdf/A4.pdf" download><i className="fa-solid fa-file-arrow-down"></i>Скачать CV</a></li>
        </ul>
        <ContactForm />
      </div>
    </section >
  )
}
export default Contacts