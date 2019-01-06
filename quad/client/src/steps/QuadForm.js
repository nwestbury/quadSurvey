import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import RadioQuad from '../RadioQuad';

const styles = theme => ({
  listItem: {
    padding: `${theme.spacing.unit}px 0`,
  },
  total: {
    fontWeight: '700',
  },
  title: {
    marginTop: theme.spacing.unit * 2,
  },
  smallMarginBottom: {
    marginBottom: '20px',
  }
});

class Review extends React.Component {
  onChange1 = (index, value) => {
    const {data, setData} = this.props;

    let newRow = Object.assign(data[index], {
      rank1: value,
      responded: false,
    });

    if (newRow.rank6 === value) {
      newRow.rank6 = "";
    } else if (newRow.rank6) {
      newRow.responded = true;
    }

    const newData = data.map((val, i) => {
      if (i === index) return newRow;
      return val;
    });

    setData('quads', newData);
  }

  onChange2 = (index, value) => {
    const {data, setData} = this.props;
    let newRow = Object.assign(data[index], {
      rank6: value,
      responded: false,
    });

    if (newRow.rank1 === value) {
      newRow.rank1 = "";
    } else if (newRow.rank1) {
      newRow.responded = true;
    }

    const newData = data.map((val, i) => {
      if (i === index) return newRow;
      return val;
    });
    
    setData('quads', newData);
  }

  render() {
    const { classes, data } = this.props;

    return (
      <React.Fragment>
        <Typography variant="h6" gutterBottom>
          Round/Spiky
        </Typography>
        <React.Fragment>
          <Typography variant="h7" gutterBottom>
            For each group of six words, select the most round and most spiky word.
          </Typography>
          <br></br>
        </React.Fragment>
        <Grid container spacing={0}>
        {data.map((row, index) => {
          return (
          <React.Fragment key={index}>
            <Grid container className={classes.smallMarginBottom} xs={12}>
              <Grid item xs={12}>
                <Typography variant="h7" gutterBottom>
                  {index+1}
                </Typography>
              </Grid>
              <RadioQuad index={index} row={row} onChange1={this.onChange1} onChange2={this.onChange2} rank1={row.rank1} rank6={row.rank6} />
            </Grid>
          </React.Fragment>
          );
        })}
        </Grid>
      </React.Fragment>
    );
  }
}

Review.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Review);
