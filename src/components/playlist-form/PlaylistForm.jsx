import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";
import { useStoreActions } from "easy-peasy";
import { useState } from "react";

export default function PlaylistForm({ open, handleClose }) {
  const [value, setValue] = useState("");

  const getPlaylist = useStoreActions(
    (actions) => actions.playlists.getPlaylist
  );

  const extractPlaylistId = (input) => {
    try {
      if (input.includes("list=")) {
        return new URL(input).searchParams.get("list");
      }
      return input.trim();
    } catch {
      return input.trim();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const playListId = extractPlaylistId(value);
    if (!playListId) return;

    getPlaylist(playListId);
    setValue("");
    handleClose();
  };

  return (
    <Dialog open={open} onClose={handleClose} disableRestoreFocus>
      <DialogTitle>Add Playlist</DialogTitle>
      <DialogContent>
        <DialogContentText>
          To add playlist, please provide playlist ID or URL.
        </DialogContentText>
        <form onSubmit={handleSubmit} id="subscription-form">
          <TextField
            autoFocus
            required
            margin="dense"
            label="ID or URL"
            fullWidth
            variant="standard"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </form>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button type="submit" form="subscription-form">
          Add Playlist
        </Button>
      </DialogActions>
    </Dialog>
  );
}
