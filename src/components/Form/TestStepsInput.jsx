import { useState } from "react";
import { FormLabel, TextField, Button } from "@mui/material";
import Grid from "@mui/material/Grid2";

export default function TestStepsInput({ handleSetStateForArrays }) {
  const [step, setStep] = useState(``);
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
      <FormLabel htmlFor="steps">Steps</FormLabel>
      <TextField
        fullWidth
        variant="outlined"
        id="steps"
        name="steps"
        type="steps"
        multiline
        minRows={3}
        maxRows={6}
        placeholder="Go to https://webserver-ybs-dev.lfr.cloud/"
        size="small"
        value={step}
        onChange={(e) => setStep(e.target.value)}
      />
      <Button
        variant="outlined"
        onClick={() => {
          handleSetStateForArrays("steps", step);
          setStep("");
        }}
      >
        Add
      </Button>
    </Grid>
  );
}
