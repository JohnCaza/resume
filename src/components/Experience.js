import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import withRoot from './withRoot';
import experience from '../data/experience';
import general from '../data/general';

const styles = theme => ({
  experience: {
    textAlign: 'center',
    paddingTop: theme.spacing.unit * 10,
    marginLeft: theme.spacing.unit * 2,
    marginRight: theme.spacing.unit * 2,
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    marginTop: theme.spacing.unit * 2,
    marginBottom: theme.spacing.unit * 2,
    textAlign: 'left',
    color: theme.palette.text.secondary,
  },
  leftAlign: {
    textAlign: 'left',
  },
  rightAlign: {
    textAlign: 'right',
  },
  indent1: {
    paddingLeft: theme.spacing.unit * 2,
  },
});

const Experience = props => {
  const { classes } = props;
  return (
    <Grid container spacing={24} className={classes.experience}>
      <Grid item xs={12}>
        {experience.jobs.map(job => (
          <Paper className={classes.paper} key={job.id}>
            <Grid container>
              <Grid item xs={8}>
                <Typography variant="headline" gutterBottom>
                  {job.position}
                </Typography>
              </Grid>
              <Grid item xs={4} className={classes.rightAlign}>
                <Typography variant="subheading" gutterBottom>
                  {job.startDate} - {job.endDate}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="title" gutterBottom>
                  {job.company}
                </Typography>
              </Grid>
              <Grid item xs={6} className={classes.rightAlign}>
                <Typography variant="subheading" gutterBottom>
                  {job.location}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography gutterBottom>{job.description}</Typography>
              </Grid>
              <Grid item xs={12} className={classes.indent1}>
                {job.summary && (
                  <div>
                    <Typography variant="body2" gutterBottom>
                      {general.labelSummary}
                    </Typography>
                    <Typography gutterBottom>{job.summary}</Typography>
                  </div>
                )}
                {job.responsibilities && (
                  <Typography variant="body2" gutterBottom>
                    {general.labelResponsibilities}
                  </Typography>
                )}
                {job.responsibilities &&
                  job.responsibilities.map((responsibility, index) => (
                    <Typography gutterBottom key={index}>&bull; {responsibility}</Typography> /* eslint-disable-line */
                  ))}
                {job.achievements && (
                  <Typography variant="body2" gutterBottom>
                    {general.labelAchievements}
                  </Typography>
                )}
                {job.achievements &&
                  job.achievements.map((achievement, index) => (
                    <Typography gutterBottom key={index}>&bull; {achievement}</Typography> /* eslint-disable-line */
                  ))}
              </Grid>
            </Grid>
          </Paper>
        ))}
      </Grid>
    </Grid>
  );
};

Experience.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(Experience));
