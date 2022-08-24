import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  paper: {
    padding: 20,
    height: '70vh',
    width: 280,
    margin: "20px auto"
  },
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
    },
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
  googleButton: {
    marginBottom: theme.spacing(2),
  },
  primaryButton:{
    margin:'8px 0',
    width : '100%',
    'textTransform':'none'
  },
  secondaryButton:{
    color:'rgb(48, 63, 159)',
    'textTransform':'none'

  },
  secondaryTypo:{
    'font-size' : '13px',
    color:'rgb(117, 117, 117)'
  },
  hover:{
    cursor:'pointer',

  }
}));