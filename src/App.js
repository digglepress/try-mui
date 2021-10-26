import React from "react";
import Navbar from "./components/Navbar";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import LeftBar from "./components/Leftbar";
import Feeds from "./components/Feeds";
import RightBar from "./components/Rightbar";
import makeStyles from "@mui/styles/makeStyles";
import AddPost from "./components/Add";

const useStyles = makeStyles((theme) => ({
  right: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div>
      <CssBaseline />
      <Navbar />
      <Grid container spacing={2}>
        <Grid item sm={2} xs={2}>
          <LeftBar />
        </Grid>
        <Grid item sm={7} xs={10}>
          <Feeds />
        </Grid>
        <Grid item sm={3} className={classes.right}>
          <RightBar />
        </Grid>
      </Grid>
      <AddPost />
    </div>
  );
}

export default App;
