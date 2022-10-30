import './ContactForm.scss'
import React from 'react'

const ContactForm = () => {
  // const frog = document.querySelector('.frog')


  const frogLooksHandler = () => {
    // frog.classList.toggle('active')
  }
  const frogActionHandler = (e) => {
    // e.preventDefault()
    // frog.classList.add('animated')
    // frog.classList.add('active')
    // setTimeout(() => {
    //   frog.classList.remove('animated')
    // }, 5000)
  }



  return (
    <form action="#" className="contact-form" id='form'>
      <h4 className='form-title'>Обратная Связь</h4>
      <label htmlFor="name">Ваше имя:</label>
      <input type="text" id='name' />
      <label htmlFor="email">Адрес почты:</label>
      <input type="email" id='email' />
      <label htmlFor="text">Введите текст</label>
      <textarea type="text" id='text' />
      <button type='submit'
        onMouseOver={frogLooksHandler}
        onMouseLeave={frogLooksHandler}
        onClick={frogActionHandler}>Отправить</button>
      <div className="frog">

      </div>


    </form>
  )
}
export default ContactForm