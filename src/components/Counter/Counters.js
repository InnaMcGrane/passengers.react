import { useState } from "react";
import "./Counter.css";

function Counter({ title, callback, id }) {
  const [counter, setCounter] = useState(0);

  return (
    <div className="counter">
      <span className="counter__title">{title}</span>
      <div className="counter__control">
        <button className="btn btn--minus" disabled={counter === 0} onClick={() => {
          setCounter(counter - 1)
          callback(id, counter - 1)
          }}>
          -
        </button>
        <input className="input input--counter" value={counter} />
        <button className="btn btn--plus" onClick={() => {
          setCounter(counter + 1)
          callback(id, counter + 1)
          }}>
          +
        </button>
      </div>
    </div>
  );
}
export default Counter;

/* 

схема работы механизма:
1. жмем на + или -
2. изменение состояния счетчика
3. подстановка нового состояния в input
4. при новой цифре в input, срабатывает событие onChange и вызывается callback(id)

*/
