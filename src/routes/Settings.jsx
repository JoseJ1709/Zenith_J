import "../css/settings.scss";
import NavBar from "./NavBar";
import { useState } from "react";

export default function Settings({ name: prop_name, email: prop_email, password: prop_password, selectedFile: prop_selectedFile }) {
  const [name, setName] = useState(prop_name || "NombrePorDefecto");
  const [email, setEmail] = useState(prop_email || "EmailPorDefecto");
  const [password, setPassword] = useState(prop_password || "PasswordPorDefecto");
  const [selectedFile, setSelectedFile] = useState(prop_selectedFile || null);
  const [error, setError] = useState("");
  
  const handleGuardarDatos = (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      setError("Por favor complete todos los campos");
      return;
    }
    console.log(name, email, password);
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  return (
    <div>
      <div className="Settings-container">
        <NavBar />
        <div className="Settings-Frame">
          <img
            src="../src/images/config_icon.png"
            className="config_img"
            alt="Config Icon"
          />
          <div className="chose_img_container">
          <div className="chose_img_wrapper"
          onClick={() => document.getElementById("fileInput").click()}
          >
          {selectedFile ? (
          <img
          src={URL.createObjectURL(selectedFile)}
          className="chose_img"
          alt="Selected Image"
          />
          ) : (
          <img
          src="../src/images/chose_img.png"
          className="chose_img"
          alt="Choose Image"
          />
          )}
          </div>
          </div>
          <form className="form" onSubmit={handleGuardarDatos}>
          <input
              id="fileInput"
              type="file"
              accept="image/*"
              style={{ display: "none" }}
              onChange={handleFileChange}
            />
            <input
              type="text"
              className="NameRectangleC"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              className="EmailRectangleC"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              className="PasswordRectangleC"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <div className="RecoverGoogleBox1">
              <a href="https://www.google.com">
                <img
                  src="src/images/google.png"
                  className="RecoverGoogleImage1"
                  alt="Google"
                />
              </a>
            </div>
            <div className="RecoverFacebookBox1">
              <a href="https://www.google.com">
                <img
                  src="src/images/facebook.png"
                  className="RecoverFacebookImage1"
                  alt="Facebook"
                />
              </a>
            </div>
            <button className="UploadRectangle" type="submit">
              Upload
            </button>
            <button className="ChangeAcountRectangle">Cambiar de cuenta</button>
            <span className="ContinueWhit">Connect with...</span>
          </form>
        </div>
      </div>
    </div>
  );
}
