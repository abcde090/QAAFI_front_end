import React, { useState } from 'react';
import { Alert } from 'reactstrap';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import { Link as NavLink } from "react-router-dom";
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import Container from '@material-ui/core/Container';
import { useSelector, useDispatch } from 'react-redux';
import { actionCreators } from './store';
import { Redirect } from 'react-router-dom';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://s4305352-deco7180.uqcloud.net/deco7381/index.php">
       Team Solomid
          
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn() {

  const classes = useStyles();
  const auth = useSelector(state => state.getIn(['authReducer', 'isAuthenticated']));
  const error = useSelector((state) => state.getIn(['errorReducer', 'error']));

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const loginUser = (userData) => dispatch(actionCreators.loginUser(userData));

  const onChangeName = (event) => {
    setUsername(event.target.value);
  };

  const onChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (username.trim() === '' || password.trim() === '') return;
    const userData = {
      username: username,
      password: password
    };

    loginUser(userData);
  }

  return (

    <Container component="main" maxWidth="xs">
      {auth ? <Redirect to="/admin" /> : null}
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        {error ? (
          <Alert color='danger'>{error}</Alert>
        ) : null}
        <form onSubmit={onSubmit} className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            onChange={onChangeName}
            id="username"
            label="Username"
            name="string"
            autoComplete="string"
            autoFocus

          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            onChange={onChangePassword}
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"

          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign In
          </Button>
          <Grid container>
          
            <Grid item>
             <NavLink to="/admin">
                {"Continue without login "}
              </NavLink>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}


