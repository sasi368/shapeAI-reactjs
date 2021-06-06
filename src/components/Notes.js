import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

export default function Notes() {
  const classes = useStyles();

  return (
    <div className={classes.div}>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography
            className={classes.title}
            color="textPrimary"
            gutterBottom
          >
            Javascript and React js
          </Typography>

          <Typography variant="body2" className={classes.description}>
            This was an amazing bootcamp taken by shaurya We covered everything
            from scratch including Javascript, react js, html
          </Typography>
        </CardContent>
      </Card>
      <br />
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography
            className={classes.title}
            color="textPrimary"
            gutterBottom
          >
            Javascript and React js
          </Typography>

          <Typography variant="body2" className={classes.description}>
            This was an amazing bootcamp taken by shaurya We covered everything
            from scratch including Javascript, react js, html
          </Typography>
        </CardContent>
      </Card>
      <br />
      <Card className={classes.root} variant="outlined">
        <CardContent>
          <Typography
            className={classes.title}
            color="textPrimary"
            gutterBottom
          >
            Javascript and React js
          </Typography>

          <Typography variant="body2" className={classes.description}>
            This was an amazing bootcamp taken by shaurya We covered everything
            from scratch including Javascript, react js, html
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

const useStyles = makeStyles({
  div: {
    backgroundColor: "#f5f5f5",
    padding: "2%",
  },
  root: {
    width: 100,
    borderRadius: "5%",
    backgroundColor: "#ffffff",
    minWidth: 275,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "left",
  },
  description: {
    fontSize: 15,
    textAlign: "left",
  },
  pos: {
    marginBottom: 12,
  },
});
