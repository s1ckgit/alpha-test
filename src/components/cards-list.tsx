import { useState } from 'react';
import Card from './card';
import './cards-list.css';

import { useGetCardsQuery } from '../services/cards';
import { useAppSelector } from '../store/store';

const CardsList = () => {
  const { data: cards, error, isLoading } = useGetCardsQuery();
  const likedCards = useAppSelector((state) => state.cards.likedCards);
  const deletedCards = useAppSelector((state) => state.cards.deletedCards);
  const [showLiked, setShowLiked] = useState(false);

  if(isLoading) return (
    <div>
      <p>Loading...</p>
    </div>
  );

  if(error) {
    console.log(`Error: 
      ${error}
      `
    );
    return (
      <div>
        <p>
          Error loading data. Check console
        </p>
      </div>
    );
  }

  if(cards) {
    const filteredCards = 
      cards.filter((card) => !deletedCards.includes(card.id))
      .filter((card) => (showLiked ? likedCards.includes(card.id): true));

  return (
    <div className='cards-list'>

      <div className='button-container'>
        <button
          className='like-filter-button'
          onClick={() => setShowLiked(prev => !prev)}
        >
          {showLiked ? 'Показать все карточки' : 'Показать только лайкнутые карточки'}
        </button>
      </div>

      <div className='cards-container'>
        {
          filteredCards.length > 0 ? filteredCards.map((card) => (
            <Card key={card.id} id={card.id} title={card.title} thumbnailUrl={card.thumbnailUrl} />
          )) : <p className='cards-container-empty'>Нет лайкнутых карточек</p>
        }
      </div>

    </div>
  );
  }
};

export default CardsList;
