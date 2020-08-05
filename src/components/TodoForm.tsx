import React, { useState, ChangeEvent, KeyboardEvent, MouseEvent } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      justifyContent: 'flex-start',
      alignItems: 'flex-end',
      margin: '2rem 0',
    },
    input: {
      flexGrow: 1,
    },
    button: {
      margin: '0 0 0 1rem',
    },
  })
);

interface TodoFormProps {
  onAdd(title: string): void;
}

export default function BasicTextFields(props: TodoFormProps) {
  const classes = useStyles();
  const [title, setTitle] = useState<string>('');

  const changeTitleHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const keyPressHandler = (event: KeyboardEvent): void => {
    if (event.key === 'Enter') {
      event.preventDefault();
      if (title) {
        props.onAdd(title);
        setTitle('');
      }
    }
  };

  const mousePressHandler = (event: MouseEvent): void => {
    event.preventDefault();
    if (title) {
      props.onAdd(title);
      setTitle('');
    }
  };

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField
        onChange={changeTitleHandler}
        onKeyPress={keyPressHandler}
        value={title}
        id="standard-basic"
        label="Input task name"
        color="primary"
        className={classes.input}
      />
      <Button
        className={classes.button}
        variant="outlined"
        color="primary"
        onClick={mousePressHandler}
      >
        Submit
      </Button>
    </form>
  );
}
