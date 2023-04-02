import { TextField } from "@mui/material";
import React from "react";

function SMInput(props) {
  const { label, disabled, onChange, color, variant, type, fullWidth } = props;
  return (
    <>
      <TextField
        color={color}
        label={label}
        disabled={disabled}
        onChange={onChange}
        variant={variant}
        type={type}
      />
    </>
  );
}
export default SMInput;
