import React from "react";
import { withStyles } from "@material-ui/core/styles";
import headerBG from "../../images/header-bg.jpg";

import GoogleLogin from "react-google-login";
import { Typography } from "@material-ui/core";

const responseGoogle = response => {
  console.log(response);
};

const styles = theme => ({
  wrapper: {
    margin: "50px 0",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    [theme.breakpoints.up("sm")]: {
      margin: "50px 0"
    },
    [theme.breakpoints.up("xs")]: { minHeight: "50vh" }
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
  googleBtn: {
    marginTop: "20px"
  }
});
class LogIn extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div>
        <header className={classes.masthead} />

        <div className={classes.wrapper}>
          <Typography variant="h6" gutterBottom>
            {" "}
            Mostly Plants 101 uses Google Sign In to simplify this process.
          </Typography>
          <div>
            <Typography variant="body1" gutterBottom>
              {" "}
              If you don't have an account one will be created when you click in
              the button bellow.
            </Typography>
          </div>
          <GoogleLogin
            clientId="643961066774-mhkk2bbinf7vcqu21nsuj76f3j9luu88.apps.googleusercontent.com"
            buttonText="Login with Google credentials"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={"single_host_origin"}
            className={classes.googleBtn}
          />
        </div>
      </div>
    );
  }
}
export default withStyles(styles)(LogIn);
