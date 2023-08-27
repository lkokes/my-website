import React from "react";

type Props = {};

const Portfolio = (props: Props) => {
  return (
    <>
      <h2 className="text-xl font-semibold mb-2">Portfolio</h2>
      <p className="text-gray-600">
        Check out my GitHub projects to see what I've been working on.
      </p>
      <div className="mt-4 border border-gray-300 p-4 rounded-lg shadow-md">
        <h3 className=" font-semibold mb-2">Snake game</h3>
        <p className="text-gray-600">
          The classic old snake game in HTML, CSS, JS.
        </p>
        <a
          href="https://github.com/lkokes/snake-game-js"
          className=" hover:underline mt-1 inline-block"
        >
          View Project
        </a>
      </div>
      <div className="mt-4 border border-gray-300 p-4 rounded-lg shadow-md">
        <h3 className="font-semibold mb-2">Calculator</h3>
        <p className="text-gray-600">A calculator app in ReactJS.</p>
        <a
          href="https://github.com/lkokes/calculator"
          className=" hover:underline mt-1 inline-block"
        >
          View Project
        </a>
      </div>
      <div className="mt-4 border border-gray-300 p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-2">Countdown timer</h3>
        <p className="text-gray-600">
          This is a solution to the Launch countdown timer challenge on Frontend
          Mentor.
        </p>
        <a
          href="https://github.com/lkokes/countdown-timer"
          className=" hover:underline mt-1 inline-block"
        >
          View Project
        </a>
      </div>
    </>
  );
};

export default Portfolio;
