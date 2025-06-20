import { Box, Button } from "@mui/material";
import Prerequisites from "./Prerequisites";
import TestSteps from "./TestSteps";
import SelectSavedTest from "./SelectSavedTest";
import VideoLinks from "./VideoLinks";

export default function TestDoc({
  currentTest,
  handleEditInStateArray,
  showInput,
  showText,
  setEditedValue,
  handleDeleteFromStateArray,
  handleSave,
  handlePrint,
  allSavedTests,
  handleSavedTestSelect,
}) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
      className={currentTest.brand}
    >
      <h2>
        {currentTest.testNumber} {currentTest.testTitle}
      </h2>

      <Prerequisites
        currentTest={currentTest}
        handleDeleteFromStateArray={handleDeleteFromStateArray}
      />

      <TestSteps
        currentTest={currentTest}
        handleDeleteFromStateArray={handleDeleteFromStateArray}
        handleEditInStateArray={handleEditInStateArray}
        showInput={showInput}
        showText={showText}
        setEditedValue={setEditedValue}
      />

      <Box>
        <h3>Test Result</h3>
        <img
          src={`src/assets/${currentTest.testNumber} ${currentTest.testTitle}.png`}
          alt=""
        />
      </Box>

      <VideoLinks
        currentTest={currentTest}
        handleDeleteFromStateArray={handleDeleteFromStateArray}
      />

      <Button
        variant="outlined"
        disableElevation
        size="large"
        onClick={handleSave}
        sx={{ mt: 3 }}
      >
        Save Test
      </Button>

      <Button
        variant="contained"
        disableElevation
        size="large"
        onClick={handlePrint}
        sx={{ mt: 3 }}
      >
        Create PDF
      </Button>

      <SelectSavedTest
        allSavedTests={allSavedTests}
        handleSavedTestSelect={handleSavedTestSelect}
      />

      <Button
        sx={{ mt: 30 }}
        onClick={() => {
          localStorage.clear();
        }}
      >
        clear local storage
      </Button>
    </Box>
  );
}
