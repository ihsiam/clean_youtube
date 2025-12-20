import CssBaseline from "@mui/material/CssBaseline";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/navbar/Nav";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import PlayListDetalis from "./pages/PlayListDetalis";

function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/player/:playListId" element={<PlayListDetalis />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
