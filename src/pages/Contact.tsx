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
        <p>Email: lkokesova@gmail.com</p>
        <p>
          LinkedIn:{" "}
          <a href="https://www.linkedin.com/in/lucia-kokesova/">
            Lucia Kokešová
          </a>
        </p>
      </div>
    </>
  );
};

export default Contact;
