import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { useTranslations } from "next-intl";

const Contactus = () => {
  const t = useTranslations("Contactform");
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

    setTimeout(() => {
      setShowToast(true);
      setFormData({
        name: "",
        phone: "",
        email: "",
        service: "0",
        message: "",
      });

      
      setTimeout(() => {
        setShowToast(false);
      }, 3000); 
    }, 1000); 
  
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
          {t("title")}
          </h2>
          <div className="mx-auto w-full max-w-xs lg:max-w-7xl grid gap-4 mb-6 md:grid-cols-2">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="block w-full placeholder:text-md md:placeholder:text-lg p-4 rounded-lg"
              placeholder={t("nom")}
              required
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="block w-full placeholder:text-md md:placeholder:text-lg p-4 rounded-lg"
              placeholder={t("num")}
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
              placeholder={t("email")}
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
              {t("select.selected")}
              </option>
              <option value="Nettoyage All">{t("select.allService")}</option>
              <option value="Nettoyage des façades">{t("select.service1")}</option>
              <option value="Nettoyage des Panneaux Solaires">{t("select.service2")}</option>
              <option value="reparations electriques a domicile">{t("select.service3")}</option>
              <option value="reparations de l'eau a domicile">{t("select.service4")}</option>
              <option value="destruction des insectes nuisibles">{t("select.service5")}</option>
            </select>
          </div>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="rounded-2xl w-full placeholder:text-md md:placeholder:text-lg px-6 py-4 mb-6"
            placeholder={t("vmessage")}
            rows="4"
            required
          ></textarea>
          <div className="flex justify-center">
            <button
              type="submit"
              className="rounded-full bg-gradient-to-r from-blue600 to-red600 text-white font-bold py-4 px-6 min-w-40 hover:bg-blue800 transition-all"
            >
              {t("button")}
            </button>
          </div>
        </Fade>
      </form>

      {/* Toast notification */}
      {showToast && (
        <div className="fixed inset-0 flex items-center justify-center ">
          <div className="max-w-2xl bg-gradient-to-r from-blue600 to-red600 text-white  font-bold px-6 py-3 rounded-lg shadow-lg">
          {t("message")}
          </div>
        </div>
      )}
    </>
  );
};

export default Contactus;
