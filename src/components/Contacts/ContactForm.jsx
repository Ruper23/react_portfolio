import './ContactForm.scss'

const ContactForm = () => {
  return (
    <form action="" className="contact-form">
      <h4 className='form-title'>Обратная Связь</h4>
      <label htmlFor="name">Ваше имя:</label>
      <input type="text" id='name' />
      <label htmlFor="email">Адрес почты:</label>
      <input type="email" id='email' />
      <label htmlFor="text">Введите текст</label>
      <textarea type="text" id='text' />
      <button type='submit'>Отправить</button>

    </form>
  )
}
export default ContactForm