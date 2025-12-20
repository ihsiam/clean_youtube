import { createStore, persist } from 'easy-peasy';
import favoriteModel from './favorite_model';
import playlistModel from './playlist_model';
import recentModel from './recent-model';

const store = createStore(
    persist(
      {
        playlists: playlistModel,
        favorites: favoriteModel,
        recent: recentModel,
      },
      {
        storage: "localStorage",
      }
    )
);

export default store;