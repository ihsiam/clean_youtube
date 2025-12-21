import { Container } from "@mui/material";
import AllPlaylist from "../components/home/AllPlaylist";
import FavoritePlaylist from "../components/home/FavouritePlaylist";
import RecentPlaylist from "../components/home/RecentPlaylist";

const Home = () => {
  return (
    <Container maxWidth={"lg"} sx={{ my: 16 }}>
      <RecentPlaylist />
      <FavoritePlaylist />
      <AllPlaylist />
    </Container>
  );
};

export default Home;
