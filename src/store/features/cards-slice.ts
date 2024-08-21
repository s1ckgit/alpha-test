import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface CardState {
  likedCards: number[]
  deletedCards: number[]
}

const initialState: CardState = {
  likedCards: [],
  deletedCards: []
};

const cardsSlice = createSlice({
  name: 'cards',
  initialState,
  reducers: {
    toggleLike: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      const isLiked = state.likedCards.includes(id);

      if(!isLiked) {
        state.likedCards.push(id);
      }
      else {
        state.likedCards = state.likedCards.filter((item) => item !== id);
      }
    },
    deleteCard: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      state.deletedCards.push(id);
      state.likedCards = state.likedCards.filter((item) => item !== id);
    }
  }
});

export const { toggleLike, deleteCard } = cardsSlice.actions;
export default cardsSlice.reducer;
