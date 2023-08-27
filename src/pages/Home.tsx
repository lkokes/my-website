import React from "react";

type Props = {};

const Home = (props: Props) => {
  return (
    <>
      <h1 className="text-xl font-semibold mb-2">Home</h1>
      <p className="text-gray-600">
        Hello, I'm Lucka. This is my personal website where I share my thoughts
        and experiences.
      </p>
      <p className="text-gray-600 mt-2">
        Feel free to explore and learn more about me!
      </p>
    </>
  );
};

export default Home;
