import { PlayCircleOutline } from "@mui/icons-material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
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
        width: 345, // FIXED WIDTH
        height: 350, // optional fixed height
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* IMAGE – FIXED HEIGHT */}
      <CardMedia
        component="img"
        image={playlistThumbnails.url}
        alt={playListTitle}
        sx={{
          height: 180,
          objectFit: "cover",
        }}
      />

      {/* CONTENT */}
      <CardContent sx={{ flexGrow: 1 }}>
        {/* TITLE – FIXED LINES */}
        <Typography
          variant="h6"
          sx={{
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
          }}
        >
          {playListTitle}
        </Typography>

        <Typography variant="body2" color="text.secondary" noWrap>
          {channelTitle}
        </Typography>
      </CardContent>

      {/* ACTIONS – STAY AT BOTTOM */}
      <CardActions
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
