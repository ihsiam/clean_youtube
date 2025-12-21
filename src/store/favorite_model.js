import { action } from 'easy-peasy';

const favoriteModel = {
    items: [],
    addToFavourite: action((state, payload) => {
      if (state.items.includes(payload)) {
      alert("This playlist is already in favorites!");
      return;
      }
      state.items.push(payload);
    }),
    removefromFavourite: action((state, payload) => {
      state.items = state.items.filter((id) => payload !== id);
    }),
};

export default favoriteModel; 