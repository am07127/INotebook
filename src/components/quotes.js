import React, { useState, useEffect } from 'react';

const quotes = [
  'Quote 1: Your first quote goes here.',
  'Quote 2: Add your second quote.',
  'Quote 3: Continue with more quotes.',
];

const QuoteSlideshow = () => {
  const [currentQuoteIndex, setCurrentQuoteIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuoteIndex((prevIndex) =>
        prevIndex === quotes.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-center h-48 bg-gray-200">
      <div className="text-center">
        <p className="text-2xl text-gray-800">{quotes[currentQuoteIndex]}</p>
      </div>
    </div>
  );
};

export default QuoteSlideshow;
