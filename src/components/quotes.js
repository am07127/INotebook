import React, { useState, useEffect } from 'react';

const quotes = [
  'Working as a trained beautician, the earnings I make will help me continue my education as well ~Kiran',
  'With the new digital skills I acquire, I can earn well and become the support of my family ~Mahnoor',
  'With acquired knowledge and certification in digital marketing and design, I now feel empowered to secure my future ~Maryam',
  'After completing computer and language courses I would feel much more confident applying for well-paying jobs ~Jashwanti',

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
