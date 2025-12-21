import { Box, Grid, Typography } from "@mui/material";
import { useStoreActions, useStoreState } from "easy-peasy";
import PlaylistCard from "../playlist-card/PlaylistCard";

export default function AllPlaylist() {
  const playlists = useStoreState((state) => state.playlists.data);

  const addToFavourite = useStoreActions(
    (actions) => actions.favorites.addToFavourite
  );

  const playListArray = Object.values(playlists);

  return (
    <Box>
      <Typography variant="h4" fontWeight={700} gutterBottom>
        All Playlists
      </Typography>

      {playListArray.length > 0 && (
        <Grid container alignItems="stretch">
          {playListArray.map((item) => (
            <Grid key={item.playListId} size={{ xs: 12, md: 6, lg: 4 }} mb={2}>
              <PlaylistCard
                playlistThumbnails={item.playlistThumbnails}
                playListTitle={item.playListTitle}
                channelTitle={item.channelTitle}
                playListId={item.playListId}
                btnText="ADD TO FAVORITE"
                action={addToFavourite}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
}
