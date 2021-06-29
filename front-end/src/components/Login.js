import React, { useState } from "react";
import Axios from "axios";
import { useHistory } from "react-router-dom";

//for toaster message
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = (props) => {
  const { setUserState } = props;
  const history = useHistory();
  const [credentials, setCredentials] = useState({});

  const onSubmitClick = async (event) => {
    event.preventDefault();
    await Axios.post("http://localhost:9160/login", credentials)
      .then(({ data }) => {
        // console.info(data);
        localStorage.setItem("user", JSON.stringify(data));
        setUserState(data.user);
        history.push("/");
      })
      .catch((error) => {
        console.error(error);
        toast("Incorrect details!", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          toastId: "userId",
        });
      })
      .finally(() => {
        console.info("Login API call finished.");
      });
  };

  return (
    <div className={"section"}>
      <form className={"ui form"}>
        <h4 className={"ui dividing header"}>Login</h4>
        <div className={"field"}>
          <label>Email</label>
          <div className={"two-fields"}>
            <div className={"field"}>
              <input
                type={"email"}
                placeholder={"Email *"}
                onChange={(e) => {
                  setCredentials({
                    ...credentials,
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
                  setCredentials({
                    ...credentials,
                    password: e.target.value,
                  });
                }}
              />
            </div>
          </div>
        </div>
        <button className={"ui primary button"} onClick={onSubmitClick}>
          Submit
        </button>
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={true}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <a href="/signup" style={{ margin: "10px", fontWeight: "bold" }}>
          Doesn't have a account? Click here...
        </a>
      </form>
    </div>
  );
};

export default Login;
