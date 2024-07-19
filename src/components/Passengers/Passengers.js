import { useState } from "react";
import Counter from "../Counter/Counters";
import "./Passengers.css";

function Passengers({ data }) {
  const [counters, setCounters] = useState({});

  const setStateAllPassengersHandler = (id, value) => {
    setCounters({ ...counters, [id]: value });
  };

  const getTotalCounters = () => {
    const result = Object.values(counters).reduce((acc, item) => {
      return acc + item;
    }, 0);
    return result;
  };

  return (
    <div className="passengers">
      <span className="passengers__title">All passengers: {getTotalCounters()} </span>
      <div className="passengers__counters">
        {data.map((el, id) => {
          return <Counter key={id} title={el} id={id} callback={setStateAllPassengersHandler} />;
        })}
      </div>
    </div>
  );
}
export default Passengers;

/* 

Этапы того, почему идет рассинхрон
1. запускается компонент Passengers
2. установка состояния -> {}
3. первая отриовка шаблона

далее
1. идет клик по какому то счетчику
2. идет вызов setStateAllPassengersHandler
3. идет изменение состояния setCounters -> строчка 10
4. идет перерисовка и 22 строка getTotalCounters() -> 

*/
