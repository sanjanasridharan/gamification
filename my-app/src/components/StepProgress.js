import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepConnector from '@material-ui/core/StepConnector';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import PostData from './data.json'
function Movi({movie}){ 
  return (
    <div > 
      <span >
        <Card style={{maxWidth: '200px'}}>
          <CardMedia style={{height: 0, paddingTop: '56.25%'}} image={ movie.poster}/>
          <CardContent>
            <Typography variant="headline" component="h2">{ movie.name }</Typography>
            <Typography component="h2" color="textSecondary">LEVEL:{ movie.level }</Typography>
          </CardContent>
        </Card>
      </span>
    </div>
  )
}


const ColorlibConnector = withStyles({
  alternativeLabel: {
    top: 95,
  },
  active: {
    '& $line': {
      backgroundImage:
        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
    },
  },
  completed: {
    '& $line': {
      backgroundImage:
        'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
    },
  },
  line: {
    width:170,   
    height: 10,
    border: 0,
    backgroundColor: '#eaeaf0',
    borderRadius: 1,
    marginLeft:3,
    marginRight:3
  },
})(StepConnector);

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));



export default function StepProgress() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);


  const handleNext = () => {
    setActiveStep(prevActiveStep => prevActiveStep+1);
  };

  return (
    <div className={classes.root}>
        <center>
      
      <Stepper alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />}>
        {PostData.map(movie => (
          <Step key={movie.level}>
            <Movi movie={movie}  />
          </Step>
        ))}
      </Stepper>

      
      </center>
              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.button}
              >
                 Next
              </Button>

      </div>
  );
}
