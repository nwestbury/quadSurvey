import React from 'react';
import PropTypes from 'prop-types';
import withStyles from '@material-ui/core/styles/withStyles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Introduction from './steps/Introduction';
import PersonalInfo from './steps/PersonalInfo';
import QuadForm from './steps/QuadForm';
import {jsonRequest} from './helpers/api';

const styles = theme => ({
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 2 * 2)]: {
      width: 600,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
    padding: theme.spacing.unit * 2,
    [theme.breakpoints.up(600 + theme.spacing.unit * 3 * 2)]: {
      marginTop: theme.spacing.unit * 6,
      marginBottom: theme.spacing.unit * 6,
      padding: theme.spacing.unit * 3,
    },
  },
  stepper: {
    padding: `${theme.spacing.unit * 3}px 0 ${theme.spacing.unit * 5}px`,
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing.unit * 3,
    marginLeft: theme.spacing.unit,
  },
});

const steps = ['Introduction', 'Basic Info', 'Round/Spiky', 'Finish'];

class Survey extends React.Component {
  state = {
    activeStep: 0,
    personalInfo: {
      gender: null,
      age: null,
      nativeLanguages: [],
      convoLanguages: [],
    },
    quads: [],
  };

  handleNext = () => {
    this.setState(state => ({
      activeStep: state.activeStep + 1,
    }));
  };

  handleBack = () => {
    this.setState(state => ({
      activeStep: state.activeStep - 1,
    }));
  };

  handleReset = () => {
    this.setState({
      activeStep: 0,
      personalInfo: {
        gender: null,
        age: null,
        nativeLanguages: [],
        convoLanguages: [],
      },
      quads: [],
    });
  };

  handleSubmit = () => {
    const uuid = this.props.match.params.uuid;
    const {gender, age, nativeLanguages, convoLanguages} = this.state.personalInfo;
    const {quads} = this.state;
    jsonRequest('/surveyResponse/', 'POST', {
      uuid, gender, age, nativeLanguages, convoLanguages,
      responses: quads,
    }).then(this.handleNext);
  }

  handleData = (stepName, data) => {
    this.setState({
      [stepName]: data,
    });
  }

  getQuads = () => {
    const uuid = this.props.match.params.uuid;
    jsonRequest('/quads/' + uuid, 'GET', {}).then((resp) => {
        if (resp.success) {
          if (resp.responded) {
            this.setState({activeStep: steps.length - 1});
          } else {
            this.setState({quads: resp.quads});
          }
        }
    })
  }

  getStepContent = (step) => {
    switch (step) {
      case 0:
        return <Introduction />;
      case 1:
        return <PersonalInfo data={this.state.personalInfo} setData={this.handleData} />;
      case 2:
        return <QuadForm data={this.state.quads} setData={this.handleData} />;
      case 3:
        return <Introduction />;
      default:
        throw new Error('Unknown step');
    }
  }

  componentDidMount() {
    this.getQuads();
  }

  render() {
    const { classes } = this.props;
    const { activeStep, quads, personalInfo } = this.state;
    let disabled = false;
    
    if (activeStep === 1) {
      disabled = Object.values(personalInfo).some(i => !i);
    } else if (activeStep === 2) {
      disabled = quads.some(q => !q.responded);
    }

    const nextFunc = activeStep  === steps.length - 2 ? this.handleSubmit : this.handleNext;
    return (
      <React.Fragment>
        <CssBaseline />
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Typography component="h1" variant="h4" align="center">
            </Typography>
            <Stepper activeStep={activeStep} className={classes.stepper}>
              {steps.map(label => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <React.Fragment>
              {activeStep === steps.length - 1 ? (
                <React.Fragment>
                  <Typography variant="h5" gutterBottom>
                    Thank you for your participation.
                  </Typography>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  {this.getStepContent(activeStep)}
                  <div className={classes.buttons}>
                    {activeStep !== 0 && (
                      <Button onClick={this.handleBack} className={classes.button}>
                        Back
                      </Button>
                    )}
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={nextFunc}
                      disabled={disabled}
                      className={classes.button}
                    >
                      {activeStep === steps.length - 2 ? 'Finish' : 'Next'}
                    </Button>
                  </div>
                </React.Fragment>
              )}
            </React.Fragment>
          </Paper>
        </main>
      </React.Fragment>
    );
  }
}

Survey.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Survey);