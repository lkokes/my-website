import React from "react";

type Props = {};

const Contact = (props: Props) => {
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
        <form className="mt-2">
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
              className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
              className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
              className="mt-1 p-2 block w-full border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Send
          </button>
        </form>
      </div>
    </>
  );
};

export default Contact;
