import makeStyles from "@mui/styles/makeStyles";

import React, { useEffect, useState } from "react";
import Post from "./Post";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import axios from "axios";
import { LinearProgress } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
  },
}));

function Feeds() {
  const classes = useStyles();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios("https://jsonplaceholder.typicode.com/posts")
      .then((response) => setPosts(response.data))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <Container className={classes.container}>
      {loading && <LinearProgress variant={"indeterminate"} />}
      <Grid container spacing={2}>
        {posts.map((post, key) => {
          return (
            <Grid key={key} item xs={12} md={6}>
              <Post post={post} />
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
}

export default Feeds;
