import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
  input: {
    minWidth: '100%',
    marginBottom: '49px',
    '& .MuiInput-underline:after': {
      borderBottomColor: '#fff',
    },
    '& label.Mui-focused': {
      color: '#fff',
    },
  },
  inputContent: {
    color: '#fff',
    fontFamily: 'Roboto Mono, monospace',
    fontSize: '18px',
    fontWeight: 500,
    borderBottom: '3px solid #fff',
  },
  inputLabel: {
    color: '#fff',
    lineHeight: '1.45',
    letterSpacing: '0.5px',
  },
});
