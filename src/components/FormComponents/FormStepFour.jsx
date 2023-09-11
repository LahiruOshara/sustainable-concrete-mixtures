import React from "react";
import Typography from "@mui/material/Typography";

export default function FormStepFour({
  selectedStructureType,
  selectedArea,
  selectedCarbonationClass,
  selectedCorrosion,
  selectedChemicalAttack,
  selectedDesignLife,
  selectedStrengthClass,
}) {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Selected Properties Summary
      </Typography>

      <Typography variant="body1" style={{ fontWeight: "bold" }}>
        Considering the information given to the system, following are the
        combinations of exposure conditions and the minimum requirements
        according to EN206
        <br />
        <br />
      </Typography>

      <Typography variant="body1">
        Structure Type: {selectedStructureType}
      </Typography>
      <Typography variant="body1">Area: {selectedArea}</Typography>
      <Typography variant="body1">
        Corrosion induced by Carbonation: {selectedCarbonationClass}
      </Typography>
      <Typography variant="body1">
        Corrosion induced by Chlorides in Sea Water: {selectedCorrosion}
      </Typography>
      <Typography variant="body1">
        Corrosion induced by Chemical Attacks: {selectedChemicalAttack}
      </Typography>
      <Typography variant="body1">Design Life: {selectedDesignLife}</Typography>
      <Typography variant="body1">
        Selected Strength Class: {selectedStrengthClass}
      </Typography>

      {selectedStructureType === "Inland Structure" &&
      selectedArea === "Kurunagala Area" ? (
        <Typography variant="body1">
          Max w/c ratio- 0.6 <br /> Min strength class- 25/30 <br /> Min cement
          content- 280
        </Typography>
      ) : null}

      {selectedStructureType === "Inland Structure" &&
      selectedArea === "Colombo Area" ? (
        <Typography variant="body1">
          Max w/c ratio- 0.55 <br /> Min strength class- 30/37 <br /> Min cement
          content- 300
        </Typography>
      ) : null}

      {selectedStructureType === "Marine Structure" &&
      selectedArea === "Colombo Area" ? (
        <Typography variant="body1">
          Max w/c ratio- 0.45 <br /> Min strength class- 35/45 <br /> Min cement
          content- 320
        </Typography>
      ) : null}
    </React.Fragment>
  );
}
