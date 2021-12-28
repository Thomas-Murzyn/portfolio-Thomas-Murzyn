import emailjs from "emailjs-com";
import { useState } from "react";

const Contact = () => {
  const [isActive, setIsActive] = useState(false);

  const sendMail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_pl24cb4",
        "template_77rif4k",
        e.target,
        "user_kRDdw3j2UfDytHYzmIZrR"
      )
      .then((res) => {
        console.log(res);
        setIsActive(true);
      })
      .catch((err) => console.log(err));
  };

  return (
    <section id="contact" className="contact-wrapper">
      <h2>Me contacter</h2>

      {!isActive ? (
        <form onSubmit={sendMail} className="contact-form">
          <label htmlFor="name">Nom</label>
          <input className="input-to-fill" type="text" name="name" id="name" />

          <label htmlFor="firstname">Prénom</label>
          <input
            className="input-to-fill"
            type="text"
            name="firstname"
            id="firstname"
          />

          <label htmlFor="user_email">Email</label>
          <input
            className="input-to-fill"
            type="email"
            name="user_email"
            id="email"
          />

          <label htmlFor="message">Message</label>
          <textarea rows="5" type="text" name="message" id="message" />

          <input type="submit" value="Envoyer" />
        </form>
      ) : (
        <div className="message-success">
          <p>Merci pour votre message.</p>
        </div>
      )}
    </section>
  );
};

export default Contact;
