import React from "react";
import "./Login.css";
import { auth, provider } from "../firebase";
import { actionTypes } from "./reducer";
import { useStateValue } from "../Stateprovider";

function Login() {
  const [state, dispatch] = useStateValue();
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
        console.log(result.user);
      })
      .catch((err) => alert(err.message));
  };
  return (
    <>
      <div>
        <div className="fb-header-base"></div>
        <div className="fb-header">
          <div id="img1" className="fb-header">
            <img
              alt="facebook"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Facebook.svg/1280px-Facebook.svg.png"
            />
          </div>
          <div id="form1" className="fb-header">
            Email or Phone
            <br />
            <input placeholder="Email" type="mail" name="name" />
            <br />
            <input type="checkbox" />
            keep me logged in
          </div>
          <div id="form2" className="fb-header">
            Password
            <br />
            <input placeholder="Password" type="password" name="password" />
            <br />
            Forgotten your password?
          </div>
        </div>
      </div>
      <input type="submit" className="submit1" value="login" onClick={signIn} />
      <div className="fb-body">
        <div id="intro2" className="fb-body">
          Create an account
        </div>
        <div id="img2" className="fb-body">
          <img
            alt="world"
            src="https://sociable.co/wp-content/uploads/2011/12/Facebook-world.jpg"
          />
        </div>
        <div id="intro3" className="fb-body">
          It's free and always will be.
        </div>
        <div id="form3" className="fb-body">
          <input
            placeholder="First Name"
            type="text"
            id="namebox1"
            name="name1"
          />
          <input placeholder="Last Name" type="text" id="namebox2" /> <br />
          <input placeholder="Emai" type="text" id="mailbox" />
          <br />
          <input placeholder="Re-enter email" type="text" id="mailbox1" />
          <br />
          <input placeholder="Password" type="password" id="mailbox2" />
          <br />
          <input type="date" id="namebox3" />
          <br />
          <br />
          <input type="radio" id="r-b" name="sex" value="male" />
          Male
          <input type="radio" id="r-b" name="sex" value="female" />
          Female
          <br />
          <br />
          <p id="intro4">
            By clicking Create an account, you agree to our Terms and that you
            have read our Data Policy, including our Cookie Use.
          </p>
          <input type="submit" className="button2" value="Create an account" />
          <br />
          <hr />
          <p id="intro5">Create a Page for a celebr/ity, band or business.</p>
        </div>
      </div>
      <div className="fb-body-footer">
        <div id="fb-body-footer-base" className="fb-body-footer">
          English (UK)
          <br />
          <hr />
          Sign Up Log In &copy; &nbsp;&nbsp; Design by Varun Singh
        </div>
      </div>
    </>
  );
}

export default Login;
