import { Select, MenuItem } from "@mui/material";

import Grid from "@mui/material/Grid2";

function Brand({ handleSetStateForStrings }) {
  return (
    <Grid className="no-print" pb={3}>
      <Select
        labelId="brand-select"
        id="brand"
        label="brand"
        fullWidth
        size="small"
        defaultValue={"ybs"}
        onChange={(e) => {
          handleSetStateForStrings("brand", e.target.value);
        }}
      >
        <MenuItem value={"ybs"}>YBS</MenuItem>
        <MenuItem value={"accord"}>Accord</MenuItem>
        <MenuItem value={"cbs"}>CBS</MenuItem>
      </Select>
    </Grid>
  );
}

export default Brand;
