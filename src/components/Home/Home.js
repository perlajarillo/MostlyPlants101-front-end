import React, { Component } from "react";
import headerBG from "../../images/header-bg.jpg";
import { withStyles } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";

const styles = theme => ({
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

  introText: {
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

  introHeading: {
    fontSize: "75px",
    fontStyle: "bold",
    fontWeight: "700",
    lineHeight: "75px",
    marginBottom: "50px",
    fontFamily: '"Montserrat"',
    textTransform: "uppercase !important"
  },
  container: {
    width: "100%",
    padding: "100px",
    marginRight: "auto",
    marginLeft: "auto",
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
    minWidth: "992px !important"
  },
  title: {
    textTransform: "uppercase !important",
    textStyle: "bold",
    fontFamily: '"Montserrat"',
    textAlign: "center",
    paddingBottom: "20px"
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

class Home extends Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="description" content="" />
        <meta name="author" content="" />

        <title>Mostly Plants 101</title>
        <header className={classes.masthead}>
          <div>
            <div className={classes.introText}>
              <div className={classes.introLeadIn}>Welcome!</div>
              <div className={classes.introHeading}>Mostly Plants 101</div>
              <Button className={classes.button} size="large">
                Tell Me More
              </Button>
            </div>
          </div>
        </header>

        <section id="about">
          <div className={classes.container}>
            <div>
              <div>
                <Typography variant="h4" className={classes.title} gutterBottom>
                  Mostly Plants 101
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Mostly Plants has been created to promote a healthy diet by
                  teaching you how to make a bowl with a variety of ingredients
                  that you probably have at home.
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Take a look at your cupboard and sign up to start!
                </Typography>
                <Typography variant="body2" gutterBottom>
                  Once you have created an account you will be able to make
                  bowls and save them for the future.
                </Typography>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default withStyles(styles)(Home);
