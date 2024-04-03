import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import BackArrow from "./icons/BackArrow";

const Formularz = () => {
  const form = useRef();
  const [formValid, setFormValid] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_EMAILJS_USER_ID
      )
      .then((result) => {
        console.log(result.text);
        form.current.reset();
        showConfirmation();
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  const showConfirmation = () => {
    const confirmationMessage = document.querySelector(".confirmation-message");
    confirmationMessage.style.display = "block";
    setTimeout(() => {
      confirmationMessage.style.display = "none";
    }, 5000);
  };

  const handleFormChange = () => {
    const inputs = form.current.querySelectorAll("input[required]");
    let isValid = true;
    inputs.forEach((input) => {
      if (!input.value.trim()) {
        isValid = false;
      }
    });
    setFormValid(isValid);
  };

  return (
    <div className="">
      <BackArrow />

      <h1 className="padding-left-h1">Dodaj swój obiekt</h1>
      <div className="formularz">
        <form ref={form} onSubmit={sendEmail} onChange={handleFormChange}>
          <label>Możesz podać swoje email, a uwzględnimy je w publikacji</label>
          <input type="email" name="user_name" />

          <label>
            Napisz, gdzie model się znajduje (podaj współrzędne oddzielone
            przecinkiem, znajdziesz je w Google Maps) *
          </label>
          <input
            type="text"
            pattern="[0-9]+\.[0-9]+,[0-9]+\.[0-9]+"
            title="Współrzędne powinny być w formacie liczba.liczba,liczba.liczba"
            name="user_wspol"
            required
          />
          <label className="end"> *To pole jest wymagane</label>

          <label>
            Podziel się swoimi spostrzeżeniami odnośnie twojego obiektu jeżeli
            chcesz (maksymalna długość tekstu to 1000 znaków)
          </label>
          <textarea name="message" />

          <label className="custom-file-upload">
            Wybierz plik w formacie GLB
          </label>
          <input type="file" accept=".glb" required />
          <label className="end"> *To pole jest wymagane</label>

          <label className="custom-file-upload">
            Wybierz zdjęcia w formacie JPG
          </label>
          <input type="file" accept=".jpg" required />
          <label className="end"> *To pole jest wymagane</label>

          <input
            className={`send ${formValid ? "send-valid" : ""}`}
            type="submit"
            value="Wyślij"
          />
        </form>

        <div className="confirmation-message" style={{ display: "none" }}>
          Dziękujemy za wysłanie modelu
        </div>
      </div>
    </div>
  );
};

export default Formularz;
