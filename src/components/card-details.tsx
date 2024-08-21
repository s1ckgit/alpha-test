import { useNavigate, useParams } from 'react-router-dom';
import { useGetCardsQuery } from '../services/cards';
import MessageContainer from '../components/message-container';

import './card-details.css';

const CardDetails = () => {
  const { cardId } = useParams();
  const navigate = useNavigate();
  const { data: cards, error, isLoading } = useGetCardsQuery();

  const cardIdNumber = parseInt(cardId || '', 10);

  const card = cards?.find((card) => card.id === cardIdNumber);

  if (isLoading) return <MessageContainer><p>Loading...</p></MessageContainer>;
  if (error) return <MessageContainer><p>Error loading data</p></MessageContainer>;

  if (!card) {
    return <MessageContainer><p>Card not found</p></MessageContainer>;
  }

  return (
    <div className='card-details-container'>
      <div className='card-details'>
        <img src={card.url} alt={card.title} />
        <p>{card.title}</p>
        <p>id: {card.id}</p>
      </div>
      <button
        className='card-details-back'
        onClick={() => navigate(-1)}
      >
        Вернуться назад
      </button>
    </div>
  );
};

export default CardDetails;
