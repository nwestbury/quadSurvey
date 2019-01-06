import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CheckIcon from '@material-ui/icons/Check';
import CloseIcon from '@material-ui/icons/Close';


const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  textCenter: {
      textAlign: 'center',
  },
  greenIcon: {
    color: 'green',
  }
});

function SimpleTable(props) {
  const { classes, rows } = props;

  if (rows.length === 0) {
      return (
        <Paper className={classes.root + ' ' + classes.textCenter}>
            [No Respondents Yet]
        </Paper>
      )
  }

  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Survey URL</TableCell>
            <TableCell>Responded</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => {
            return (
              <TableRow key={row.id}>
                <TableCell>
                    <a href={`/survey/${row.uuid}`} target="_blank" rel="noopener noreferrer">{`/survey/${row.uuid}`}</a>
                </TableCell>
                <TableCell>{row.responded ? <CheckIcon className={classes.greenIcon} /> : <CloseIcon color="error" />}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
  );
}

SimpleTable.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleTable);