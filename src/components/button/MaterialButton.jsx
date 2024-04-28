import React from 'react';
import {Button} from "@mui/material";

const MaterialButton = (props) => {

  const {
    value,
    onClick
  } = props

  return (
    <Button
      variant="contained"
      onClick={onClick}
    >
      {value}
    </Button>
  );
};

export default MaterialButton;