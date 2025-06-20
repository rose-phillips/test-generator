import {
  List,
  ListItem,
  ListItemText,
  Box,
  Divider,
  IconButton,
  Button
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export default function TestSteps({ currentTest, handleDeleteFromStateArray, handleEditInStateArray, showInput, showText, setEditedValue }) {
  return (
    <Box>
      <h3>Test Steps</h3>
      <List sx={{ listStyle: "decimal", pl: 2 }}>
        {currentTest.steps.map((step) => (
          <ListItem
            sx={{ display: "list-item" }}
            key={`${step}-item`}
            disablePadding
            secondaryAction={
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => handleDeleteFromStateArray("steps", step)}
                className="no-print"
              >
                <DeleteIcon className="no-print" />
              </IconButton>
            }
          >
       
            <ListItemText 
            key={`${step}-text`} 
            id={`${step}-text`}
            primary={step} 
            sx={{ mr: 5 }} 
            onClick={() => {showInput("steps", step) }}
            />
          <form 
          action="" 
          id={`${step}-form`} 
          style={{display: 'none'}}
          onSubmit={() => handleEditInStateArray("steps", step)}
          >
              <input type="text"
             defaultValue={step}
             key={`${step}-key`} 
             id={`${step}-input`}
             onChange={(e) => setEditedValue(e.target.value)}
          />
             <Button id="save-button" disabled={true} onClick={() => handleEditInStateArray("steps", step)}>save</Button>
             <Button id="cancel-button" onClick={() => showText("steps", step)}>cancel</Button>
             </form>
      
            <Divider />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}