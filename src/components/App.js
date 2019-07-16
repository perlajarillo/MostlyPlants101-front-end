import React from "react";
import { Route, Switch } from "react-router-dom";
import { MuiThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../theme";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Home from "./Home/Home";
import LogIn from "./Login/Login";
import UserHome from "./UserHome/UserHome";
import MakeBowl from "./Bowl/MakeBowl";

const App = () => (
  <div className="App">
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={LogIn} />
        <Route exact path="/userhome" component={UserHome} />
        <Route exact path="/makebowl" component={MakeBowl} />
      </Switch>
      <Footer />
    </MuiThemeProvider>
  </div>
);

export default App;
