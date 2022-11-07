import './ContactForm.scss'
import { useForm, ValidationError } from '@formspree/react';

const ContactForm = () => {

  const [state, handleSubmit] = useForm("mvoyweal");
  if (state.succeeded) {
    return <p className='send-form'>Спасибо за Обратную связь</p>;
  }

  return (
    <form onSubmit={handleSubmit} className="contact-form" id='form'>
      <h4 className='form-title'>Обратная Связь</h4>
      <label htmlFor="name">Ваше имя:</label>
      <input type="text" id='name' name="name" />
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
      <button type='submit' disabled={state.submitting}>Отправить</button>
    </form>
  )
}
export default ContactForm