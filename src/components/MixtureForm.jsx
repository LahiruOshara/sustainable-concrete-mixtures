import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FormStepOne from './FormStepOne';
import PaymentForm from './PaymentForm';
import SummaryView from './SummaryView';

const steps = ['Inland/ Marine', 'Choose 2', 'Summary'];

export default function MixtureForm() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [structureType, setStructureType] = React.useState('');
  const [area, setArea] = React.useState('');
  const isNextButtonDisabled = activeStep === 0 && area === '';

  const handleStructureTypeChange = (structureType) => {
    setStructureType(structureType);
  };

  const handleAreaChange = (area) => {
    setArea(area);
  };

  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      // TODO submit data to the server
      console.log('Submitting data...');
    } else {
      setActiveStep(activeStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const getStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <FormStepOne
            onStructureTypeChange={handleStructureTypeChange}
            onAreaChange={handleAreaChange}
          />
        );
      case 1:
        return <PaymentForm />;
      case 2:
        return <SummaryView structureType={structureType} area={area} />;
      default:
        throw new Error('Unknown step');
    }
  };

  return (
    <Container component="main" maxWidth="md" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            Fill this
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
            <React.Fragment>
              {getStepContent(activeStep)}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Back
                  </Button>
                )}
                <Button
                  variant="contained"
                  onClick={handleNext}
                  disabled={isNextButtonDisabled}
                  sx={{ mt: 3, ml: 1 }}
                >
                  {activeStep === steps.length - 1 ? 'Submit' : 'Next'}
                </Button>
              </Box>
            </React.Fragment>
        </Paper>
      </Container>
  );
}
