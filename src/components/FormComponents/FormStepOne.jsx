import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import {
  inlandSelection,
  marineSelection,
  structureTypes,
  COLOMBO,
  KURUNEGALA,
  INLAND,
  MARINE,
} from "../../constants/GeneralConstants";

import { getValueByKey, getKeyByValue } from "../../generalUtils/GeneralUtilities";

export default function FormStepOne({
  structureType: initialStructureType,
  area: initialArea,
  areaList: initialAreaList,
  setAreaList,
  onStructureTypeChange,
  onAreaChange,
}) {

  const [structureType, setStructureType] =
    React.useState(getKeyByValue(initialStructureType, structureTypes));
  const [isStructureSelected, setIsStructureSelected] = React.useState(
    Boolean(initialStructureType)
  );

  const [area, setArea] = React.useState(getKeyByValue(initialArea, initialAreaList));

  const handleStructureTypeChange = (event) => {
    const structureType = event.target.value;
    setStructureType(structureType);
    setIsStructureSelected(true);
    setArea(""); // Reset the selected area value

    if (structureType === INLAND) {
      setAreaList(inlandSelection);
    } else if (structureType === MARINE) {
      setAreaList(marineSelection);
    }

    // Pass the selected structure type to the parent component
    onStructureTypeChange(getValueByKey(structureType, structureTypes));
  };

  const handleAreaChange = (event) => {
    const area = event.target.value;
    setArea(area);

    if (area === KURUNEGALA) {
      console.log(KURUNEGALA);
    } else if (area === COLOMBO) {
      console.log(COLOMBO);
    }

    // Pass the selected area to the parent component
    onAreaChange(getValueByKey(area, initialAreaList));
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Structure Details
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              Structure Type
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={structureType || ""}
              label="Structure Type"
              onChange={handleStructureTypeChange}
              placeholder="Structure Type"
            >
              {structureTypes.map((item) => (
                <MenuItem key={item.key} value={item.key}>
                  {item.value}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={6}>
          {isStructureSelected ? (
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label-1">Area</InputLabel>
              <Select
                labelId="demo-simple-select-label-1"
                id="demo-simple-select-1"
                value={area || ""}
                label="Area"
                onChange={handleAreaChange}
                placeholder="Area"
              >
                {initialAreaList.map((item) => (
                  <MenuItem key={item.key} value={item.key}>
                    {item.value}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          ) : null}
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
