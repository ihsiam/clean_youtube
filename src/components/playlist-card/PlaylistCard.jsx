import { PlayCircleOutline } from "@mui/icons-material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { Button, Stack } from "@mui/material";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Link } from "react-router-dom";

export default function PlaylistCard({
  playlistThumbnails,
  playListTitle,
  channelTitle,
  playListId,
  btnText,
  action,
}) {
  return (
    <Card
      sx={{
        maxWidth: 345,
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CardMedia
        component="img"
        image={playlistThumbnails.url}
        alt={playListTitle}
      />

      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6" sx={{ color: "text.primary" }}>
          {playListTitle}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {channelTitle}
        </Typography>
      </CardContent>

      <CardActions
        disableSpacing
        sx={{
          mt: "auto",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Button to={`/player/${playListId}`} component={Link}>
          <Stack direction="row" spacing={1} alignItems="center">
            <PlayCircleOutline />
            <Typography variant="body2" fontWeight={600}>
              Play
            </Typography>
          </Stack>
        </Button>
        {btnText && (
          <Button onClick={() => action(playListId)}>
            <Stack direction="row" spacing={1} alignItems="center">
              <FavoriteIcon color="primary" />
              <Typography variant="body2" fontWeight={600}>
                {btnText}
              </Typography>
            </Stack>
          </Button>
        )}
      </CardActions>
    </Card>
  );
}
