import makeStyles from "@mui/styles/makeStyles";

import React, { useState } from "react";
import Fab from "@mui/material/Fab";
import Add from "@mui/icons-material/Add";
import Tooltip from "@mui/material/Tooltip";
import Modal from "@mui/material/Modal";
import Container from "@mui/material/Container";
import FormLabel from "@mui/material/FormLabel";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";

const useStyles = makeStyles((theme) => ({
  fab: {},
  item: {},
  form: { marginTop: theme.spacing(2) },
  container: {
    width: 500,
    height: 550,
    backgroundColor: "white",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    margin: "auto",
    [theme.breakpoints.down("sm")]: {
      width: "100hv",
      height: "85vh",
    },
  },
}));
const useSx = () => ({
  fab: {
    position: "fixed",
    bottom: 20,
    right: 20,
  },
});

function AddPost() {
  const classes = useStyles();
  const sx = useSx();
  const [open, setOpen] = useState(false);
  const [snackBar, setSnackBar] = useState(false);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackBar(false);
  };
  return (
    <>
      <Tooltip title={"Add post"} onClick={() => setOpen(true)}>
        <Fab color="primary" sx={sx.fab}>
          <Add />
        </Fab>
      </Tooltip>
      <Modal open={open}>
        <Container className={classes.container}>
          <form className={classes.form} autoComplete={"off"}>
            <Grid container spacing={4}>
              <Grid item container md={6} direction={"column"} spacing={2}>
                <Grid item>
                  <div className={classes.item}>
                    <TextField
                      fullWidth
                      id={"title"}
                      label={"Title"}
                      variant={"outlined"}
                    />
                  </div>
                </Grid>
                <Grid item>
                  <div className={classes.item}>
                    <TextField
                      fullWidth
                      id={"membership"}
                      label={"membership"}
                      variant={"outlined"}
                      select
                    >
                      <MenuItem value={"free"}>Free</MenuItem>
                      <MenuItem value={"standard"}>Standard</MenuItem>
                      <MenuItem value={"premium"}>Premium</MenuItem>
                    </TextField>
                  </div>
                </Grid>
                <Grid item>
                  <div className={classes.item}>
                    <TextField
                      fullWidth
                      id={"category"}
                      label={"Category"}
                      variant={"outlined"}
                      select
                    >
                      <MenuItem value={"free"}>Earth</MenuItem>
                      <MenuItem value={"standard"}>Human</MenuItem>
                      <MenuItem value={"premium"}>News</MenuItem>
                    </TextField>
                  </div>
                </Grid>
              </Grid>
              <Grid item container md={6} direction={"column"} spacing={2}>
                <Grid item>
                  <div className={classes.item}>
                    <TextField
                      fullWidth
                      id={"content"}
                      label={"Content"}
                      variant={"outlined"}
                      multiline
                      rows={8}
                    />
                  </div>
                </Grid>
                <Grid item>
                  <div className={classes.item}>
                    <FormLabel component={"legend"}>Draft this post?</FormLabel>
                    <RadioGroup>
                      <FormControlLabel
                        control={<Radio />}
                        label={"Yes"}
                        value={true}
                      />
                      <FormControlLabel
                        control={<Radio color={"secondary"} />}
                        label={"No"}
                        value={false}
                      />
                    </RadioGroup>
                  </div>
                </Grid>
              </Grid>
              <Grid item container md={6} direction={"column"} spacing={1}>
                <Grid item>
                  <div className={classes.item}>
                    <Button
                      onClick={() => {
                        setSnackBar(true);
                        setOpen(false);
                      }}
                      fullWidth
                      variant={"outlined"}
                    >
                      Post
                    </Button>
                  </div>
                </Grid>
                <Grid item>
                  <div className={classes.item}>
                    <Button
                      onClick={() => setOpen(false)}
                      fullWidth
                      type={"reset"}
                      color={"secondary"}
                      variant={"contained"}
                      size={"medium"}
                    >
                      Cancel
                    </Button>
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </form>
        </Container>
      </Modal>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={snackBar}
        autoHideDuration={5000}
        onClose={handleClose}
      >
        <Alert
          color={"success"}
          onClose={handleClose}
          severity="success"
          sx={{ width: "100%" }}
        >
          Post added.
        </Alert>
      </Snackbar>
    </>
  );
}

export default AddPost;
