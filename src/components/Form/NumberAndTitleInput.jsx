import { FormLabel, OutlinedInput } from "@mui/material";
import Grid from "@mui/material/Grid2";

export default function NumberAndTitleInput({ handleSetStateForStrings }) {
  return (
    <>
      {" "}
      <Grid container direction="column" rowSpacing={0} size={2}>
        <FormLabel htmlFor="test-number">Test No.</FormLabel>
        <OutlinedInput
          id="test-number"
          name="test-number"
          placeholder="1.1"
          size="small"
          onChange={(e) => {
            handleSetStateForStrings("testNumber", e.target.value);
          }}
        />
      </Grid>
      <Grid container direction="column" rowSpacing={0} size={10}>
        <FormLabel htmlFor="test-title">Test Title</FormLabel>
        <OutlinedInput
          id="test-title"
          name="test-title"
          placeholder="Check the new fragment matches the designs"
          size="small"
          onChange={(e) => {
            handleSetStateForStrings("testTitle", e.target.value);
          }}
        />
      </Grid>
    </>
  );
}
