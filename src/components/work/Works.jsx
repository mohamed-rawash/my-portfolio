import { useState, useEffect } from "react";
import { projectsData, projectsNav } from "./Data";
import WorkItems from "./WorkItems";

const Works = () => {
  const [item, setItem] = useState({ name: "all" });
  const [projects, setProjects] = useState([]);
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (item.name === "all") {
      setProjects(projectsData);
    } else {
      const filterProjects = projectsData.filter(
        (project) =>
          project.category.toLocaleLowerCase() === item.name.toLocaleLowerCase()
      );
      setProjects(filterProjects);
    }
  }, [item]);

  const handleClick = (e, index) => {
    setItem({ name: e.target.textContent });
    setActive(index);
  };

  return (
    <>
      <div className="work__filters">
        {projectsNav.map((item, index) => {
          return (
            <span
              onClick={(e) => handleClick(e, index)}
              className={
                active === index ? "work__item work__item-active" : "work__item"
              }
              key={item.name}
            >
              {item.name}
            </span>
          );
        })}
      </div>
      <div className="work__container container grid">
        {projects.map((item) => {
          return <WorkItems item={item} key={item.id} />;
        })}
      </div>
    </>
  );
};

export default Works;
