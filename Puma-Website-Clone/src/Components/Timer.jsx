import React from 'react';
import { useState, useEffect } from 'react';

function InfiniteTimer() {
  const [time, setTime] = useState({
    hours: 23,
    minutes: 59,
    seconds: 59
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(prevTime => {
        let { hours, minutes, seconds } = prevTime;
        
        // Decrement seconds
        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          // Decrement minutes when seconds reach 0
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            // Decrement hours when minutes reach 0
            if (hours > 0) {
              hours--;
            } else {
              // Reset to 23:59:59 when reaching 00:00:00
              hours = 23;
              minutes = 59;
              seconds = 59;
            }
          }
        }
        
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Format numbers to always have 2 digits
  const formatTime = (num) => num.toString().padStart(2, '0');

  return (
    <>
    <div className="timer">
        <div className="hr">
      {formatTime(time.hours)} </div> 
      <div className="min">{formatTime(time.minutes)} </div> <div className="sec"> {formatTime(time.seconds)} </div>
    </div>
    <div className="UN">
        <h1>HOURS</h1>
        <h1>MINUTES</h1>
        <h1>SECONDS</h1>
    </div>
    </>
  );
}

export default InfiniteTimer;  // Fixed: Exporting the correct component