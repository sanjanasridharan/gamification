import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  cardMedia: {
    cursor: "pointer",
  },
  root: {
    display: 'flex',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
}));

export default function MediaControlCard() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">Trying the stuff now lets see what happens asjckjdbvkjenfwnckeqhfcnbjnfckjwnvjkefenvkw</Typography>
          <Typography variant="subtitle1" color="textSecondary">video aa gyi hai</Typography>
        </CardContent>
      </div>
      <CardMedia
        className={classes.cardMedia}
        component="video"
        // src={require('../assets/videoplayback.mp4')}
        controls
        height="640"/>
    </Card>
  );
}
