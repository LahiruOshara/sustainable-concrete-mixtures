import React from "react";
import Typography from "@mui/material/Typography";

export default function FormStepFour({
  selectedStructureType,
  selectedArea,
  selectedCarbonationClass,
  selectedCorrosion,
  selectedChemicalAttack,
  selectedDesignLife,
  selectedStrengthClass
}) {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Selected Properties Summary
      </Typography>
      <Typography variant="body1">
        Structure Type: {selectedStructureType}
      </Typography>
      <Typography variant="body1">
        Area: {selectedArea}
      </Typography>
      <Typography variant="body1">
        Carbonation Class: {selectedCarbonationClass}
      </Typography>
      <Typography variant="body1">
        Corrosion: {selectedCorrosion}
      </Typography>
      <Typography variant="body1">
        Chemical Attack: {selectedChemicalAttack}
      </Typography>
      <Typography variant="body1">
        Design Life: {selectedDesignLife}
      </Typography>
      <Typography variant="body1">
        Strength Class: {selectedStrengthClass}
      </Typography>
    </React.Fragment>
  );
}
