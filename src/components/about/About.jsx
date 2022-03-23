import "./About.scss";
export const About = () => {
  const name = "Saikat Kundu";
  return (
    <div className="about" id="about">
      <div className="wrapper">
        <h1>About Me</h1>
        <h2>
          Hey, My name is {name}. I have completed my Graduation in Bachelor in
          Engineering(Electronics and Communication Engineering) from Burdwan,
          West Bengal.
        </h2>
        <h2>
          I'm a passionate coder and an enthusiastic Web Developer capable of
          applying programming skills to solve complex problems. Seeking a
          challenging role in the field of web development that will offer an
          opportunity for further development of my abilities, skills and
          knowledge in an organization.
        </h2>
        <h2>
          Apart from coding I also like Touring and Blog Writing. I also enjoy
          riding bikes at weekend.
        </h2>
      </div>
    </div>
  );
};
