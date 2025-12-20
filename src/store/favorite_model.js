import { action } from 'easy-peasy';

const favoriteModel = {
    items: [],
    addToFavourite: action((state, payload) => {
      state.items.push(payload);
    }),
    removefromFavourite: action((state, payload) => {
      state.items = state.items.filter((id) => payload !== id);
    }),
};

export default favoriteModel; 