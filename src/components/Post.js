import makeStyles from "@mui/styles/makeStyles";

import React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CardActions from "@mui/material/CardActions";
import Share from "@mui/icons-material/Share";
import Favorite from "@mui/icons-material/Favorite";
import Fab from "@mui/material/Fab";

const useStyles = makeStyles((theme) => ({
  media: {
    height: theme.spacing(15),
    [theme.breakpoints.up("sm")]: {
      height: theme.spacing(25),
    },
  },
  card: {},
}));

const Post = ({ post }) => {
  const classes = useStyles();
  const getTitle = (post, count = 35) => {
    let new_post = post;
    if (new_post.length >= count) {
      new_post = new_post.substr(0, count);
      return `${new_post}...`;
    }
    return new_post;
  };
  return (
    <Card variant={"outlined"} className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={`https://picsum.photos/id/${post.id}/1080/1920`}
          title={post.title}
        />
        <CardContent>
          <Typography gutterBottom variant={"h5"}>
            {getTitle(post.title)}
          </Typography>
          <Typography variant={"body2"}>{getTitle(post.body, 100)}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Fab color={"primary"} size={"small"}>
          <Share fontSize={"small"} />
        </Fab>
        <Fab color={"secondary"} size={"small"}>
          <Favorite fontSize={"small"} />
        </Fab>
      </CardActions>
    </Card>
  );
};

export default Post;
