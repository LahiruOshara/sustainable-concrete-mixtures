import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

export default function SummaryView({
  selectedStructureType,
  selectedArea,
  cementType,
  mixtureType,
}) {

  const data = [
    { property: "Cement", value: 400 },
    { property: "Water", value: 165 },
    { property: "Msand", value: 827 },
    { property: "Coarse Agg", value: 1070 },
    { property: "Sika 2055 (ml)", value: 3.6 },
    { property: "Density", value: 2462 },
    { property: "w/c", value: 0.41 },
    { property: "Admix.Dosage %", value: 0.9 },
  ];

  const data1 = [
    { property: "Cement", value: 350 },
    { property: "Water", value: 205 },
    { property: "River sand", value: 690 },
    { property: "Coarse Agg", value: 1152 },
    { property: "Sika 2055 (ml)", value: 0 },
    { property: "Density", value: 2397 },
    { property: "w/c", value: 0.59 },
    { property: "Admix.Dosage %", value: 0 },
  ];

  const finalData = mixtureType === "Mix 1" ? data : data1;

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
      <Typography variant="body1">{cementType}</Typography>

      <Typography variant="h7" gutterBottom style={{ fontWeight: "bold" }}>
        <br />
        Mixture Propotions
        <br />
      </Typography>

      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Property</TableCell>
              <TableCell align="right">Value</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {finalData.map((row, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  {row.property}
                </TableCell>
                <TableCell align="right">{row.value}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {mixtureType === "Mix 1" ? (
        <div>
          <Typography variant="h7" gutterBottom style={{ fontWeight: "bold" }}>
            <br />
            Properties of coarse aggregates:
            <br />
          </Typography>
          <Typography variant="body1">
            Moisture (%)- 0.39 <br />
            Absorption (%)- 0.39
          </Typography>
        </div>
      ) : (
        <div>
          <Typography variant="h7" gutterBottom style={{ fontWeight: "bold" }}>
            <br />
            Properties of coarse aggregates:
            <br />
          </Typography>
          <Typography variant="body1">
            Moisture (%)- 0.42 <br />
            Absorption (%)- 0.39
          </Typography>
        </div>
      )}

      {mixtureType === "Mix 1" ? (
        <div>
          <Typography variant="h7" gutterBottom style={{ fontWeight: "bold" }}>
            <br />
            Properties of fine aggregates:
            <br />
          </Typography>
          <Typography variant="body1">
            Moisture (%)- 0.28 <br />
            Absorption (%)- 1.47
          </Typography>
        </div>
      ) : (
        <div>
          <Typography variant="h7" gutterBottom style={{ fontWeight: "bold" }}>
            <br />
            Properties of fine aggregates:
            <br />
          </Typography>
          <Typography variant="body1">
            Moisture (%)- 0.28 <br />
            Absorption (%)- 1.47
          </Typography>
        </div>
      )}
    </React.Fragment>
  );
}
