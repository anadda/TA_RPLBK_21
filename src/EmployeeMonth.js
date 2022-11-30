import React, { useState, useEffect, useRef } from 'react';
import './EmployeeMonth.css';

export default function Index() {
  const [quotes, setQuotes] = useState('');
  const textRef = useRef();

  const getQuote = () => {
    fetch('https://type.fit/api/quotes')
      .then((res) => res.json())
      .then((data) => {
        let randomIndex = Math.floor(Math.random() * data.length);
        setQuotes(data[randomIndex]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const randColor = () => {
    const hex = Math.floor(Math.random() * 16777215).toString(16);
    return '#' + hex;
  };

  useEffect(() => {
    getQuote();
  }, []);

  useEffect(() => {
    textRef.current.style.color = randColor();
  }, [quotes]);

  return (
    <div className="Main">
      <p className="Text"> Learn useEffect</p>
      <p>KELOMPOK 21</p>
      <div className="quote">
        <p ref={textRef}>{quotes.text}</p>
        <p>- {quotes.author === null ? 'Unknown' : `${quotes.author}`}</p>
        <div className="btnContainer">
          <button className="btn" onClick={getQuote}>
            Get quote
          </button>
        </div>
      </div>
    </div>
  );
}
