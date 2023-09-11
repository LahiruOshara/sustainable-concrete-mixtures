import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import {
  carbonationClassList,
  corrosionMarineList,
  chemicalAttackInlandList,
} from "../../constants/GeneralConstants";

export default function FormStepTwo({
  structureType,
  area,
  carbonationClass,
  corrosion,
  chemicalAttack,
  setCarbonationClass,
  setCorrosion,
  setChemicalAttack,
}) {
  const handleCarbonationClassChange = (event) => {
    setCarbonationClass(event.target.value);
  };

  const handleCorrosionChange = (event) => {
    setCorrosion(event.target.value);
  };

  const handleChemicalAttackChange = (event) => {
    setChemicalAttack(event.target.value);
  };

  console.log("area", area);
  console.log("structureType", structureType);

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Degradation Processes
      </Typography>

      <Grid container spacing={3} style={{ marginTop: "10px" }}>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              Corrosion induced by carbonation
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={carbonationClass || ""}
              label="Carbonation Class"
              onChange={handleCarbonationClassChange}
              placeholder="Carbonation Class"
            >
              {carbonationClassList.map((item) => (
                <MenuItem key={item.key} value={item.key}>
                  {item.value}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
      </Grid>

      {structureType === "Inland Structure" ? (
        <Grid container spacing={3} style={{ marginTop: "10px" }}>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Corrosion induced by Chlorides from Sea Water
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={corrosion || ""}
                label="Corrosion"
                onChange={handleCorrosionChange}
                placeholder="Corrosion"
              >
                {corrosionMarineList.map((item) => (
                  <MenuItem
                    key={item.key}
                    value={item.key}
                    disabled={item.disabled}
                  >
                    {item.value}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      ) : null}

      {structureType === "Inland Structure" && area === "Colombo Area" ? (
        <Grid container spacing={3} style={{ marginTop: "10px" }}>
          <Grid item xs={6}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Corrosion induced by Chemical Attack
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={chemicalAttack || ""}
                label="Chemical Attack"
                onChange={handleChemicalAttackChange}
                placeholder="Chemical Attack"
              >
                {chemicalAttackInlandList.map((item) => (
                  <MenuItem
                    key={item.key}
                    value={item.key}
                    disabled={item.disabled}
                  >
                    {item.value}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      ) : null}
    </React.Fragment>
  );
}
