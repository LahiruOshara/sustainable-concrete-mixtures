import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import {
  surfaceResistivityList,
  waterPermeabilityList,
} from "../../constants/GeneralConstants";

export default function FormStepFive({
  strengthClass,
  waterPermeability,
  setWaterPermeability,
  surfaceResistivity,
  setSurfaceResistivity,
}) {
  const handleDesignLifeChange = (event) => {
    setSurfaceResistivity(event.target.value);
  };

  const handleStrengthClassChange = (event) => {
    setWaterPermeability(event.target.value);
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Durability Properties
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              Surface Resistivity
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={surfaceResistivity || ""}
              label="Surface Resistivity(RILEM TC 230)"
              onChange={handleDesignLifeChange}
              placeholder="Surface Resistivity(RILEM TC 230)"
            >
              {surfaceResistivityList.map((item) => (
                <MenuItem
                  key={item.key}
                  value={item.key}
                  disabled={item.key === "Normal" && strengthClass === "C25/30"}
                >
                  {item.value}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              Water Permeability
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={waterPermeability || ""}
              label="Water Permeability "
              onChange={handleStrengthClassChange}
              placeholder="Water Permeability "
            >
              {waterPermeabilityList.map((item) => (
                <MenuItem
                  key={item.key}
                  value={item.key}
                  disabled={
                    (item.key === "> 50mm" && surfaceResistivity === "Normal" &&
                      (strengthClass === "C35/45" ||
                        strengthClass === "C45/55")) ||
                    (item.key === "< 50mm" && strengthClass === "C25/30")
                  }
                >
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
