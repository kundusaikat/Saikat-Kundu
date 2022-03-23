import "./Skills.scss";

export const Skills = () => {
  const skillList = [
    {
      id: 101,
      title: "JavaScript",
      img: "assets/javaScript.png",
    },
    {
      id: 102,
      title: "HTML 5",
      img: "assets/html5.png",
    },
    {
      id: 103,
      title: "CSS 3",
      img: "assets/css3.png",
    },
    {
      id: 104,
      title: "NodeJS",
      img: "assets/nodejs.png",
    },
    {
      id: 105,
      title: "MongoDB",
      img: "assets/mongodb.png",
    },
    {
      id: 106,
      title: "Express",
      img: "assets/expressjs.png",
    },
    {
      id: 107,
      title: "Material UI",
      img: "assets/materialui.png",
    },
    {
      id: 108,
      title: "Netlify",
      img: "assets/Netlify.png",
    },
    {
      id: 109,
      title: "GitHub",
      img: "assets/github.png",
    },
    {
      id: 110,
      title: "Redux",
      img: "assets/redux.png",
    },
  ];
  return (
    <div className="skills" id="skills">
      <h1>Skills & Frameworks</h1>
      <div className="container">
        {skillList.map((item) => (
          <div className="item" key={item.id}>
            <div className="imgContainer">
              <img src={item.img} alt={item.title} />
            </div>
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};
