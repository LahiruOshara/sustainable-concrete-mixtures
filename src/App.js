import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import MixtureSelection from './components/FormComponents/MixtureSelection';
import TransitionAlerts from './components/Alerts/TransitionAlerts';

function App() {

  const defaultTheme = createTheme();
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  return (
    <ThemeProvider theme={defaultTheme}>
      <CssBaseline />
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: 'relative',
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >
        <Toolbar>
          <Typography variant="h6" color="inherit" noWrap>
            Susntainable Bla bla
          </Typography>
        </Toolbar>
      </AppBar>
      {isSubmitted ?
        <TransitionAlerts />
        :
        <MixtureSelection setSubmitted={setIsSubmitted} />
      }
    </ThemeProvider>
  );
}

export default App;
