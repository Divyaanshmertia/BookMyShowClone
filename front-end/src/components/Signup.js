import React, { useState } from "react";
import Axios from "axios";
import { useHistory } from "react-router-dom";

const SignUp = (props) => {
  const history = useHistory();
  const { setUserState } = props;
  const [user, setUser] = useState({});

  const onSubmitClick = async (event) => {
    event.preventDefault();
    console.log(user);
    await Axios.post("http://localhost:9160/signup", user)
      .then(({ data }) => {
        localStorage.setItem("user", JSON.stringify(data));
        console.info(data);
        setUserState(data.user);
        history.push("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className={"section"}>
      <form className={"ui form"}>
        <h4 className={"ui dividing header"}>SignUp</h4>
        <div className={"field"}>
          <label>First Name</label>
          <div className={"two-fields"}>
            <div className={"field"}>
              <input
                type={"text"}
                placeholder={"First Name *"}
                onChange={(e) => {
                  setUser({
                    ...user,
                    firstName: e.target.value,
                  });
                }}
              />
            </div>
            <div className={"field"}>
              <input
                type={"text"}
                placeholder={"Last Name *"}
                onChange={(e) => {
                  setUser({
                    ...user,
                    lastName: e.target.value,
                  });
                }}
              />
            </div>
            <div className={"field"}>
              <input
                type={"email"}
                placeholder={"Email *"}
                onChange={(e) => {
                  setUser({
                    ...user,
                    email: e.target.value,
                  });
                }}
              />
            </div>
            <div className={"field"}>
              <input
                type={"password"}
                placeholder={"Password *"}
                onChange={(e) => {
                  setUser({
                    ...user,
                    password: e.target.value,
                  });
                }}
              />
            </div>
            <div className={"field"}>
              <input
                type={"Date"}
                placeholder={"Date *"}
                onChange={(e) => {
                  setUser({
                    ...user,
                    DOB: e.target.value,
                  });
                }}
              />
            </div>
            <div className={"field"}>
              <input
                type={"Number"}
                placeholder={"PhoneNumber *"}
                onChange={(e) => {
                  setUser({
                    ...user,
                    phoneNumber: e.target.value,
                  });
                }}
              />
            </div>
          </div>
        </div>
        <button className={"ui primary button"} onClick={onSubmitClick}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default SignUp;
