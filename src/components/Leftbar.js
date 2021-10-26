import makeStyles from "@mui/styles/makeStyles";

import React from "react";
import Container from "@mui/material/Container";
import Home from "@mui/icons-material/Home";
import Typography from "@mui/material/Typography";
import Settings from "@mui/icons-material/Settings";
import VerifiedUserSharp from "@mui/icons-material/VerifiedUserSharp";
import Category from "@mui/icons-material/Category";
import VideoCall from "@mui/icons-material/VideoCall";
import Photo from "@mui/icons-material/Photo";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
    position: "sticky",
    top: 0,
    backgroundColor: theme.palette.info.light,
    height: "100vh",
    color: "white",
    [theme.breakpoints.up("sm")]: {
      backgroundColor: "white",
      color: "#555",
      borderRight: "2px solid rgba(85,85,85,0.29)",
    },
  },
  item: {
    display: "flex",
    alignItems: "center",
    marginBottom: theme.spacing(4),
    [theme.breakpoints.up("sm")]: {
      marginBottom: theme.spacing(3),
      cursor: "pointer",
    },
  },
  icon: {
    [theme.breakpoints.up("sm")]: {
      marginRight: theme.spacing(2),
      fontSize: "18px",
    },
  },
  text: {
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    fontWeight: 500,
  },
}));

function LeftBar() {
  const classes = useStyles();
  return (
    <Container className={classes.container}>
      <div className={classes.item}>
        <Home className={classes.icon} />
        <Typography className={classes.text}>Homepage</Typography>
      </div>
      <div className={classes.item}>
        <VerifiedUserSharp className={classes.icon} />
        <Typography className={classes.text}>Users</Typography>
      </div>
      <div className={classes.item}>
        <Category className={classes.icon} />
        <Typography className={classes.text}>Category</Typography>
      </div>
      <div className={classes.item}>
        <VideoCall className={classes.icon} />
        <Typography className={classes.text}>Videos</Typography>
      </div>
      <div className={classes.item}>
        <Photo className={classes.icon} />
        <Typography className={classes.text}>Photos</Typography>
      </div>
      <div className={classes.item}>
        <Settings className={classes.icon} />
        <Typography className={classes.text}>Settings</Typography>
      </div>
    </Container>
  );
}

export default LeftBar;
