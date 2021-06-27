import React from "react";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import HallForm from "./components/HallForm";
import SignUp from "./components/Signup";
import Login from "./components/Login";
import BannerExample from "./components/MoviePage/Slider";
import ShowCards from "./components/notdecided";
class App extends React.Component{
  state = {
    user: {},
  };
  componentDidMount() {
    let savedUSer = localStorage.getItem("user")
    if (savedUSer && Object.keys(this.state.user).length === 0) {
      console.log("Login Identified")
      this.setUserState(JSON.parse(savedUSer).user)
    }
  }


  setUserState = (user) => {
  this.setState({user: user})
}


  render(){
    return (
    <Router>
        <div>
          
        <Switch>
          <Route path = {"/"} exact>
         <BannerExample/>
            </Route>
            <Route path = {"/Homepage"}> 
              <ShowCards firstName={"Divyaansh"} lastName={"Mertia" }/>
            </Route>
          <Route path = {"/login"}>
              <Login setUserState={ this.setUserState}/>
          </Route>
          <Route path={"/selectSeat"}>
          <HallForm />
          </Route>
          <Route path = {"/signup"}>
              <SignUp setUserState={this.setUserState}/>
          </Route>
          <Route path = {"/about-us"}>
          <h1> about us</h1>
          </Route>
          <Route path = {"/contact-us"}>
          <h1>This is contact-us </h1>
          </Route>
          <Route path={"/**"}>
            <Redirect to ={"/"} />
            </Route>
          </Switch>
          <h3> this is footer</h3>
        </div>
    </Router>
   
  )
  }
}
export default App