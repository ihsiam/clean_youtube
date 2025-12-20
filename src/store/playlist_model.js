import { action, thunk } from 'easy-peasy';
import getPlayList from '../api/api';

const playlistModel = {
    data: {},
    error: "",
    isLoading: false,
    addPlaylist: action((state, payload) => {
      state.data[payload.playListId] = payload;
      return state;
    }),
    setLoading: action((state, payload) => {
      state.isLoading = payload;
    }),
    setError: action((state, payload) => {
      state.error = payload;
    }),
    getPlaylist: thunk(
      async ({ addPlaylist, setLoading, setError }, payload, { getState }) => {
        if (getState().data[payload]) {
          return;
        }

        setLoading(true);

        try {
          const data = await getPlayList(payload);
          addPlaylist(data);
        } catch (e) {
          setError(e.response?.data?.error?.message || "Something went wrong");
        } finally {
          setLoading(false);
        }
      }
    ),
};

export default playlistModel;