import Grid from "@mui/material/Grid2";

import PrerequisitesInput from "./PrerequisitesInput";
import TestStepsInput from "./TestStepsInput";
import NumberAndTitleInput from "./NumberAndTitleInput";
import VideoLinkInput from "./VideoLinkInput";

export default function Form({
  handleSetStateForStrings,
  handleSetStateForArrays,
}) {
  return (
    <Grid
      container
      columnSpacing={1}
      rowSpacing={3}
      sx={{ maxWidth: 520 }}
      className="form no-print"
    >
      <NumberAndTitleInput
        handleSetStateForStrings={handleSetStateForStrings}
      />
      <PrerequisitesInput handleSetStateForArrays={handleSetStateForArrays} />
      <TestStepsInput handleSetStateForArrays={handleSetStateForArrays} />
      <VideoLinkInput handleSetStateForArrays={handleSetStateForArrays} />
    </Grid>
  );
}
