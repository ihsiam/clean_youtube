import { Container, Typography } from "@mui/material";
import { useStoreActions, useStoreState } from "easy-peasy";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const PlayListDetalis = () => {
  const { playListId } = useParams();
  const playlist = useStoreState((state) => state.playlists.data[playListId]);
  const addToRecent = useStoreActions((actions) => actions.recent.addToRecent);

  useEffect(() => {
    addToRecent(playListId);
  }, []);

  return (
    <Container maxWidth={"lg"} sx={{ my: 16 }}>
      <Typography variant="h2" align="center">
        {playlist.playListTitle}
      </Typography>
    </Container>
  );
};

export default PlayListDetalis;
