import { Container, Grid } from "@mui/material";
import { useStoreState } from "easy-peasy";
import PlaylistCard from "../components/playlist-card/PlaylistCard";

const Home = () => {
  const playlists = useStoreState((state) => state.playlists.data);
  const playListArray = Object.values(playlists);

  return (
    <Container maxWidth={"lg"} sx={{ my: 16 }}>
      {playListArray.length > 0 && (
        <Grid container alignItems="stretch">
          {playListArray.map((item) => (
            <Grid key={item.playListId} size={{ xs: 12, md: 6, lg: 4 }} mb={2}>
              <PlaylistCard
                playlistThumbnails={item.playlistThumbnails}
                playListTitle={item.playListTitle}
                channelTitle={item.channelTitle}
                playListId={item.playListId}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default Home;
