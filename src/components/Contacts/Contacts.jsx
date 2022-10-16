import ContactForm from './ContactForm'
import './Contacts.scss'
const Contacts = () => {
  return (
    <section className="contacts">
      <div className="contacts-wrap container">
        <h3 className="contacts-title slide-title">Контакты</h3>
        <ul className="contacts-list">
          <li className='contats-list__list'><address><i className="fa-solid fa-location-dot"></i>Гродно,Беларусь</address> </li>
          <li className='contats-list__list'><a href="tel:+375298689474"><i className="fa-solid fa-phone"></i> +375(29)86-89-474</a></li>
          <li className='contats-list__list'><a href="mailto:sfc-ruper@mail.ru"><i className="fa-solid fa-envelope"></i>sfc-ruper@mail.ru</a></li>
          <li className='contats-list__list'><i className="fa-brands fa-telegram"></i>@Ruper292</li>
          <li className='contats-list__list'><i className="fa-brands fa-discord"></i>Ruper#8847</li>
          <li className='contats-list__list'><a href="https://www.linkedin.com/in/vitali-skarbinski-fe/"><i className="fa-brands fa-linkedin"></i>LinkedIn</a></li>
        </ul>
        <ContactForm />

      </div>
    </section >
  )
}
export default Contacts