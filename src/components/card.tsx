import type { MouseEvent } from 'react';

import LikeIcon from '../icons/like-icon.svg?react';
import DeleteIcon from '../icons/delete-icon.svg?react';

import { useAppDispatch, useAppSelector } from '../store/store';
import { deleteCard, toggleLike } from '../store/features/cards-slice';

import './card.css';
import { useNavigate } from 'react-router-dom';


interface CardProps {
  id: number
  title: string
  thumbnailUrl: string
}

const Card = ({ id, title, thumbnailUrl }: CardProps) => {
  const dispatch = useAppDispatch();
  const isLiked = useAppSelector((state) => state.cards.likedCards.includes(id));
  const navigate = useNavigate();

  const onLikeToggle = (e: MouseEvent) => {
    e.stopPropagation();
    dispatch(toggleLike(id));
  };

  const onDelete = (e: MouseEvent) => {
    e.stopPropagation();
    dispatch(deleteCard(id));
  };

  return (
    <div className='card' onClick={() => navigate(`/card/${id}`)}>
      <img className='card-image' src={thumbnailUrl} alt={title} />
      <div className='card-info'>
        <p className='card-title'>
          {title}
        </p>
        <div className='card-buttons'>
          <button 
            onClick={onLikeToggle}
          >
            <LikeIcon 
              width={24} 
              height={24} 
              fill={
                isLiked ? '#000' : '#fff'
              } 
            />
          </button>

          <button 
            onClick={onDelete}
          >
            <DeleteIcon 
              width={24} 
              height={24}
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
