import React from 'react';
import Card from './Card';

const App = () => {
  const airlines = [
    {
      id: 1,
      title: "SkyHigh Airlines",
      features: ["Direct flights", "In-flight entertainment", "Gourmet meals"],
      image: "/src/assets/skyairlines.jpg"
    },
    {
      id: 2,
      title: "Ocean Air",
      features: ["Budget-friendly", "Frequent flyer program", "24/7 customer support"],
      image: "/src/assets/ocean.jpg"
    },
    {
      id: 3,
      title: "Mountain Express",
      features: ["Pet-friendly", "Extra legroom", "Free Wi-Fi"],
      image: "src/assets/mountainairlines.jpg"
    }
  ];

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold text-center my-8">Airline Reservation</h1>
      <div className="flex flex-wrap justify-center">
        {airlines.map(airline => (
          <Card 
            key={airline.id}
            title={airline.title}
            features={airline.features}
            imageUrl={airline.image}
          />
        ))}
      </div>
    </div>
  );
};

export default App;