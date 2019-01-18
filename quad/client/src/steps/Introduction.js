import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

function AddressForm() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Introduction
      </Typography>
      <Grid container spacing={24}>
        <Grid item xs={12}>
          <Typography gutterBottom>
            We are interested in the shapes of various objects. In this study, we will show you sets of six words. You will be asked to choose the word that you think refers to the roundest object, and the one that refers to the spikiest object, out of the six. Make your choice by clicking the appropriate button.
            <br></br><br></br>
            There may not always be a correct answer. That’s okay, just go with what you feel is the best answer.
            <br></br><br></br>
            At times you may feel that a certain object can take on various shapes. Just make your decision based on what you think is the most common shape of that object.
          </Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default AddressForm;
