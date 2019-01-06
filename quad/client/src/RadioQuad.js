import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const styles = theme => ({
});

class Review extends React.Component {
  constructor(props) {
      super(props);
      this.state = {};
  }

  render() {
    const { classes, index, row, rank1, rank6, onChange1, onChange2 } = this.props;

    console.log('WTF', rank1, rank6);

    return (
          <React.Fragment>
              <Grid item xs={6} style={{ textAlign: 'right', paddingRight: '20px' }}>
                <FormControl component="fieldset" className={classes.formControl}>
                  <FormLabel component="legend" style={{ textAlign: 'right' }}>Most round</FormLabel>
                  <RadioGroup
                    aria-label="Most round"
                    name="round"
                    className={classes.group}
                    value={rank1}
                    onChange={(e) => onChange1(index, e.target.value)}
                  >
                    <FormControlLabel value={row.word1} control={<Radio color="primary" checked={rank1 === row.word1} />} label={row.word1} labelPlacement="start" />
                    <FormControlLabel value={row.word2} control={<Radio color="primary" checked={rank1 === row.word2} />} label={row.word2} labelPlacement="start" />
                    <FormControlLabel value={row.word3} control={<Radio color="primary" checked={rank1 === row.word3} />} label={row.word3} labelPlacement="start" />
                    <FormControlLabel value={row.word4} control={<Radio color="primary" checked={rank1 === row.word4} />} label={row.word4} labelPlacement="start" />
                    <FormControlLabel value={row.word5} control={<Radio color="primary" checked={rank1 === row.word5} />} label={row.word5} labelPlacement="start" />
                    <FormControlLabel value={row.word6} control={<Radio color="primary" checked={rank1 === row.word6} />} label={row.word6} labelPlacement="start" />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item xs={6}>
              <FormControl component="fieldset" className={classes.formControl}>
                <FormLabel component="legend">Most spiky</FormLabel>
                <RadioGroup
                  aria-label="Most spiky"
                  name="spiky"
                  className={classes.group}
                  value={rank6}
                  onChange={(e) => onChange2(index, e.target.value)}
                >
                  <FormControlLabel value={row.word1} control={<Radio color="primary" checked={rank6 === row.word1} />} />
                  <FormControlLabel value={row.word2} control={<Radio color="primary" checked={rank6 === row.word2} />} />
                  <FormControlLabel value={row.word3} control={<Radio color="primary" checked={rank6 === row.word3} />} />
                  <FormControlLabel value={row.word4} control={<Radio color="primary" checked={rank6 === row.word4} />} />
                  <FormControlLabel value={row.word5} control={<Radio color="primary" checked={rank6 === row.word5} />} />
                  <FormControlLabel value={row.word6} control={<Radio color="primary" checked={rank6 === row.word6} />} />
                </RadioGroup>
              </FormControl>
            </Grid>
          </React.Fragment>
    );
  }
}

Review.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Review);
