import React, { useState } from 'react';

const Card = ({ title, features, imageUrl }) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
      <img className="w-full h-48 object-cover" src={imageUrl} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <ul className="text-gray-700 text-base">
          {features.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>
      <div className="px-6 pt-4 pb-2">
        <button 
          onClick={handleLike} 
          className={`text-2xl transition-all duration-300 ${isLiked ? 'text-red-500 scale-125' : 'text-gray-500'}`}
        >
          ♥
        </button>
      </div>
    </div>
  );
};

export default Card;