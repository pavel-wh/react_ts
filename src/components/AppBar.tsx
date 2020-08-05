import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { NavLink } from 'react-router-dom';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    link: {
      color: 'white',
      textDecoration: 'none',
    },
  })
);

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="h1" className={classes.title}>
            <NavLink to="/" className={classes.link}>
              ToDo
            </NavLink>
          </Typography>
          <Button color="inherit">
            <NavLink to="/" className={classes.link}>
              ToDo List
            </NavLink>
          </Button>
          <NavLink to="/about" className={classes.link}>
            <Button color="inherit">Info</Button>
          </NavLink>
        </Toolbar>
      </AppBar>
    </div>
  );
}
