import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Toolbar from "@mui/material/Toolbar";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import AppBar from "@mui/material/AppBar";
import Hidden from "@mui/material/Hidden";
import createStyles from "@mui/styles/createStyles";
import makeStyles from "@mui/styles/makeStyles";
import Mail from "@mui/icons-material/Mail";
import Notifications from "@mui/icons-material/Notifications";
import Search from "@mui/icons-material/Search";
import { alpha } from "@mui/material";
import Cancel from "@mui/icons-material/Cancel";

const useStyles = makeStyles((theme) =>
  createStyles({
    toolbar: {
      backgroundColor: theme.palette.info.light,
      display: "flex",
      justifyContent: "space-between",
    },
    brandLg: {
      display: "none",
      [theme.breakpoints.up("sm")]: {
        display: "block",
      },
    },
    brandSm: {
      display: "block",
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
    },
    closeSearch: {
      marginRight: theme.spacing(1),
      marginLeft: theme.spacing(1),
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
    },
    search: {
      display: "flex",
      alignItems: "center",
      backgroundColor: alpha(theme.palette.common.white, 0.15),
      "&:hover": {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
      },
      borderRadius: theme.shape.borderRadius,
      width: ({ open }) => (open ? "100%" : "50%"),
      [theme.breakpoints.down("sm")]: {
        display: ({ open }) => (open ? "flex" : "none"),
        marginLeft: theme.spacing(2),
      },
    },
    input: {
      height: theme.spacing(5),
      width: "100%",
    },
    inputIcon: {
      marginRight: theme.spacing(1),
      marginLeft: theme.spacing(1),
    },
    icons: {
      alignItems: "center",
      display: ({ open }) => (open ? "none" : "flex"),
    },
    badge: {
      marginRight: theme.spacing(2),
    },
    searchButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up("sm")]: {
        display: "none",
      },
    },
  })
);

function Navbar() {
  const [open, setOpen] = useState(false);
  const classes = useStyles({ open });
  return (
    <AppBar position={"fixed"}>
      <Toolbar className={classes.toolbar} variant={"dense"}>
        <Typography className={classes.brandLg} variant={"h6"}>
          Brand Logo
        </Typography>
        <Typography className={classes.brandSm} variant={"h6"}>
          BL
        </Typography>
        <div className={classes.search}>
          <Search className={classes.inputIcon} />
          <InputBase
            sx={{ color: "white" }}
            className={classes.input}
            placeholder={"Search..."}
          />
          <Hidden smUp>
            <Cancel
              className={classes.closeSearch}
              onClick={() => setOpen(false)}
            />
          </Hidden>
        </div>
        <div className={classes.icons}>
          <Hidden smUp>
            <Search
              className={classes.searchButton}
              onClick={() => setOpen(true)}
            />
          </Hidden>
          <Badge badgeContent={2} color={"success"} className={classes.badge}>
            <Mail />
          </Badge>
          <Badge badgeContent={4} color={"error"} className={classes.badge}>
            <Notifications />
          </Badge>
          <Avatar
            src={"https://picsum.photos/id/2/60/20"}
            variant={"rounded"}
            sx={{ width: 40, height: 40 }}
          />
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
