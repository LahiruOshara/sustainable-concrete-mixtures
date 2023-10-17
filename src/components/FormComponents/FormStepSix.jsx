import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";
import { sustainabilityWeightList } from "../../constants/GeneralConstants";

export default function FormStepSix({
  sustainabilityWeight,
  setSustainabilityWeight,
}) {

  const handleWeightingCombination = (event) => {
    setSustainabilityWeight(event.target.value);
  };

  // Define the values for the table cells in an array
  const tableData = [
    ["Env", "100%", "50%", "25%", "25%", "40%"],
    ["Eco", "100%", "25%", "50%", "25%", "40%"],
    ["Social", "100%", "25%", "25%", "50%", "20%"],
  ];

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Sustainability Scores
      </Typography>

      <Typography variant="body1" style={{ fontWeight: "bold" }}>
        **Below are the weighting combinations for environmental, economic and
        social scores of the mixtures.
        <br />
        <br />
      </Typography>

      <TableContainer component={Paper} size="small">
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell style={{ fontWeight: "bold" }}></TableCell>
              <TableCell style={{ fontWeight: "bold" }}>W1</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>W2</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>W3</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>W4</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>W5</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {tableData.map((row, index) => (
              <TableRow key={index}>
                {row.map((cellValue, cellIndex) => (
                  <TableCell key={cellIndex}>{cellValue}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Typography variant="body1" style={{ fontWeight: "bold" }}>
        <br />
        Please select the weighting combination according to your requirement.
        <br />
      </Typography>

      <Grid container spacing={6}>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              Weighting Combination
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={sustainabilityWeight || ""}
              label="Weighting Combination"
              onChange={handleWeightingCombination}
              placeholder="Weighting Combination"
            >
              {sustainabilityWeightList.map((item) => (
                <MenuItem key={item.key} value={item.key}>
                  {item.value}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
