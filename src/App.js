import { Box } from "@mui/material";
import "./App.css";
import Page from "./Page";
import Zoom from "./Zoom";

function App() {
  return (
    <Box className="App">
      <header className="App-header">
        <Page />
        <Zoom />
      </header>
    </Box>
  );
}

export default App;
