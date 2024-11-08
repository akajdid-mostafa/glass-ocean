import { useState } from "react";
import { Fade } from "react-awesome-reveal";

const Contactus = () => {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        service: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        await sendEmail(formData);

        setFormData({
            name: "",
            phone: "",
            email: "",
            service: "",
            message: "",
        });
    };

    return (
        <Fade direction="up" delay={1200} cascade damping={0.1} triggerOnce={true}>
            <form onSubmit={handleSubmit} className="bg-gradient-to-b from-blue200 via-Purple200 to-white p-10 rounded-xl">
                <h2 className="mb-10 font-bold text-2xl md:text-4xl relative before:block before:absolute before:bg-sky-300 before:w-20 before:h-1 before:-skew-y-3 before:-bottom-4">
                    Nous contacter rapidement
                </h2>
                <div className="mx-auto max-w-xs lg:max-w-7xl grid gap-4 mb-6 md:grid-cols-2">
                    <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="placeholder:text-md md:placeholder:text-lg p-4 rounded-lg"
                        placeholder="Votre nom"
                        required
                    />
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="placeholder:text-md md:placeholder:text-lg p-4 rounded-lg"
                        placeholder="Number phone"
                        required
                    />
                </div>
                <div className=" mx-auto max-w-xs lg:max-w-7xl md:items-center grid gap-4 mb-6 md:grid-cols-2">
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="placeholder:text-md md:placeholder:text-lg p-4 rounded-lg"
                        placeholder="Email Adresse"
                        required
                    />
                    <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="placeholder:text-md md:placeholder:text-lg p-4 rounded-lg"
                        required
                    >
                        <option value="0" disabled>Select service</option>
                        <option value="Facade">Facade</option>
                        <option value="Solaire">Solaire</option>
                        <option value="Maison">Maison</option>
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
                    <button type="submit" className="rounded-full bg-gradient-to-r from-blue600 to-red600 text-white font-bold py-4 px-6 min-w-40 hover:bg-blue800 transition-all">
                        Envoyez votre message
                    </button>
                </div>
            </form>
        </Fade>
    );
};

const sendEmail = async (data) => {
    const emailContent = `
        Nom: ${data.name}\n
        Téléphone: ${data.phone}\n
        Email: ${data.email}\n
        Service: ${data.service}\n
        Message: ${data.message}
    `;
    
    console.log("Sending email with the following content:", emailContent);
};

export default Contactus;
