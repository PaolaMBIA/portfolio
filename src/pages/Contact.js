import React from "react";
import { useState } from "react";

import enveloppe from '../assets/image/enveloppe.png'

import { motion } from "framer-motion";

const transition = { duration: 1.1, ease: "easeInOut" };

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let nameS = document.getElementById("name");
    let emailS = document.getElementById("email");
    let messageS = document.getElementById("message");
    let formMess = document.querySelector(".form-message");

    const isEmail = () => {
      let isMail = document.getElementById("not-mail");
      let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

      if (email.match(regex)) {
        isMail.style.display = "none";
        return true;
      } else {
        isMail.style.display = "block";
        isMail.style.animation = "dongle 1s";
        setTimeout(() => {
          isMail.style.animation = "none";
        }, 1000);
        return false;
      }
    };

    if (name && isEmail() && message) {
      const templateId = "template_aofmtvBG";

      nameS.classList.remove("red");
      emailS.classList.remove("red");
      messageS.classList.remove("red");

      sendFeedback(templateId, {
        name,
        email,
        message,
      });
    } else {
      formMess.innerHTML = "Merci de remplir correctement les champs requis *";
      formMess.style.background = "rgb(253, 87, 87)";
      formMess.style.opacity = "1";

      if (!name) {
        nameS.classList.add("error");
      }
      if (!email) {
        emailS.classList.add("error");
      }
      if (!message) {
        messageS.classList.add("error");
      }
    }
  };

  const sendFeedback = (templateId, variables) => {
    let formMess = document.querySelector(".form-message");

    window.emailjs
      .send("gmail", templateId, variables)
      .then((res) => {
        formMess.innerHTML =
          "Message envoyé ! Nous vous recontacterons dès que possible.";
        formMess.style.background = "#00c1ec";
        formMess.style.opacity = "1";

        document.getElementById("name").classList.remove("error");
        document.getElementById("email").classList.remove("error");
        document.getElementById("message").classList.remove("error");
        setName("");
        setEmail("");
        setMessage("");

        setTimeout(() => {
          formMess.style.opacity = "0";
        }, 5000);
      })
      .catch(
        (err) =>
          (formMess.innerHTML =
            "Une erreur s'est produite, veuillez réessayer.")
      );
  };

  const postVariants = {
    initial: { y: -60, opacity: 0 },
    enter: { y: 0, opacity: 1, transition },
    exit: { y: 60, opacity: 0, transition }
  };
  
  const imageVariants = {
    initial: { y: 60, opacity: 0 },
    enter: { y: 0, opacity: 1, transition },
    exit: { y: -60, opacity: 0, transition }
  };
  

  return (
    <div className="content3">
      <motion.form
        className="contact-form"
        initial="exit"
        animate="enter"
        exit="exit"
        variants={postVariants}
      >
        <h2 className="myTitleContact">Me contacter</h2>
        <div className="myForm">
          <div className="form-content">
            <input
              type="text"
              id="name"
              name="name"
              required
              onChange={(e) => setName(e.target.value)}
              placeholder="nom *"
              value={name}
            />
            <div className="email-content">
              
              <input
                type="mail"
                id="email"
                name="email"
                required
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email *"
                value={email}
              />
              <label id="not-mail">Email non valide</label>
            </div>
            <textarea
              id="message"
              name="message"
              onChange={(e) => setMessage(e.target.value)}
              placeholder="message *"
              value={message}
              required
            />
          </div>
          <input
            className="button hover"
            type="submit"
            value="envoyer"
            onClick={handleSubmit}
          />
        </div>
        <div className="form-message"></div>
        <div className="myGif">
          <iframe title="send" src="https://giphy.com/embed/jwXoaQKjk9L1i8btPi" ></iframe>
        </div>
      </motion.form>
      <motion.div
        className="mySend"
        initial="exit"
        animate="enter"
        exit="exit"
        variants={imageVariants}
      >
        <img src={enveloppe} alt="enveloppe" />
      </motion.div>
    </div>
    
  );
};

export default Contact;
