"use client";

import { useState, useEffect } from "react";

export default function TwoStageForm() {
  const [formData, setFormData] = useState({
    nameEntreprise: "",
    etage: "",
    surfaceId: 0,
    ville: "",
    numberPhon: "",
    namePersone: "",
    email: "",
    Adress: "",
    codePostall: 8000,
    message: "",
    status: "PENDING",
  });
  const [surfaceOptions, setSurfaceOptions] = useState([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const fetchSurfaceOptions = async () => {
      try {
        const response = await fetch(
          "https://ocean-dashbord.vercel.app/api/surface"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log("Fetched data:", data);
        setSurfaceOptions(data);
      } catch (error) {
        console.error("Error fetching surface options:", error);
      }
    };

    fetchSurfaceOptions();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]:
        name === "surfaceId" || name === "codePostall" ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        "https://ocean-dashbord.vercel.app/api/Devis",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Error ${response.status}: ${errorText}`);
      }

      const data = await response.json();
      console.log("Form data successfully submitted:", data);
      setShowModal(true);

      setFormData({
        nameEntreprise: "",
        etage: "",
        surfaceId: 0,
        ville: "",
        numberPhon: "",
        namePersone: "",
        email: "",
        Adress: "",
        codePostall: 8000,
        message: "",
        status: "PENDING",
      });
    } catch (error) {
      console.log("Error submitting form:", error.message);
    }
  };

  return (
    <>
      <div className="mx-auto max-w-xs lg:max-w-7xl sm:py-4 lg:px-8">
        <form onSubmit={handleSubmit}>
          <div className=" mt-2 space-y-8 md:space-y-0 md:flex md:gap-8">
            <div className="space-y-4 md:w-1/2">
              <div>
                <label
                  htmlFor="nameEntreprise"
                  className="block text-sm font-medium text-gray700"
                >
                  Nom Entreprise
                </label>
                <input
                  id="nameEntreprise"
                  name="nameEntreprise"
                  value={formData.nameEntreprise}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full p-3 border border-gray300 rounded-lg shadow-sm focus:border-blue500 focus:ring focus:ring-blue500 focus:ring-opacity-50"
                />
              </div>
              <div>
                <label
                  htmlFor="etage"
                  className="block text-sm font-medium text-gray700"
                >
                  Number Étage
                </label>
                <input
                  id="etage"
                  name="etage"
                  type="number"
                  value={formData.etage}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full p-3 border border-gray300 rounded-lg shadow-sm focus:border-blue500 focus:ring focus:ring-blue500 focus:ring-opacity-50"
                />
              </div>
              <div>
                <label
                  htmlFor="surfaceId"
                  className="block text-sm font-medium text-gray700"
                >
                  Surface
                </label>
                <select
                  id="surfaceId"
                  name="surfaceId"
                  value={formData.surfaceId}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50"
                >
                  <option value="0" disabled>
                    Sélectionnez la surface
                  </option>
                  {surfaceOptions.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.valeur}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label
                  htmlFor="ville"
                  className="block text-sm font-medium text-gray700"
                >
                  Ville
                </label>
                <input
                  id="ville"
                  name="ville"
                  value={formData.ville}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full p-3 border border-gray300 rounded-lg shadow-sm focus:border-blue500 focus:ring focus:ring-blue500 focus:ring-opacity-50"
                />
              </div>
            </div>
            <div className="space-y-4 md:w-1/2">
              <div>
                <label
                  htmlFor="namePersone"
                  className="block text-sm font-medium text-gray700"
                >
                  Nom
                </label>
                <input
                  id="namePersone"
                  name="namePersone"
                  value={formData.namePersone}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full p-3 border border-gray300 rounded-lg shadow-sm focus:border-blue500 focus:ring focus:ring-blue500 focus:ring-opacity-50"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray700"
                >
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full p-3 border border-gray300 rounded-lg shadow-sm focus:border-blue500 focus:ring focus:ring-blue500 focus:ring-opacity-50"
                />
              </div>
              <div>
                <label
                  htmlFor="numberPhon"
                  className="block text-sm font-medium text-gray700"
                >
                  Number Phone
                </label>
                <input
                  id="numberPhon"
                  name="numberPhon"
                  value={formData.numberPhon}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full p-3 border border-gray300 rounded-lg shadow-sm focus:border-blue500 focus:ring focus:ring-blue500 focus:ring-opacity-50"
                />
              </div>
              <div>
                <label
                  htmlFor="Adress"
                  className="block text-sm font-medium text-gray700"
                >
                  Adresse
                </label>
                <input
                  id="Adress"
                  name="Adress"
                  value={formData.Adress}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full p-3 border border-gray300 rounded-lg shadow-sm focus:border-blue500 focus:ring focus:ring-blue500 focus:ring-opacity-50"
                />
              </div>
            </div>
          </div>
          <div>
            <label
              htmlFor="message"
              className=" mt-3 block text-sm font-medium text-gray700"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="mt-1 mb-2 block w-full p-3 border border-gray300 rounded-lg shadow-sm focus:border-blue500 focus:ring focus:ring-blue500 focus:ring-opacity-50"
            />
          </div>
          <div className="flex justify-center items-center">
            <button
              type="submit"
              className="w-full md:w-auto bg-gradient-to-r text-white font-bold mb-10 mt-6 py-4 px-10 rounded-lg border-2 border-gradient-to-r from-blue600 to-red600 hover:bg-blue700 focus:outline-none focus:ring focus:ring-blue500 focus:ring-opacity-50"
            >
              Get Simulation
            </button>
          </div>
        </form>
        {showModal && (
          <div className="fixed inset-0 px-2 z-10 overflow-hidden flex items-center justify-center">
            <div className="absolute inset-0 bg-gray700 bg-opacity-75 transition-opacity"></div>
            <div className="bg-white rounded-lg shadow-xl overflow-hidden max-w-md w-full sm:w-96 md:w-1/2 lg:w-2/3 xl:w-1/3 z-50 transition-transform transform scale-100">
              <div className="bg-gradient-to-r from-blue600 to-red600 text-white px-4 py-2 flex justify-between">
                <h2 className="text-lg font-semibold">DEVIS DE NETTOYAGE EN LIGNE</h2>
              </div>
              <div className="p-4">
                <p>
                Demande de devis de nettoyage gratuit bien reçue. Notre équipe commerciale vous contactera bientôt.
                </p>
              </div>
              <div className=" px-4 py-2 flex justify-end">
                <button
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 font-bold bg-gradient-to-r from-blue600 to-red600 text-white rounded-md w-full sm:w-auto"
                >
                  Accept
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
