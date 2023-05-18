import React from "react";
import Checkbox from "@mui/material";
import withStyles from "@mui/material";


const AppCheckBox = withStyles({
  root: {
    color: '#ffcb0d',
    '&$checked': {
      color: '#ffcb0d',
    },
  },
  checked: {}
})((props) => <Checkbox color="default" {...props}/>);

export default AppCheckBox;

