import makeStyles from "@mui/styles/makeStyles";

import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import AvatarGroup from "@mui/material/AvatarGroup";
import Avatar from "@mui/material/Avatar";
import { ImageList, ImageListItem, Link, useTheme } from "@mui/material";
import Grid from "@mui/material/Grid";

const useStyles = makeStyles((theme) => ({
  container: {
    paddingTop: theme.spacing(10),
    position: "sticky",
    top: 0,
  },
}));
const useSx = ({ theme }) => ({
  link: {
    marginRight: theme.spacing(1),
    color: theme.palette.info.main,
    fontSize: theme.spacing(2),
    textDecoration: "none",
    fontWeight: "400",
  },
  title: {
    color: theme.palette.info.light,
    fontSize: theme.spacing(2),
    fontWeight: "600",
  },
});

function RightBar() {
  const classes = useStyles();
  const theme = useTheme();
  const sx = useSx({ theme });

  return (
    <Container className={classes.container}>
      <Grid container spacing={4} direction={"column"}>
        <Grid item>
          <Typography gutterBottom sx={sx.title}>
            Authors
          </Typography>
          <AvatarGroup max={6}>
            <Avatar src={`https://picsum.photos/id/${54}/50/50`} />
            <Avatar src={`https://picsum.photos/id/${24}/50/50`} />
            <Avatar src={`https://picsum.photos/id/${32}/50/50`} />
            <Avatar src={`https://picsum.photos/id/${92}/50/50`} />
            <Avatar src={`https://picsum.photos/id/${49}/50/50`} />
            <Avatar src={`https://picsum.photos/id/${75}/50/50`} />
            <Avatar src={`https://picsum.photos/id/${22}/50/50`} />
            <Avatar src={`https://picsum.photos/id/${86}/50/50`} />
            <Avatar src={`https://picsum.photos/id/${85}/50/50`} />
            <Avatar src={`https://picsum.photos/id/${89}/50/50`} />
          </AvatarGroup>
        </Grid>
        <Grid item>
          <Typography gutterBottom sx={sx.title}>
            Gallery
          </Typography>
          <ImageList rowHeight={160} cols={3} variant={"quilted"}>
            <ImageListItem>
              <img src={`https://picsum.photos/id/${45}/40/30`} alt={"a"} />
            </ImageListItem>
            <ImageListItem>
              <img src={`https://picsum.photos/id/${42}/100/40`} alt={"a"} />
            </ImageListItem>
            <ImageListItem>
              <img src={`https://picsum.photos/id/${23}/80/20`} alt={"a"} />
            </ImageListItem>
            <ImageListItem>
              <img src={`https://picsum.photos/id/${2}/60/20`} alt={"a"} />
            </ImageListItem>
            <ImageListItem>
              <img src={`https://picsum.photos/id/${9}/80/192`} alt={"a"} />
            </ImageListItem>
            <ImageListItem>
              <img src={`https://picsum.photos/id/${70}/100/92`} alt={"a"} />
            </ImageListItem>
            <ImageListItem>
              <img src={`https://picsum.photos/id/${20}/10/20`} alt={"a"} />
            </ImageListItem>
            <ImageListItem>
              <img src={`https://picsum.photos/id/${80}/80/99`} alt={"a"} />
            </ImageListItem>
            <ImageListItem>
              <img src={`https://picsum.photos/id/${58}/108/192`} alt={"a"} />
            </ImageListItem>
          </ImageList>
        </Grid>
        <Grid item>
          <Typography gutterBottom sx={sx.title}>
            Categories
          </Typography>
          <Link href={"#"} sx={sx.link} variant={"body2"}>
            Blog
          </Link>
          <Link href={"#"} sx={sx.link} variant={"body2"}>
            Human
          </Link>
          <Link href={"#"} sx={sx.link} variant={"body2"}>
            World
          </Link>
          <Link href={"#"} sx={sx.link} variant={"body2"}>
            Trees
          </Link>
          <Link href={"#"} sx={sx.link} variant={"body2"}>
            Earth
          </Link>
          <Link href={"#"} sx={sx.link} variant={"body2"}>
            News
          </Link>
        </Grid>
      </Grid>
    </Container>
  );
}

export default RightBar;
