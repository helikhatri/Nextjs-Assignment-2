import {useState} from 'react'
import Input from "@material-ui/core/Input";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormHelperText from "@material-ui/core/FormHelperText";
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

function Copyright() {
  return (
      <Typography variant="body2" color="textSecondary" align="center">
          {'Copyright © '}
          <Link color="inherit" href="https://material-ui.com/">
              Your Website
    </Link>{' '}
          {new Date().getFullYear()}
          {'.'}
      </Typography>
  );
}
const level = [
  {
    value: "Easy",
    label: "Easy"
  },
  {
    value: "Mid",
    label: "Mid"
  },
  {
    value: "Difficult",
    label: "Difficult"
  }
];
const category = [
  {
    value: "Science",
    label: "Science"
  },
  {
    value: "Islam",
    label: "Islam"
  },
  {
    value: "Other",
    label: "Other"
  }
];
const useStyles = makeStyles((theme) => ({
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
      marginTop: theme.spacing(3),
  },
  submit: {
      margin: theme.spacing(3, 0, 2),
  },
}));
const Form = () => {
  
  const [name,setName] = useState("");
  const [description,setDescription] = useState("");
  const [submit,setSubmit] = useState(""); 
  const [loading, setLoading] = useState(false);
  //const [fields, handleFieldChange] = useFormFields();
  const classes = useStyles();

    return (
      <Container component="main" maxWidth="xs">
      <CssBaseline />
      {loading ? <h2>...Loading</h2> : null}
      <div className={classes.paper}>
          <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
             Add Blog
  </Typography>
          <form className={classes.form} 
          >
              <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                      <TextField
                          name="firstName"
                          variant="outlined"
                          required
                          fullWidth
                          id="firstname"
                          label="First Name"
                          autoFocus
                      />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                      <TextField
                          variant="outlined"
                          required
                          fullWidth
                          id="lastname"
                          label="Last Name"
                          name="lastName"
                      />
                  </Grid>
                  <Grid item xs={12}>
                      <TextField
                          variant="outlined"
                          required
                          fullWidth
                          id="email"
                          label="Email Address"
                          name="email"
                          autoComplete="email"
                      />
                  </Grid>
                  <Grid item xs={12}>
                      <TextField
                          variant="outlined"
                          required
                          fullWidth
                          name="password"
                          label="Password"
                          type="password"
                          id="password"
                          autoComplete="current-password"
                      />
                  </Grid>
                  <Grid item xs={12}>
                      <FormControlLabel
                          control={<Checkbox value="allowExtraEmails" color="primary" />}
                          label="I want to receive inspiration, marketing promotions and updates via email."
                      />
                  </Grid>
              </Grid>
              <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
              >
                  Sign Up
    </Button>
              <Grid container justify="flex-end">
                  <Grid item>
                      <Link href="#" variant="body2">
                          Already have an account? Sign in
        </Link>
                  </Grid>
              </Grid>
          </form>
      </div>
      <Box mt={5}>
          <Copyright />
      </Box>
  </Container>
    )
  }


export default Form;