import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

function AddressForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Introduction
      </Typography>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Typography gutterBottom>
            We are interested in understanding the relationship between how a word sounds
            and its characteristics. In this study, we will show you sets of four words and
            ask you to choose which of the four you think is most round, and which you think
            is the most spiky. You will indicate your choice by clicking on two radio buttons,
            one to select the one that is most round and one to select the one that is most spiky.
          </Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default AddressForm;
