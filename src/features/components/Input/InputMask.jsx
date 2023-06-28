import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React, { forwardRef } from 'react';

const useStyles = makeStyles({
  input: {
    minWidth: '90%',
    marginBottom: '49px',
    marginTop: '40px',
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

const InputMask = (props, ref) => {
  const classes = useStyles();
  return (
    <TextField
      {...props}
      inputRef={ref}
      label="Telefone"
      className={classes.input}
      style={{
        color: '#fff',
      }}
      InputProps={{
        className: classes.inputContent,
      }}
      InputLabelProps={{
        className: classes.inputLabel,
      }}
    />
  );
};

export default forwardRef(InputMask);
