import {
  List,
  ListItem,
  //ListItemText,
  Box,
  Divider,
  IconButton,
  ListItemButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

export default function VideoLinks({
  currentTest,
  handleDeleteFromStateArray,
}) {
  return (
    <Box>
      <List sx={{ listStyle: "decimal", pl: 0 }}>
        {currentTest.videos?.map((video) => (
          <ListItem
            key={Math.floor(Math.random() * 10000)}
            disablePadding
            secondaryAction={
              <IconButton
                edge="end"
                aria-label="delete"
                onClick={() => handleDeleteFromStateArray("videos", video)}
                className="no-print"
              >
                <DeleteIcon className="no-print" />
              </IconButton>
            }
          >
            <ListItemButton
              sx={{ textDecoration: "underline", pl: "0" }}
              component="a"
              target="_blank"
              href={video.link}
            >
              <IconButton>
                <OpenInNewIcon />
              </IconButton>
              {video.text}
            </ListItemButton>
            <Divider />
          </ListItem>
        ))}
      </List>
    </Box>
  );
}
