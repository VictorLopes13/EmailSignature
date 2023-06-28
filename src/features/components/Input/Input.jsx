import { TextField } from '@material-ui/core';
import PropTypes from 'prop-types';
import React from 'react';

import { useStyles } from './styles';

const Input = (props) => {
  const classes = useStyles();
  const {
    id,
    label,
    defaultValue,
    error,
    helperText,
    type,
    value,
    onChange,
  } = props;

  return (
    <TextField
      id={id}
      type={type}
      label={label}
      error={error}
      helperText={helperText}
      className={classes.input}
      defaultValue={defaultValue}
      value={value}
      onChange={onChange}
      InputProps={{
        className: classes.inputContent,
      }}
      InputLabelProps={{
        className: classes.inputLabel,
      }}
    />
  );
};

Input.propTypes = {
  id: PropTypes.isRequired,
  label: PropTypes.isRequired,
  defaultValue: PropTypes.isRequired,
  error: PropTypes.isRequired,
  helperText: PropTypes.isRequired,
  type: PropTypes.isRequired,
  value: PropTypes.isRequired,
  onChange: PropTypes.isRequired,
};

export default Input;
