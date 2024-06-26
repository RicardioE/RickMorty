import React from "react";
import useFetch from "../hooks/useFetch";
import "./styles/residentCard.css";

const ResidentCard = ({ url }) => {
  const [resident] = useFetch(url);
  //   console.log(resident);
  return (
    <article className="resident">
      <header className="resident__header">
        <img className="resident__avatar" src={resident?.image} alt="" />
        <div className="resident__status">
          <div className={`resident__status-circle ${resident?.status}`}></div>
          <span className="resident__status-label">{resident?.status}</span>
        </div>
      </header>
      <section className="resident__body">
        <h3 className="resident__name">{resident?.name}</h3>
        <hr className="resident__hr" />
        <ul className="resident__list">
          <li className="resident__item">
            <span className="resident__label">Especie:</span>
            <span className="resident__value">{resident?.species}</span>
          </li>
          <li className="resident__item">
            <span className="resident__label">Origen:</span>
            <span className="resident__value">{resident?.origin.name}</span>
          </li>
          <li className="resident__item">
            <span className="resident__label">Episodios donde aparece: </span>
            <span className="resident__value">{resident?.episode.length}</span>
          </li>
        </ul>
      </section>
    </article>
  );
};

export default ResidentCard;
