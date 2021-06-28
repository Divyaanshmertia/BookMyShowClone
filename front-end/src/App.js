import React from "react";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import HallForm from "./components/HallForm";
import SignUp from "./components/Signup";
import Login from "./components/Login";

import ShowCards from "./components/notdecided";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/home";
import Error from "./components/error";
import ShowCards1 from "./components/MovieCards";
import Home1 from "./components/home1";
import CustomPage from "./components/CustomPage";

class App extends React.Component {
  state = {
    user: {},
  };
  componentDidMount() {
    let savedUSer = localStorage.getItem("user");
    if (savedUSer && Object.keys(this.state.user).length === 0) {
      console.log("Login Identified");
      this.setUserState(JSON.parse(savedUSer).user);
    }
  }

  setUserState = (user) => {
    this.setState({ user: user });
  };

  render() {
    return (
      <Router>
        <div>
          <Header />
          <Switch>
            <Route path={"/"} exact>
              <Home />
              <ShowCards />
            </Route>
            <Route path={"/login"}>
              <Login setUserState={this.setUserState} />
            </Route>
            <Route path={"/signup"}>
              <SignUp setUserState={this.setUserState} />
            </Route>
            <Route path={"/about-us"}>
              <h1>This is contact-us </h1>
            </Route>
            <Route path={"/movies"}>
              <Home1 />
              <ShowCards1 />
            </Route>
            <Route path={"/movie/:id"}>
              <CustomPage />
            </Route>
            <Route path={"/movieseat/:id"}>
              <HallForm />
            </Route>
            <Route path={"/contact-us"}></Route>
            <Route path={"/error"}>
              <Error />
            </Route>
            <Route path={"/**"}>
              <Redirect to={"/error"} />
            </Route>
            <Route path={"/location"}>
              <pan>ON CONSTRUCTION</pan>
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}
export default App;
