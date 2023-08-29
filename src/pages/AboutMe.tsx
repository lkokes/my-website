import React from "react";

type Props = {};

const AboutMe = (props: Props) => {
  return (
    <>
      <h2 className="text-xl font-semibold mb-2 ">About me</h2>
      <div className="max-w-screen-md text-gray-600">
        <p className="mt-2 indent-6">
          I am a software developer with experience in building web
          applications. My passion is to create beautiful, responsive,
          user-friendly websites. I'm always eager to learn new things. I have
          developed skills in HTML5/CSS3, JavaScript ES6+, Typescript alongside
          frameworks like ReactJS and Angular 13+. I also know how to work with
          databases such as MS SQL. I also have knowledge about the use of
          version control systems like Git and GitHub.
        </p>

        <p className="mt-4 indent-6">
          My main focus has been developing front end components using ReactJs
          and TypeScript. I use Tailwind CSS for styling my projects.
        </p>

        <p className="mt-4 indent-6">
          I love working on challenging projects that require creativity and
          problem solving. I'm currently looking for opportunities where I can
          utilize my knowledge of programming languages, frameworks, and
          technologies to build scalable applications. I like to work as part of
          an agile team and enjoy learning new techniques and tools. I believe
          that the best way of learning something is by doing it yourself! My
          goal is to become an expert in this field.
        </p>

        <p className="mt-4 indent-6">
          In my free time I enjoy playing video games or watching movies. When
          not coding you will find me hiking, gardening, cooking or watching
          football on TV. I also like playing boardgames.
        </p>
      </div>
    </>
  );
};

export default AboutMe;
