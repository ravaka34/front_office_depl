import "./Login.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "../assets/Navbar-Centered.css";
import "../assets/Navbar-vmnt.css";
import "../assets/styles.css";
import { useState } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { postData } from "../../utils/fetch";
import CardError from "../../components/CardError";

export default function Login() {

  const [response, setResponse] = useState();
  const email = useRef();
  const pwd = useRef()
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: email.current.value,
      password: pwd.current.value,
    };
    console.log(data);
    const state = await postData("http://localhost:9000/login", data);
    if (state.data) {
      console.log(state.data);
      localStorage.setItem("profil", JSON.stringify(state.data));
      navigate("/home");
    } else {
      setResponse(state.error.message);
    }
  };


  return (
    <div>
      <div
        className="row d-xl-flex justify-content-xl-center align-items-xl-center"
        style={{ height: "calc(100vh - 75px)" }}
      >
        <div
          className="col-xl-5 d-xl-flex justify-content-xl-center align-items-xl-center"
          style={{ height: 450, borderRadius: 15, padding: 25 }}
        >
          <div style={{ width: "75%" }}>
            <div className="d-xl-flex justify-content-xl-center">
              <h2>Login</h2>
            </div>
            <form onSubmit={handleSubmit}>
              <div style={{ width: "100%" }}>
                <input
                  className="form-control input-group"
                  type="email"
                  placeholder="Votre e-mail"
                  ref={email}
                  required
                />
                <input
                  className="form-control input-group"
                  type="password"
                  placeholder="Votre mot de passe"
                  ref={pwd}
                  required
                />
              </div>
              <CardError error={response} />
              <div
                className="d-xl-flex justify-content-xl-center input-group"
                style={{ width: "100%" }}
              >
              
              <input type="submit" value="Se connecter" className="btn btn-primary" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
