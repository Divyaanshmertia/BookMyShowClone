import React from "react";
import "../stylesheets/style.css"
import Axios from "axios";
class Login extends React.Component {
    state = { credentials: {} };


    onSubmitClick = async(event) => {
        event.preventDefault();
        console.log(this.state.credentials);
        await Axios.post("http://localhost:9160/login", this.state.credentials)
        .then(({ data }) => {
            localStorage.setItem("user", JSON.stringify(data))
            this.props.setUserState(data.user);
        console.info(data)
        }).catch((error) => {
        console.error(error)
        }).finally(() => {
        console.info("Login API called")
    })
}
    render() {
        return (
            <div className={"section"}>
                <form className={"ui form"}>
                    <h4 className={"ui dividing header"}>Login</h4>
                    <div className={"field"}>
                        <div className={"two-fields"}>
                            <label>e-mail</label>
                            <div className={"field"}>
                                <input
                                    type={"email"}
                                    placeholder={"Email *"} onChange={(e) => {
                                        this.setState({ credentials:{ ...this.state.credentials, email: e.target.value }})
                                    }}                     
                                    
                                />
                            </div>
                            <label>Password</label>
                            <div className={"field"}>
                                <input
                                    type={"password"}
                                    placeholder={"Password *"} onChange={(e) => {
                                        this.setState({ credentials: { ...this.state.credentials, passWord: e.target.value }})
                                    }}
                                   
                                />
                            </div>
                            </div>
                    </div>
                    <button className={"ui primary button"} onClick={this.onSubmitClick}>
                        Submit
                    </button>
                </form>
            </div>
        );
    }
}

export default Login;