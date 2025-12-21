import { Box, Grid, Typography } from "@mui/material";
import { useStoreActions, useStoreState } from "easy-peasy";
import PlaylistCard from "../playlist-card/PlaylistCard";

export default function FavoritePlaylist() {
  const playlists = useStoreState((state) => state.playlists.data);
  const favorites = useStoreState((state) => state.favorites.items);

  const removefromFavourite = useStoreActions(
    (actions) => actions.favorites.removefromFavourite
  );

  return (
    <Box sx={{ mb: 5 }}>
      <Typography variant="h4" fontWeight={700} gutterBottom>
        Favorites
      </Typography>

      {favorites.length > 0 ? (
        <Grid container spacing={2} alignItems="stretch">
          {favorites.map((item) => {
            const data = playlists[item];
            if (!data) return null;

            return (
              <Grid key={data.playListId} xs={12} md={6} lg={4}>
                <PlaylistCard
                  playlistThumbnails={data.playlistThumbnails}
                  playListTitle={data.playListTitle}
                  channelTitle={data.channelTitle}
                  playListId={data.playListId}
                  btnText="REMOVE FROM FAVORITE"
                  action={removefromFavourite}
                />
              </Grid>
            );
          })}
        </Grid>
      ) : (
        <Typography variant="body1" color="text.secondary" sx={{ mt: 2 }}>
          No favorite playlists found.
        </Typography>
      )}
    </Box>
  );
}
