import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import {
  designLifeList,
  strengthGradeListKurunegala,
  strengthGradeListColombo,
} from "../../constants/GeneralConstants";

export default function FormStepTwo({
  area,
  designLife,
  strengthClass,
  setDesignLife,
  setStrengthClass,
}) {
  const [strengthClassList, setStrengthClassList] = React.useState([]);

  React.useEffect(() => {
    console.log("area", area);
    if (area === 'Colombo Area') {
      setStrengthClassList(strengthGradeListColombo);
    } else {
      setStrengthClassList(strengthGradeListKurunegala);
    }
    console.log("strengthClassList", strengthClassList);
  }, [area, strengthClassList]);

  const handleDesignLifeChange = (event) => {
    setDesignLife(event.target.value);
  };

  const handleStrengthClassChange = (event) => {
    setStrengthClass(event.target.value);
  };

  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Specifications
      </Typography>

      <Grid container spacing={3}>
        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Design life</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={designLife || ""}
              label="Design life"
              onChange={handleDesignLifeChange}
              placeholder="Design life"
            >
              {designLifeList.map((item) => (
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

        <Grid item xs={6}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              Strength Class
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={strengthClass || ""}
              label="Strength Class"
              onChange={handleStrengthClassChange}
              placeholder="Strength Class"
            >
              {strengthClassList.map((item) => (
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
    </React.Fragment>
  );
}
