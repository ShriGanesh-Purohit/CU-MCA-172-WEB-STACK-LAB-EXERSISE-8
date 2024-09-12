import React from 'react';
import Card from './Card';

const App = () => {
  const airlines = [
    {
      id: 1,
      title: "Forex Tips",
      features: ["Market Trends Analysis", "Diversification", "Technical and Fundamental Analysis:"],
      image: "/src/assets/forex.jpg"
    },
    {
      id: 2,
      title: "AI Recomendations Stock Picks",
      features: ["Data-Driven Insights", "Portfolio Optimization", "Personalized Recommendations"],
      image: "/src/assets/stock.jpg"
    },
    {
      id: 3,
      title: "Commodites Picks",
      features: ["Hedging and Inflation Protection", "Leverage and Futures Contracts", "Predictive Analysis"],
      image: "src/assets/comodity.jpg"
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