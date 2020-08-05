import React from 'react';
import { useHistory } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

function About() {
  const histroy = useHistory();
  return (
    <Typography
      component="div"
      style={{
        backgroundColor: 'transparent',
        height: `calc(100vh - 64px)`,
      }}
    >
      <Typography variant="h3" component="h2" style={{ marginTop: '2rem' }}>
        About Page
      </Typography>
      <Typography component="p" style={{ margin: '2rem 0' }}>
        This app is tasker
      </Typography>
      <Button
        variant="outlined"
        color="primary"
        onClick={() => histroy.push('/')}
      >
        Back to home
      </Button>
    </Typography>
  );
}

export default About;
