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
import {
  mixBatchSelectionList,
  waterPermeabilityList,
} from "../../constants/GeneralConstants";

export default function FormStepSeven({
  strengthClass,
  waterPermeability,
  setWaterPermeability,
  sustainabilityScore,
  setSustainabilityScore,
}) {
  const handleDesignLifeChange = (event) => {
    setSustainabilityScore(event.target.value);
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom style={{ fontWeight: "bold" }}>
        Sustainability Scores
      </Typography>

      <Typography variant="body1">
        According to the selected requirements, 3 mixes out of the 11 available
        mixes qualify.
        <br />
        Below are the overall sustainability scores for the qualifying mixes
        under the selected weighting combination.
        <br />
        The scores for each mix is given considering 3 batching plant locations.
        <br />
        <br />
        B1- Peliyagoda <br />
        B2- Colombo <br />
        B3- Kurunegala <br />
        <br />
      </Typography>

      <Typography variant="body1" style={{ fontWeight: "bold" }}>
        You can select the option you prefer (Please note that the most
        sustainable mix is the one with the highest score out of the given
        scores)
        <br />
      </Typography>

      <TableContainer component={Paper} size="small">
        <Table aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell style={{ fontWeight: "bold" }}></TableCell>
              <TableCell style={{ fontWeight: "bold" }}>B1</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>B2</TableCell>
              <TableCell style={{ fontWeight: "bold" }}>B3</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell
                component="th"
                scope="row"
                style={{ fontWeight: "bold" }}
              >
                M5
              </TableCell>
              <TableCell>0.926</TableCell>
              <TableCell>0.914</TableCell>
              <TableCell>0.987</TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                component="th"
                scope="row"
                style={{ fontWeight: "bold" }}
              >
                M6
              </TableCell>

              <TableCell>0.783</TableCell>
              <TableCell>0.772</TableCell>
              <TableCell>0.842</TableCell>
            </TableRow>
            <TableRow>
              <TableCell
                component="th"
                scope="row"
                style={{ fontWeight: "bold" }}
              >
                M7
              </TableCell>

              <TableCell>0.857</TableCell>
              <TableCell>0.845</TableCell>
              <TableCell>0.916</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <br />
      <br />

      <Grid container spacing={6}>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              Select Mix Design
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={sustainabilityScore || ""}
              label="Select Mix Design"
              onChange={handleDesignLifeChange}
              placeholder="Select Mix Design"
            >
              {mixBatchSelectionList.map((item) => (
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
