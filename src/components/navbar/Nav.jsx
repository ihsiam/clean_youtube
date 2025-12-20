import { Button, Container, Link } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import PlaylistForm from "../playlist-form/PlaylistForm";

export default function Nav() {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" color="default" sx={{ py: 2 }}>
        <Container maxWidth="lg">
          <Toolbar>
            <Stack sx={{ flexGrow: 1 }}>
              <Link
                to="/"
                component={RouterLink}
                sx={{ textDecoration: "none", color: "black" }}
              >
                <Typography variant="h5">Clean YouTube</Typography>
              </Link>
              <Link
                to="https://github.com/ihsiam"
                target={"_blank"}
                component={RouterLink}
                sx={{ textDecoration: "none", color: "black" }}
              >
                <Typography variant="body1">By ThreeDot</Typography>
              </Link>
            </Stack>
            <Button variant="contained" onClick={() => setOpen(true)}>
              add playlist
            </Button>
            <PlaylistForm open={open} handleClose={handleClose} />
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
}
