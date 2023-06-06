import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

export default function SummaryView({ structureType, area }) {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Summary
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Typography variant="subtitle1">Selected Structure Type: {structureType}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="subtitle1">Selected Area: {area}</Typography>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}