import {} from "react";

const WorkItems = ({ item }) => {
  return (
    <div className="work__card" key={item.id}>
      <div className="work__image">
        <img src={item.image} alt="" />
      </div>
      <h3 className="work__title">{item.title}</h3>
      <div className="work__links">
        <a
          target="_blank"
          rel="noreferrer"
          href={item.demo}
          className="work__button"
        >
          Demo <i className="uil uil-arrow-right work__button-icon"></i>
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href={item.repo}
          className="work__button"
        >
          Githup Repo <i className="uil uil-arrow-right work__button-icon"></i>
        </a>
      </div>
    </div>
  );
};

export default WorkItems;
