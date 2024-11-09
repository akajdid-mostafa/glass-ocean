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
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const emailSent = await sendEmail(formData); // Wait for email to be sent
    if (emailSent) {
      // Only show modal and clear form if email was successfully sent
      setIsModalVisible(true); // This should make the modal visible
        console.log("Modal visibility set to true");
      setFormData({
        name: "",
        phone: "",
        email: "",
        service: "0",
        message: "",
      });
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
      if (response.ok) {
        console.log("Email sent successfully!"); // Check if this is logged
        return true; // Indicate success
      } else {
        console.log("Failed to send email");
        
        return false;
      }
    } catch (error) {
      console.error("Error:", error);
      return false;
    }
  };

  const closeModal = () => {
    setIsModalVisible(false);
  };

  return (
    <Fade direction="up" delay={1200} cascade damping={0.1} triggerOnce={true}>
      <form
        onSubmit={handleSubmit}
        className="bg-gradient-to-b from-blue200 via-Purple200 to-white p-10 rounded-xl"
      >
        <h2 className="mb-10 font-bold text-2xl md:text-4xl relative before:block before:absolute before:bg-sky-300 before:w-20 before:h-1 before:-skew-y-3 before:-bottom-4">
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
      </form>

      {/* Modal for confirmation */}
      {isModalVisible && (
        <div className="fixed inset-0 px-2 z-10 overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0 bg-gray-700 bg-opacity-75 transition-opacity"></div>
          <div className="bg-white rounded-lg shadow-xl overflow-hidden max-w-md w-full sm:w-96 md:w-1/2 lg:w-2/3 xl:w-1/3 z-50 transition-transform transform scale-100">
            <div className="bg-gradient-to-r from-blue600 to-red600 text-white px-4 py-2 flex justify-between">
              <h2 className="text-lg font-semibold">
                DEVIS DE NETTOYAGE EN LIGNE
              </h2>
            </div>
            <div className="p-4">
              <p>
                Demande de devis de nettoyage gratuit bien reçue. Notre équipe
                commerciale vous contactera bientôt.
              </p>
            </div>
            <div className="px-4 py-2 flex justify-end">
              <button
                onClick={closeModal}
                className="px-4 py-2 font-bold bg-gradient-to-r from-blue600 to-red600 text-white rounded-md w-full sm:w-auto"
              >
                Accept
              </button>
            </div>
          </div>
        </div>
      )}
    </Fade>
  );
};

export default Contactus;
