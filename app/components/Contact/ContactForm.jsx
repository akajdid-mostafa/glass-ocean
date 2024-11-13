import { useState } from "react";
import { Fade } from "react-awesome-reveal";

const Contactus = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "0",
    message: "",
  });
  const [showToast, setShowToast] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Show the toast message and clear the form after a 1-second delay
    setTimeout(() => {
      setShowToast(true);
      setFormData({
        name: "",
        phone: "",
        email: "",
        service: "0",
        message: "",
      });

      // Hide the toast message after a delay
      setTimeout(() => {
        setShowToast(false);
      }, 3000); // 3 seconds delay before disappearing
    }, 1000); // 1-second delay before showing the toast and clearing the form

    // Proceed to send the email
    const emailSent = await sendEmail(formData);
    if (emailSent) {
      console.log("Email sent successfully!");
    }
  };

  const sendEmail = async (data) => {
    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      return response.ok;
    } catch (error) {
      console.error("Error:", error);
      return false;
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="bg-gradient-to-b from-blue200 via-Purple200 to-white p-10 rounded-xl"
      >
        <Fade
          direction="up"
          delay={1200}
          cascade
          damping={0.1}
          triggerOnce={true}
        >
          <h2 className="mb-10 font-bold text-2xl md:text-4xl relative before:block before:absolute  before:w-20 before:h-1 before:-skew-y-3 before:-bottom-4">
            Nous contacter rapidement
          </h2>
          <div className="mx-auto w-full max-w-xs lg:max-w-7xl grid gap-4 mb-6 md:grid-cols-2">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="block w-full placeholder:text-md md:placeholder:text-lg p-4 rounded-lg"
              placeholder="Votre nom"
              required
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="block w-full placeholder:text-md md:placeholder:text-lg p-4 rounded-lg"
              placeholder="Numéro de téléphone"
              required
            />
          </div>
          <div className="mx-auto w-full max-w-xs lg:max-w-7xl grid gap-4 mb-6 md:grid-cols-2">
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full placeholder:text-md md:placeholder:text-lg p-4 rounded-lg"
              placeholder="Adresse email"
              required
            />
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full placeholder:text-md md:placeholder:text-lg p-4 rounded-lg"
              required
            >
              <option value="0" disabled>
                Select service
              </option>
              <option value="Nettoyage All">Nettoyage All</option>
              <option value="Nettoyage Facade">Nettoyage Facade</option>
              <option value="Nettoyage Paneau">Nettoyage Paneau</option>
              <option value="Nettoyage Maison">Nettoyage Maison</option>
            </select>
          </div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="rounded-2xl w-full placeholder:text-md md:placeholder:text-lg px-6 py-4 mb-6"
            placeholder="Votre message ici"
            rows="4"
            required
          ></textarea>
          <div className="flex justify-center">
            <button
              type="submit"
              className="rounded-full bg-gradient-to-r from-blue600 to-red600 text-white font-bold py-4 px-6 min-w-40 hover:bg-blue800 transition-all"
            >
              Envoyez votre message
            </button>
          </div>
        </Fade>
      </form>

      {/* Toast notification */}
      {showToast && (
        <div className="fixed inset-0 flex items-center justify-center ">
          <div className="max-w-2xl bg-gradient-to-r from-blue600 to-red600 text-white  font-bold px-6 py-3 rounded-lg shadow-lg">
            Merci de nous avoir contactés ! Nous avons reçu vos informations et
            notre équipe vous contactera bientôt. Merci pour votre intérêt et à
            très bientôt !
          </div>
        </div>
      )}
    </>
  );
};

export default Contactus;
