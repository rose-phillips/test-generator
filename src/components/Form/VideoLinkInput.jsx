import { useState } from "react";
import { FormLabel, TextField, Button } from "@mui/material";
import Grid from "@mui/material/Grid2";

export default function VideoLinkInput({ handleSetStateForArrays }) {
  const [video, setVideo] = useState("");
  const [videoLinkText, setVideoLinkText] = useState("");
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
      <FormLabel htmlFor="steps">Screen recorded test results</FormLabel>
      <TextField
        fullWidth
        variant="outlined"
        id="videos"
        name="videos"
        type="videos"
        placeholder="Link text here"
        size="small"
        onChange={(e) => setVideoLinkText(e.target.value)}
      />

      <TextField
        fullWidth
        variant="outlined"
        id="videos"
        name="videos"
        type="videos"
        placeholder="paste URL here"
        size="small"
        onChange={(e) => setVideo(e.target.value)}
      />
      <Button
        variant="outlined"
        onClick={() => {
          handleSetStateForArrays("videos", {
            text: videoLinkText,
            link: video,
          });
          setVideoLinkText("");
          setVideo("");
        }}
      >
        Add
      </Button>
    </Grid>
  );
}
