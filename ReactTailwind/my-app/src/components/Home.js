import React from 'react';
import Card from '../components/Card';

const Home = () => {
  const cardsData = [
    {
      title: 'Card 1',
      description: 'This is the description for card 1.',
      imageUrl: 'https://images.pexels.com/photos/27001883/pexels-photo-27001883/free-photo-of-a-white-car-is-driving-down-a-city-street.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
    },
    {
      title: 'Card 2',
      description: 'This is the description for card 2.',
      imageUrl: 'https://images.pexels.com/photos/27001883/pexels-photo-27001883/free-photo-of-a-white-car-is-driving-down-a-city-street.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
    },
    {
      title: 'Card 3',
      description: 'This is the description for card 3.',
      imageUrl: 'https://images.pexels.com/photos/27001883/pexels-photo-27001883/free-photo-of-a-white-car-is-driving-down-a-city-street.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load'
    },
  ];

  return (
    <div className="flex flex-wrap justify-center">
      {cardsData.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          description={card.description}
          imageUrl={card.imageUrl}
        />
      ))}
    </div>
  );
};

export default Home;
