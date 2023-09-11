import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

export default function SummaryView({
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
        Mix Design Details
      </Typography>

      <Typography variant="h7" gutterBottom style={{ fontWeight: "bold" }}>
        Minimum requirements according to EN206
      </Typography>

      {selectedStructureType === "Inland Structure" &&
      selectedArea === "Kurunegala Area" ? (
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

      <Typography variant="h7" gutterBottom style={{ fontWeight: "bold" }}>
        <br />
        Cement Type
        <br />
      </Typography>

      <Typography variant="h7" gutterBottom style={{ fontWeight: "bold" }}>
        <br />
        Mixture Propotions
        <br />
      </Typography>

      <Typography variant="h7" gutterBottom style={{ fontWeight: "bold" }}>
        <br />
        Properties of coarse aggregates
        <br />
      </Typography>

      <Typography variant="h7" gutterBottom style={{ fontWeight: "bold" }}>
        <br />
        Properties of fine aggregates
        <br />
      </Typography>
    </React.Fragment>
  );
}
