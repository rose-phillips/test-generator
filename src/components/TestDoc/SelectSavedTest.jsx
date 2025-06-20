import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

export default function SelectSavedTest({
  allSavedTests,
  handleSavedTestSelect,
}) {
  return (
    <FormControl fullWidth sx={{ mt: 3 }} className="no-print">
      <InputLabel id="select-saved-test">Select Saved Test</InputLabel>
      <Select
        labelId="select-saved-test"
        id="select-saved-test"
        value={""}
        label="Select Saved Test"
        onChange={(e) =>
          handleSavedTestSelect(
            e.target.value.testNumber,
            e.target.value.testTitle
          )
        }
      >
        {allSavedTests.map((item) => (
          <MenuItem key={Math.floor(Math.random() * 10000)} value={item}>
            {`${item.testNumber} ${item.testTitle}`}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
