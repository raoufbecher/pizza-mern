import React, { useState, useRef } from "react";
import "../assets/contactcomponent.css";
import emailjs from "emailjs-com";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
const Result = () => {
  return (
    <p>
      Votre message a été envoyé avec succès,Nous allons vous contacter bientôt
    </p>
  );
};

function ContactComponent(props) {
  const [result, showResult] = useState(false);
  // const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_czuuhsl",
        "template_8clr4cn",
        e.target,
        "user_WzFGnr29HXGYOofqNavrS"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    showResult(true);
  };
  setTimeout(() => {
    showResult(false);
  }, 5000);
  return (
    <form onSubmit={sendEmail}>
      <div className="container">
        <div>
          <div className="formWord">
            <h2>Nous contacter </h2>
            <span>Nom et prénom</span>
            <br />
            <input className="input100" type="text" name="user_name" required />
            <br />
            <span>Numéro de telephone</span>
            <br />
            <input
              className="input100"
              type="text"
              name="user_phone"
              required
            />
            <br />
            <span>Email</span>
            <br />
            <input
              className="input100"
              type="text"
              name="user_email"
              required
            />
            <br />
          </div>
        </div>
        <div>
          <div className="formWord">
            <span>Message</span>
            <br />
            <textarea name="message" required></textarea>
            <br />
            <button>Valider</button>
            <div className="row">{result ? <Result /> : null}</div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default ContactComponent;
