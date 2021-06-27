import React from "react";
import "../stylesheets/style.css";
import Axios from "axios";
// import user from "../../../model/user";

class SignUp extends React.Component {
	state = { user: {} };

	onSubmitClick = async (event) => {
		event.preventDefault();
		console.log(this.state.user);
		await Axios.post("http://localhost:9160/Signup", this.state.user)
			.then(({ data }) => {
				localStorage.setItem("user", JSON.stringify(data));
				this.props.setUserState(data.user);
				console.info(data);
			})
			.catch((error) => {
				console.error(error);
			})
			.finally(() => {
				console.info("Signup API called");
			});
	};

	render() {
		return (
			<div className={"section"}>
				<form className={"ui form"}>
					<h4 className={"ui dividing header"}>SignUp</h4>
					<div className={"field"}>
						<div className={"two-fields"}>
							<label>First Name</label>
							<div className={"field"}>
								<input
									type={"text"}
									placeholder={"First Name *"}
									onChange={(e) => {
										this.setState({
											user: { ...this.state.user, firstName: e.target.value },
										});
									}}
								/>
							</div>
							<label>Last Name</label>
							<div className={"field"}>
								<input
									type={"text"}
									placeholder={"Last Name *"}
									onChange={(e) => {
										this.setState({
											user: { ...this.state.user, lastName: e.target.value },
										});
									}}
								/>
							</div>
							<label>e-mail</label>
							<div className={"field"}>
								<input
									type={"email"}
									placeholder={"Email *"}
									onChange={(e) => {
										this.setState({
											user: { ...this.state.user, email: e.target.value },
										});
									}}
								/>
							</div>
							<label>Password</label>
							<div className={"field"}>
								<input
									type={"password"}
									placeholder={"Password *"}
									onChange={(e) => {
										this.setState({
											user: { ...this.state.user, passWord: e.target.value },
										});
									}}
								/>
							</div>
							<label>DOB</label>
							<div className={"field"}>
								<input
									type={"Date"}
									placeholder={"DOB *"}
									onChange={(e) => {
										this.setState({
											user: { ...this.state.user, DOB: e.target.value },
										});
									}}
								/>
							</div>
							<label>PhoneNumber</label>
							<div className={"field"}>
								<input
									type={"Number"}
									placeholder={"phoneNumber*"}
									onChange={(e) => {
										this.setState({
											user: { ...this.state.user, phoneNumber: e.target.value },
										});
									}}
								/>
							</div>
						</div>
					</div>
					<button
						className={"ui primary button"}
						style={{ backgroundColor: "red" }}
						onClick={this.onSubmitClick}
					>
						Submit
					</button>
				</form>
			</div>
		);
	}
}

export default SignUp;
