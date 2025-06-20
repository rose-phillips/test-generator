import {
  List,
  ListItem,
  ListItemText,
  Box,
  Divider,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export default function Prerequisites({
  currentTest,
  handleDeleteFromStateArray,
}) {
  return (
    <Box>
      <h3>Prerequisites</h3>
      <List sx={{ listStyle: "decimal", pl: 2 }}>
        {currentTest.prerequisites.map((prerequisite) => (
          <ListItem
            sx={{ display: "list-item" }}
            key={`${prerequisite}-item`}
            disablePadding
            secondaryAction={
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() =>
                  handleDeleteFromStateArray("prerequisites", prerequisite)
                }
              >
                <DeleteIcon />
              </IconButton>
            }
          >
            <ListItemText
              key={prerequisite}
              primary={prerequisite}
              sx={{ mr: 5 }}
            />
            <Divider />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
