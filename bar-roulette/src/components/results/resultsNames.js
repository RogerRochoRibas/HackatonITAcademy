import {useEffect, useState} from 'react';
import inputPeople from './InputPeople';


const resultNames = () => {
  const [email, setEmail] = useState(0);

  function randomName() {
    return Math.random();
  }

  useEffect(() => {
    const interval = setInterval(() => {
      // 👇️ generate random number between 1 and 10
      setNum(randomNumberInRange(1, 10));
    }, 1000); // 👈️ runs every 1 second

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      <h2>number is: {num}</h2>
    </div>
  );
};

export default resultNames;