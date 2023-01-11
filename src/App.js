import "./App.css";
import Grid from "@mui/material/Grid";
import {Box, Paper, Button} from "@mui/material";
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add';

const items = ["google", "bing","google", "bing","google", "bing","google", "bing","google", "bing","google", "bing","google", "bing"];

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Domain Search</p>
        <Paper sx={{p:1}} >
        <Stack direction="row" spacing={1}>

        <Chip
  label="googlegooglegooglegooglegoogle"
  variant="outlined"
  onDelete={()=>{}}
sx={{p:3}}
/>
<Chip
        avatar={<AddIcon />}
        variant="outlined"
        label="Add"
        sx={{p:3}}
        onClick={()=>{}}


      />
      <Button variant="contained">Search</Button>

</Stack>

        </Paper>

        <Grid
          sx={{p:2}}
          container
          spacing={2}
          display="flex"
          justifyContent="center"
        >
          {items.map((element) => (
            <Grid item xs={2}>
              <Paper>{element}</Paper>
            </Grid>
          ))}
        </Grid>
      </header>
    </div>
  );
}

export default App;
