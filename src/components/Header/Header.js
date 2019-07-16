import React, { Component, Fragment } from "react";
import { withStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { wrap } from "module";

const styles = theme => ({
  root: {
    flexGrow: 1,
    maxHeight: "100px"
  },

  menuButton: {
    marginRight: theme.spacing(2)
  },

  navbar: {
    background: "transparent",
    boxShadow: "none",
    paddingTop: 15
  },
  navbarScrolled: {
    background: "theme.primary.dark",
    boxShadow: "none"
  },
  navbarBrand: {
    color: "#fed136",
    fontSize: "1.75em",
    webkitTransition: "all 0.3s",
    transition: "all 0.3s",
    fontFamily: "Kaushan Script"
  },
  navbarBrandScroll: {
    color: "#fed136",
    fontSize: "1.12em",
    webkitTransition: "all 0.3s",
    transition: "all 0.3s",
    fontFamily: "Kaushan Script"
  },
  items: {
    fontSize: "90%",
    fontWeight: 400,
    padding: "0.75em 0",
    letterSpacing: "1px",
    color: "#fff"
  },
  container: {
    width: "100%",
    paddingRight: "150px",
    paddingLeft: "150px",
    marginRight: "auto",
    marginLeft: "auto",
    display: "flex",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "space-between",
    minWidth: "992px !important"
  }
});

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      transition: false,
      lastScroll: 0
    };
  }
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = event => {
    const lastScroll = window.scrollY;

    if (this.state !== undefined) {
      if (lastScroll === this.state.lastScroll) {
        return;
      }
      this.setState({
        lastScroll: lastScroll
      });
    }
  };

  render() {
    const { classes } = this.props;
    const { lastScroll } = this.state;
    return (
      <div className={classes.root}>
        <AppBar
          position="fixed"
          className={lastScroll > 100 ? classes.navbarScrolled : classes.navbar}
        >
          <link
            href="https://fonts.googleapis.com/css?family=Kaushan+Script&display=swap"
            rel="stylesheet"
          />

          <Toolbar>
            {/*             <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
            >
              <MenuIcon />
            </IconButton> */}
            <div className={classes.container}>
              <Typography
                variant="h6"
                className={
                  lastScroll > 100
                    ? classes.navbarBrandScroll
                    : classes.navbarBrand
                }
              >
                Mostly Plants 101
              </Typography>

              <Button
                color="inherit"
                className={classes.items}
                component={Link}
                to="/login"
              >
                Log in
              </Button>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(Header);
