import { useState } from "react";
import { useEffect } from "react";
import "./CountdownTime.css";

export default function CountdownTimer(){
  const [time, setTime] = useState(10);
  const [intervalId, setIntervalId] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  const clearIntervalFun = () =>{
    clearInterval(intervalId);
    setIsVisible(true); 
  };

  const startTimer = () => {
    setIsVisible(false);
    const id = setInterval(() => {
      setTime(prevTime => prevTime - 1);
    }, 1000);
    setIntervalId(id);
  };

  useEffect(() => {
    const id = setInterval(() => {
      setTime(prevTime => prevTime - 1);
    }, 1000);

    setIntervalId(id);

    // Остановка интервала, когда компонент размонтируется
    return () => clearInterval(id);
  }, []);

  // Остановить интервал, когда time достигает 0
  useEffect(() => {
    if (time === 0) {
      clearInterval(intervalId);
    }
  }, [time, intervalId]);

  return (
    <div className="main-block">
      <div className="timer">
        <p className="timer__data">{time}</p> 
        <div className="btn">
          <button className="btn__stop" onClick={clearIntervalFun}>Остановить таймер</button>
          {isVisible && <button className="btn__start" onClick={startTimer}>Запустить таймер</button>}
        </div>
      </div>
    </div>
  );
}
