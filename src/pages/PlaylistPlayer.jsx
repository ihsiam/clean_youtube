import {
  Avatar,
  Box,
  Divider,
  List,
  ListItemAvatar,
  ListItemButton,
  ListItemText,
  Stack,
  Typography,
} from "@mui/material";
import { useState } from "react";
import YouTube from "react-youtube";

export default function PlaylistPlayer({ playlist }) {
  const items = playlist.playListItems;
  const [currentVideo, setCurrentVideo] = useState(items[0]);

  const opts = {
    width: "100%",
    playerVars: { autoplay: 1 },
  };

  return (
    <Box
      sx={{
        display: "flex",
        gap: 3,
        alignItems: "flex-start",
      }}
    >
      {/* LEFT SIDE */}
      <Box sx={{ flex: 2, minWidth: 0 }}>
        <YouTube videoId={currentVideo.contentDetails.videoId} opts={opts} />

        <Stack spacing={1.5} mt={2}>
          <Typography variant="h6" fontWeight={700}>
            {currentVideo.title}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            {playlist.channelTitle}
          </Typography>

          <Divider />

          {/* DESCRIPTION */}
          <Box
            sx={{
              maxHeight: 180,
              overflowY: "auto",
              pr: 1,
            }}
          >
            <Typography
              variant="body2"
              sx={{ whiteSpace: "pre-line" }}
              color="text.secondary"
            >
              {currentVideo.description}
            </Typography>
          </Box>
        </Stack>
      </Box>

      {/* RIGHT SIDE */}
      <Box
        sx={{
          flex: 1,
          maxHeight: "calc(100vh - 140px)",
          overflowY: "auto",
          position: "sticky",
          top: 80,
        }}
      >
        <Typography variant="h6" fontWeight={700} mb={1}>
          {playlist.playListTitle}
        </Typography>

        <List disablePadding>
          {items.map((video) => (
            <Box key={video.contentDetails.videoId}>
              <ListItemButton
                selected={
                  currentVideo.contentDetails.videoId ===
                  video.contentDetails.videoId
                }
                onClick={() => setCurrentVideo(video)}
                alignItems="flex-start"
              >
                <ListItemAvatar>
                  <Avatar
                    variant="rounded"
                    src={video.thumbnails.url}
                    sx={{ width: 96, height: 54, mr: 1 }}
                  />
                </ListItemAvatar>

                <ListItemText
                  primary={
                    <Typography variant="body2" fontWeight={600} noWrap>
                      {video.title}
                    </Typography>
                  }
                  secondary={
                    <Typography variant="caption" color="text.secondary" noWrap>
                      {playlist.channelTitle}
                    </Typography>
                  }
                />
              </ListItemButton>
              <Divider />
            </Box>
          ))}
        </List>
      </Box>
    </Box>
  );
}
