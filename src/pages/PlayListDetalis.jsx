import { Container } from "@mui/material";
import { useStoreActions, useStoreState } from "easy-peasy";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import PlaylistPlayer from "./PlaylistPlayer";

const PlayListDetalis = () => {
  const { playListId } = useParams();
  const playlist = useStoreState((state) => state.playlists.data[playListId]);
  const addToRecent = useStoreActions((actions) => actions.recent.addToRecent);

  useEffect(() => {
    addToRecent(playListId);
  }, []);

  return (
    <Container maxWidth={"lg"} sx={{ my: 16 }}>
      <PlaylistPlayer playlist={playlist} />
    </Container>
  );
};

export default PlayListDetalis;
