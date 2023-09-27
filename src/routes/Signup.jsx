import { useNavigate } from "react-router-dom";
import Bubble from "./Bubble";
import "../css/signup.scss";
import { useState } from "react";

export default function Signup() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [showError, setShowError] = useState(false);
  const navigate = useNavigate();
  
  const handleSignup = (e) =>{
    e.preventDefault();
    if(email === "" && password === "" && name == ""){
      setError("Llene las casillas")
      setShowError(true);
      return;
    }
    else{
      setShowError(false);
      setError("")
    }
    {console.log(name,email,password)}
  }
  
  return (
    <Bubble>
      <div className="SignupFrame">
        <form className="form2" onSubmit={handleSignup} >
          <input
            type="text"
            className="NameRectangleS"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            className="EmailRectangleS"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="PasswordRectangleS"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
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
          <div className="ContinueLine2">
          <span className="ContinueText2">Or continue</span>
          </div>
          <button type="submit" className="RegisterRectangle">Register</button>
        </form>
        {showError && (
          <div className="ErrorMessage" onClick={() => setShowError(false)}>
            {error} </div> )}
      </div>
    </Bubble>
  );
}
