import React from "react";
import Button from "@mui/material/Button";

export const SubmitButton = (props) => {
  const { onClick, title } = props;

  return (
    <Button
      sx={{
        backgroundColor: "#CACACA",
        padding: "10px",
      }}
      onClick={ onClick }
    >
      {title}
    </Button>
  );
};
