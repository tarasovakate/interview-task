import React, {useContext} from 'react';
import Store from "../context";
import {Grid, IconButton, List, ListItem, ListItemSecondaryAction, ListItemText, Typography} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import CheckCircleOutlineTwoToneIcon from "@material-ui/icons/CheckCircleOutlineTwoTone";

const CompleteList = () => {
  const { state, dispatch } = useContext(Store);

  let count = state.completeTodos.length;
  let comment;
  if (count === 0) {
    comment = "No completed tasks!";
  } else {
    comment = "";
  }

  return (
    <div>
      <br />
      <br />
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h6">Completed task List ({count})</Typography>
          <Typography>{comment}</Typography>
          <br />
          <div>
            <List>
              {state.completeTodos.map(t => (
                <ListItem divider key={t}>
                  <ListItemText primary={t} />
                  <ListItemSecondaryAction>
                    <IconButton
                      edge="end"
                      aria-label="delete"
                      onClick={() => dispatch({ type: "DELETE-COMPLETE", payload: t })}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              ))}
            </List>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default CompleteList;