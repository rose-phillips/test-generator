import { useState } from "react";
import { FormLabel, TextField, Button } from "@mui/material";
import Grid from "@mui/material/Grid2";

export default function PrerequisitesInput({ handleSetStateForArrays }) {
  const [prerequisite, setPrerequisite] = useState("");
  return (
    <Grid
      container
      direction="row"
      sx={{
        justifyContent: "flex-start",
      }}
      rowSpacing={1}
      columnSpacing={1}
      size={12}
    >
      <FormLabel htmlFor="prerequisites">Prerequisites</FormLabel>
      <TextField
        fullWidth
        variant="outlined"
        id="prerequisites"
        name="prerequisites"
        type="prerequisites"
        multiline
        minRows={3}
        maxRows={6}
        placeholder="A web browser, such as Chrome, Edge, Firefox or Safari."
        size="small"
        value={prerequisite}
        onChange={(e) => setPrerequisite(e.target.value)}
      />

      <Button
        variant="outlined"
        onClick={() => {
          handleSetStateForArrays("prerequisites", prerequisite);
          setPrerequisite("");
        }}
      >
        Add
      </Button>
    </Grid>
  );
}
