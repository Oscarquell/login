import React from 'react';
import {TextField} from "@mui/material";

const MaterialInput = (props) => {

  const {
    label,
    type,
    onChange
  } = props

  return (
    <TextField
      label={label}
      type={type}
      onChange={onChange}
    />
  );
};

export default MaterialInput;