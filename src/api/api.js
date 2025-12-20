import axios from "axios";

const key = import.meta.env.VITE_API_KEY;

const getPlayListItems = async (playListId, pageToken = "", result = []) => {
  const url = `https://www.googleapis.com/youtube/v3/playlistItems?key=${key}&part=id,contentDetails,snippet&maxResults=50&playlistId=${playListId}&pageToken=${pageToken}`;

  const { data } = await axios.get(url);

  result = [...result, ...data.items];

  if (data.nextPageToken) {
    result = await getPlayListItems(playListId, data.nextPageToken, result);
  }

  return result;
};

const getPlayList = async (playListId) => {
    const url = `https://www.googleapis.com/youtube/v3/playlists?part=snippet&id=${playListId}&key=${key}`;

    const { data } = await axios.get(url);

    let playListItems = await getPlayListItems(playListId);

    const {
      channelId,
      title: playListTitle,
      description: playListdescription,
      thumbnails,
      channelTitle,
    } = data?.items?.[0]?.snippet ?? {};

    playListItems = playListItems.map((item) => {
      const {
        title,
        description,
        thumbnails: { medium },
      } = item.snippet;

      return {
        title,
        description,
        thumbnails: medium,
        contentDetails: item.contentDetails,
      };
    });

    return {
      playListId,
      playListTitle,
      channelId,
      channelTitle,
      playListdescription,
      playlistThumbnails: thumbnails.default,
      playListItems,
    };
  };

export default getPlayList;


