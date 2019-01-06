
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import withStyles from '@material-ui/core/styles/withStyles';
import {jsonRequest} from './helpers/api';
import RespondentTable from './RespondentTable';

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
  middle: {
    display: 'flex',
    justifyContent: 'center',
  },
});

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            stimuli: 1,
            file: '',
            error: '',
            respondents: [],
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleFileChange = this.handleFileChange.bind(this);
        this.submitForm = this.submitForm.bind(this);
        this.validateFile = this.validateFile.bind(this);
        this.fetchLatest = this.fetchLatest.bind(this);
        this.fileInput = React.createRef();
        this.fileReader = new FileReader();
        this.fileReader.onloadend = this.validateFile;
    }

    componentDidMount() {
        this.fetchLatest();
    }

    submitForm(e) {
        e.preventDefault();

        const {file} = this.state;

        this.setState({error: '', loading: true});
        if (!file) {
            this.setState({error: 'Must upload file', loading: false});
            return;
        }

        this.fileReader.readAsText(file);
    }

    validateFile(e) {

        const {stimuli} = this.state;
        const result = this.fileReader.result;

        /*
        const nol = result.split(/\r\n|\r|\n/).filter(e => e).length - 1; // excluded header
        const subjects = nol / stimuli;

        if (subjects % 1 !== 0) {
            this.setState({error: `Not an even amount of stimuli per subject (${nol} total with ${stimuli} stimuli per subject)`, loading: false});
            return;
        }
        */

        const self = this;
        jsonRequest('/uploadStimuli/', 'POST', {
            csv: result,
            stimuli,
        }).then(function(resp){
            if (resp.success) {
                self.setState({loading: false});
                self.fetchLatest();
            } else {
                const error = resp.errors[Object.keys(resp.errors)[0]];
                self.setState({loading: false, error});
            }
        })
    }

    handleChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }

    handleFileChange(e) {
        const file = this.fileInput.current && this.fileInput.current.files[0];
        this.setState({file});
    }

    fetchLatest() {
        jsonRequest('/respondents/', 'GET', {}).then((resp) => {
            if (resp.success) {
                this.setState({respondents: resp.respondents});
            }
        });
    }

    render() {
        const { classes } = this.props;
        const fileName = this.state.file.name || '[No file]';

        return (
            <main className={classes.main}>
            <CssBaseline />
                <Paper className={classes.paper}>
                <Typography component="h1" variant="h5">
                    Survey Admin
                </Typography>
                <br></br>
                <form className={classes.form} onSubmit={this.submitForm}>
                    <input
                        accept=".csv"
                        name="csvFile"
                        className={classes.input}
                        id="button-input"
                        multiple
                        type="file"
                        hidden
                        ref={this.fileInput}
                        onChange={this.handleFileChange}
                    />
                    <Grid container spacing={24}>
                        <Grid item xs={5}>
                            Upload Quads:
                        </Grid>
                        <Grid item xs={7}>
                            <label htmlFor="button-input">
                                <Button variant="raised" component="span" color="primary" className={classes.button}>
                                    Upload
                                </Button>
                               {' ' + fileName}
                            </label>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                id="stimuli"
                                name="stimuli"
                                label="Number of Stimuli per Subject"
                                value={this.state.stimuli}
                                onChange={this.handleChange}
                                type="number"
                                inputProps={{
                                    min: "1" // 0 is technically valid but... it makes validation more difficult
                                }}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                                margin="normal"
                                error={this.state.error.length > 0}
                                helperText={this.state.error}
                                fullWidth
                            />
                        </Grid>
                        <Grid item xs={12} className={classes.middle}>
                            <Button
                                variant="contained"
                                color="primary"
                                type="submit"
                                onClick={this.handleNext}
                                className={classes.button}
                                disabled={this.state.loading}
                            >
                                {this.state.loading ? <CircularProgress /> : 'Generate'}
                            </Button>
                        </Grid>
                        <Grid item xs={12} className={classes.middle}>
                            <RespondentTable rows={this.state.respondents}></RespondentTable>
                        </Grid>
                        <Grid item xs={12} className={classes.middle}>
                            <Button
                                variant="contained"
                                color="primary"
                                type="submit"
                                className={classes.button}
                                href="/exportSurvey/"
                            >
                                Export Survey Responses
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
            </main>
        );
    }
}

SignIn.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SignIn);