import React from "react";
import { makeStyles } from "@material-ui/core/styles";

function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.footer_style}>
      <h4>Designed by sasi</h4>
    </div>
  );
}

export default Footer;

const useStyles = makeStyles({
  footer_style: {
    textAlign: "right",
    marginRight: 10,
  },
});
