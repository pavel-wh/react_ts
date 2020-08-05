import React, { MouseEvent } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import { ITodo } from '../interfaces/todo';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      backgroundColor: theme.palette.background.paper,
    },
    text: {
      overflow: 'hidden',
      wordWrap: 'break-word',
    },
  })
);

type TodoListProps = {
  todos: ITodo[];
  onToggle(id: number): void;
  onRemove: (id: number) => void;
};

export default function CheckboxList({
  todos,
  onToggle,
  onRemove,
}: TodoListProps) {
  const classes = useStyles();

  const removeHandler = (event: MouseEvent, id: number) => {
    event.preventDefault();
    onRemove(id);
  };

  if (!todos.length) {
    return <p>No task yet...</p>;
  }

  return (
    <List className={classes.root}>
      {todos.map((todo: ITodo) => {
        const labelId = `checkbox-list-label-${todo.id}`;

        return (
          <ListItem
            key={todo.id}
            role={undefined}
            dense
            button
            onClick={onToggle.bind(null, todo.id)}
          >
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={todo.completed}
                tabIndex={-1}
                disableRipple
                inputProps={{ 'aria-labelledby': labelId }}
                onChange={onToggle.bind(null, todo.id)}
              />
            </ListItemIcon>
            <ListItemText
              id={labelId}
              primary={`${todo.title}`}
              className={classes.text}
            />
            <ListItemSecondaryAction
              onClick={(event) => removeHandler(event, todo.id)}
            >
              <IconButton edge="end" aria-label="comments" color="secondary">
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
    </List>
  );
}
