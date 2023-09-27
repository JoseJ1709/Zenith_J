import { useNavigate } from "react-router-dom";
import Bubble from "./Bubble";
import "../css/login.scss"; 
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [showError, setShowError] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) =>{
    e.preventDefault();
    if(email === "" && password === ""){
      setError("Llene las casillas")
      setShowError(true);
      return;
    }
    else{
      setError("")
      setShowError(false);
    }
    {console.log(email,password)}
  }
  return (
    <Bubble>
      <div className="LoginFrame" >
        <form className="form1"  onSubmit={handleLogin} >
          <input
            type="text"
            className="EmailRectangle"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="PasswordRectangle"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
           <p className="RecoverPasswordText">
            <a href="https://www.example.com/recover" className="RecoverLink">
              Recover Password
            </a>
          </p>
          <div className="RecoverGoogleBox">
          <a href="https://www.google.com"> 
            <img
              src="src/images/google.png"
              className="RecoverGoogleImage"
            />
            </a>
          </div>
          <div className="RecoverFacebookBox">
          <a href="https://www.google.com"> 
            <img
              src="src/images/facebook.png"
              className="RecoverFacebookImage"
            />
            </a>
          </div>
          <div className="ContinueLine">
          <span className="ContinueText">Or continue</span>
          </div>
          <button type="submit" className="LoginRectangle">Login</button>
        </form>
        {showError && (
          <div className="ErrorMessage" onClick={() => setShowError(false)}>
            {error} </div> )}
      </div>
    </Bubble>
  );
}


