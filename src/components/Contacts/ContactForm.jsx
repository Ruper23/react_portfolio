import './ContactForm.scss'
import React from 'react'
import { useForm, ValidationError } from '@formspree/react';

const ContactForm = () => {
  /*   const frog = document.querySelector('.frog')
  
  
    const frogLooksHandler = () => {
      frog.classList.toggle('active')
    }
    const frogActionHandler = (e) => {
      e.preventDefault()
      frog.classList.add('animated')
      frog.classList.add('active')
      setTimeout(() => {
        frog.classList.remove('animated')
      }, 5000)
    } */

  const [state, handleSubmit] = useForm("mvoyweal");
  if (state.succeeded) {
    return <p>Спасибо за внимание</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="contact-form" id='form'>
      <h4 className='form-title'>Обратная Связь</h4>
      <label htmlFor="name">Ваше имя:</label>
      <input type="text" id='name' />
      <label htmlFor="email">Адрес почты:</label>
      <input type="email" id='email' name="email" />
      <ValidationError
        prefix="Email"
        field="email"
        errors={state.errors}
      />
      <label htmlFor="text">Введите текст</label>
      <textarea id="message" name="message" />
      <ValidationError
        prefix="Message"
        field="message"
        errors={state.errors}
      />
      <button type='submit' disabled={state.submitting}
      /*   onMouseOver={frogLooksHandler}
        onMouseLeave={frogLooksHandler}
        onClick={frogActionHandler} */>Отправить</button>
      {/* <div className="frog">

      </div>
 */}

    </form>
  )
}
export default ContactForm