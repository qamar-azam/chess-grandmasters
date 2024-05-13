import { useState, useEffect, useRef } from 'react';

function RemainingTimer({ time }: { time: number }) {
  let intervalRef = useRef<null | any>(null);
  const [remainingTime, setRemainingTime] = useState('');

  useEffect(() => {
    if (time) {
      timer();
    }
    return () => {
      if (intervalRef.current !== null) {
        clearInterval(intervalRef.current);
      }
    };
  }, [time]);

  function timer() {
    const second = 1000,
      minute = second * 60,
      hour = minute * 60;

    let end = time * 1000;
    intervalRef.current = setInterval(function () {
      let now = new Date().getTime(),
        timeLeft = now - end;

      let hours = String(Math.floor(timeLeft / hour)).padStart(2, '0'),
        minutes = String(Math.floor((timeLeft % hour) / minute)).padStart(
          2,
          '0'
        ),
        seconds = String(Math.floor((timeLeft % minute) / second)).padStart(
          2,
          '0'
        );

      setRemainingTime(`${hours}:${minutes}:${seconds}`);

      if (timeLeft < 0) {
        setRemainingTime(`00:00:00`);
        clearInterval(intervalRef.current);
      }
    }, 1000); // time refresh in ms
  }

  return <>{remainingTime}</>;
}

export default RemainingTimer;
