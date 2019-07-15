import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import { Paper, Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faLinkedin,
  faGithub
} from "@fortawesome/free-brands-svg-icons";

const styles = theme => ({
  root: {
    marginTop: theme.spacing(3),
    bottom: 0,
    width: "100vw"
  },
  copyright: {
    lineHeight: "40px",
    color: theme.palette.primary.contrastText
  },
  credits: {
    fontSize: "0.75rem",
    color: theme.palette.primary.contrastText
  },
  paper: {
    padding: theme.spacing(3),
    backgroundColor: theme.palette.primary.light,
    borderRadius: 0,
    textAlign: "center"
  },
  creditsRow: {
    backgroundColor: theme.palette.primary.main,
    display: "flex",
    paddingRight: theme.spacing(4),
    borderRadius: 0,
    textAlign: "center"
  },
  textColor: {
    color: theme.palette.primary.contrastText
  },
  socialButtons: {
    fontSize: "20px",
    lineHeight: "50px",
    display: "block",
    width: "50px",
    height: "50px",
    transition: "all 0.3s",
    color: "#fff",
    borderRadius: "100%",
    outline: 0,
    backgroundColor: "#212529",
    "&:hover": { backgroundColor: "#fed136" },
    marginBottom: 25
  },
  listInline: {
    paddingLeft: 100,
    listStyle: "none",
    marginBottom: 0,
    marginTop: 0
  },
  links: {
    textDecoration: "none",
    color: theme.palette.primary.contrastText,
    "&:hover": {
      textDecoration: "underline"
    }
  },
  listinlineItem: {
    display: "inline-block",
    marginRight: "0.5rem",
    textAlign: "center"
  },
  twitterIcon: {
    class: "fab fa-twitter"
  }
});

class Footer extends Component {
  render() {
    const { classes } = this.props;

    return (
      <footer className={classes.root}>
        {/*         <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.7.0/css/all.css"
          integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ"
          crossOrigin="anonymous"
        /> */}
        <Paper className={classes.paper} elevation={0}>
          <Grid container spacing={8}>
            <Grid item xs={12} sm={4} md={4} lg={4}>
              <Typography variant="caption" className={classes.copyright}>
                Copyright &copy; Mostly Plants 101 2019
              </Typography>
            </Grid>
            <Grid item xs={12} sm={5} md={5} lg={5}>
              <div>
                <ul className={classes.listInline}>
                  <li className={classes.listinlineItem}>
                    <a
                      href="https://twitter.com/Perlai_Jarillo"
                      className={classes.socialButtons}
                    >
                      <FontAwesomeIcon icon={faTwitter} />
                    </a>
                  </li>
                  <li className={classes.listinlineItem}>
                    <a
                      href="https://github.com/perlajarillo"
                      className={classes.socialButtons}
                    >
                      <FontAwesomeIcon icon={faGithub} />
                    </a>
                  </li>
                  <li className={classes.listinlineItem}>
                    <a
                      href="https://www.linkedin.com/in/perla-jarillo/"
                      className={classes.socialButtons}
                    >
                      <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                  </li>
                </ul>
              </div>
            </Grid>
          </Grid>
        </Paper>
        <Paper className={classes.creditsRow} elevation={0}>
          <Grid container spacing={8} className={classes.creditsRow}>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <div>
                <Typography className={classes.credits}>
                  Photos by Anna Pelzer, Dan Gold, Edgar Castrejon, Ella Olsson,
                  Jez Timms, Kai Pilger, Mariana Medvedeva, Milada Vigerova,
                  rawpixel, Jose Aragones, Tom Hermans on{" "}
                  <a href="https://unsplash.com/" className={classes.links}>
                    Unsplash{" "}
                  </a>
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Paper>
      </footer>
    );
  }
}

export default withStyles(styles)(Footer);
