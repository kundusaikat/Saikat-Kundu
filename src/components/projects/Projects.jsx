import "./Projects.scss";
import { ProjectList } from "../projectList/ProjectList";
import { useEffect, useState } from "react";
import {
  websiteProject,
  apiProject,
  gameProject,
  designingProject,
} from "./projectData";

export const Projects = () => {
  const [selected, setSelected] = useState("website");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "website",
      title: "Website Clone",
    },
    {
      id: "api",
      title: "API",
    },
    {
      id: "game",
      title: "Web Game",
    },
    {
      id: "designing",
      title: "Designing",
    },
  ];

  useEffect(() => {
    switch (selected) {
      case "website":
        setData(websiteProject);
        break;
      case "api":
        setData(apiProject);
        break;
      case "game":
        setData(gameProject);
        break;
      case "designing":
        setData(designingProject);
        break;
      default:
        setData(websiteProject);
    }
  }, [selected]);

  return (
    <div className="projects" id="projects">
      <h1>Projects</h1>
      <ul>
        {list.map((el) => (
          <ProjectList
            title={el.title}
            active={selected === el.id}
            setSelected={setSelected}
            id={el.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
          <div className="item" key={d.id}>
            <img src={d.img} alt="" />
            <h3>{d.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};
