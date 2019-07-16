import React from "react";
import { withStyles } from "@material-ui/core/styles";
import headerBG from "../../images/header-bg.jpg";
import Button from "@material-ui/core/Button";
import { Typography } from "@material-ui/core";

const styles = theme => ({
  wrapper: {
    margin: "50px 0",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    [theme.breakpoints.up("sm")]: {
      margin: "50px 0"
    },
    [theme.breakpoints.up("xs")]: { minHeight: "70vh" }
  },
  masthead: {
    textAlign: "center",
    color: "white",
    background: "url(" + headerBG + ")",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "scroll",
    backgroundPosition: "center",
    backgroundSize: "cover",
    paddingTop: "150px",
    paddingBottom: "100px"
  },
  introLeadIn: {
    fontSize: "50px",
    fontStyle: "italic",
    lineHeight: "40px",
    marginBottom: "25px",
    fontFamily: "'Droid Serif'"
  },
  title: {
    fontStyle: "bold",
    textTransform: "uppercase !important"
  },
  button: {
    backgroundColor: "#fed136",
    color: theme.palette.primary.contrastText,
    fontSize: "1.05rem",
    fontFamily: '"Montserrat"',
    padding: "20px 30px",
    "&:hover": { backgroundColor: "#ffc400" }
  }
});
class UserHome extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <header className={classes.masthead}>
          <div className={classes.introLeadIn}>
            Eating healthy and delicious!
          </div>
        </header>
        <Button className={classes.button} size="large">
          Make a new bowl
        </Button>
        <div className={classes.wrapper}>
          <Typography variant="h4" gutterBottom className={classes.title}>
            {" "}
            Bowls you made
          </Typography>
        </div>
      </div>
    );
  }
}
export default withStyles(styles)(UserHome);
