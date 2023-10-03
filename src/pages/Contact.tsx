import React, { useState } from "react";
import Modal from "../components/Modal";

type Props = {};

const Contact = (props: Props) => {
  const [loading, setLoading] = useState(false);

  const [modalVisible, setModalVisible] = useState(false);
  const [modalMessage, setModalMessage] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await fetch("http://localhost:5000/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormData({
          name: "",
          email: "",
          message: "",
        });
        setModalMessage("Email sent successfully");
      } else {
        setModalMessage("Failed to send email");
      }
    } catch (error) {
      console.error(error);
      setModalMessage("An error occurred while sending the email");
    } finally {
      setLoading(false);
      setModalVisible(true);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <>
      <h2 className="text-xl font-semibold mb-2">Contact</h2>
      <p className="text-gray-600">
        I'd love to hear from you! Feel free to reach out through any of the
        following channels:
      </p>
      <div className="mt-2 text-gray-600">
        <p>
          <i className="fa-solid fa-envelope"></i> halanova.lucia@gmail.com
        </p>
        <p>
          <i className="fab fa-linkedin mr-1"></i>
          <a
            href="https://www.linkedin.com/in/lucia-kokesova/"
            className="underline hover:no-underline hover:text-indigo-600"
          >
            Lucia Halánová
          </a>
        </p>
        <p>
          <i className="fa-brands fa-github"></i>
          <a
            href="https://github.com/lkokes"
            className="underline hover:no-underline hover:text-indigo-600"
          >
            lkokes
          </a>
        </p>
      </div>

      <div className="w-1/2 border rounded-lg px-6 py-5 mt-3">
        <h3 className="text-xl font-semibold mt-3 mb-2">Contact me</h3>
        {loading && <p>Sending...</p>}
        <form className="mt-2" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email <span className="text-red-500">*</span>
            </label>
            <input
              required
              type="email"
              id="email"
              name="email"
              value={formData.email}
              className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-gray-700"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={formData.message}
              className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              onChange={handleChange}
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            disabled={loading}
          >
            Send
          </button>
        </form>
      </div>
      {modalVisible && (
        <Modal message={modalMessage} onClose={() => setModalVisible(false)} />
      )}
    </>
  );
};

export default Contact;
