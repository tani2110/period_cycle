import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./signup.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faEnvelope,
//   faLock,
//   faPhone,
//   faUser,
// } from "@fortawesome/free-solid-svg-icons";

import toast, { Toaster } from "react-hot-toast";

function Signup() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    mail: "",
    password: "",
  });
  const notify_emae = () => {
    const toastId = toast.error(
      (t) => (
        <span>
          Email already exists,{" "}
          <span
            className="toast-span"
            onClick={() => {
              navigate("/login");
              toast.dismiss(toastId);
            }}
          >
            Login Instead
          </span>
        </span>
      ),
      {
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      }
    );
  };
  const notify_faf = () =>
    toast.error(
      (t) => (
        <span>
          {" "}
          Please fill all the required (<span className="asterix1">*</span>)
          fields.
        </span>
      ),
      {
        style: {
          borderRadius: "10px",
          background: "#333",
          color: "#fff",
        },
      }
    );
  const notify_pnm = () =>
    toast.error((t) => <span>The passwords don't match.</span>, {
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  // function onChange(e) {
  //   const { name, value } = e.target;
  //   setData((previous) => ({ ...previous, [name]: value }));
  // }
  async function handleSubmit(e) {
    e.preventDefault();
    // const data= new FormData(e.currentTarget);
    // console.log(data)
    try {
      await axios
        .post("http://127.0.0.1:8080/signup", {
          email,
          pass,
        })
        .then((res) => {
          console.log("post response");
        });
    } catch (e) {
      console.log(e);
    }
    // console.log({
    //   mail: data.get("mail"),
    //   password: data.get("password"),
    // });
    // const { mail, password } = data;
    // if (mail && password) {
    // const fetchData = await fetch(http://localhost:8080/users/signup, {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json",
    //   },

    //   body: JSON.stringify(data),
    // });
    // console.log(data);
    // const dataRes = await fetchData
    //   .json()
    //   .then((response) => response.text())
    //   .then((result) => console.log(result))
    //   .catch((error) => console.log("error", error));
    // const fetchData = await fetch("http://127.0.0.1:8080/signup", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json", // Use "Content-Type" instead of "content-type"
    //   },
    //   body: JSON.stringify(data),
    // });

    // try {
    //   const result = await fetchData.text(); // Parse JSON response
    //   console.log(result);
    //   console.log(fetchData);

    //   if (fetchData.ok) {
    //     navigate("/login");
    //   }
    // } catch (error) {
    //   console.error("Error parsing JSON:", error);
    //   // Handle error or display an appropriate message to the user
    // }
    //    else {
    //     notify_emae();
    //   }
    // } else {
    //   notify_faf();
    // // }
    navigate("/group");

  }

  return (
    <div>
      <div className="container-sgnp">
        <div className="login-box">
          <div className="login-content">
            <h1>Sign Up</h1>
            {/* <div className="wrap">
              <i>
                <FontAwesomeIcon icon={faUser} />
              </i>
              <label htmlFor="name">
                <h2>
                  First Name<span className="asterix">*</span>
                </h2>
              </label>
              <input
                type={"text"}
                name="name"
                id="name"
                value={data.name}
                onChange={onChange}
                placeholder="We'll call you by that!"
              />
            </div> */}
            {/* <div className="wrap">
              <i>
                <FontAwesomeIcon icon={faUser} />
              </i>
              <label htmlFor="hostel">
                <h2> Hostel </h2>
              </label>
              <input
                type={"text"}
                name="hostel"
                id="hostel"
                value={data.hostel}
                onChange={onChange}
                placeholder="Ufff, too many formalities?"
              />
            </div> */}
            <form action="POST">
              <div className="wrap">
                <i>
                  {/* <FontAwesomeIcon icon={faEnvelope} /> */}
                </i>
                <label htmlFor="email">
                  <h2>
                    Email ID<span className="asterix">*</span>
                  </h2>
                </label>
                <input
                  type={"mail"}
                  name="mail"
                  id="mail"
                  value={data.email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  placeholder="Won't spam, Don't Worry!!"
                />
              </div>
              {/* <div className="wrap">
              <i>
                <FontAwesomeIcon icon={faPhone} />
              </i>
              <label htmlFor="phone">
                <h2>
                  Phone<span className="asterix">*</span>
                </h2>
              </label>
              <input
                type={"number"}
                name="phone"
                id="phone"
                value={data.phone}
                onChange={onChange}
                placeholder="Won't Call, Don't Worry!!"
                className="phoneeeee"
              />
            </div> */}
              <div className="wrap">
                <i>
                  {/* <FontAwesomeIcon icon={faLock} /> */}
                </i>
                <label htmlFor="pass">
                  <h2>
                    Password<span className="asterix">*</span>
                  </h2>
                </label>
                <input
                  type={"password"}
                  name="password"
                  id="password"
                  value={data.pass}
                  onChange={(e) => {
                    setPass(e.target.value);
                  }}
                  placeholder="Choose a Strong One!"
                />
              </div>
              <input type="submit" onClick={handleSubmit} />
            </form>
            {/* <div className="wrap">
                <i>
                  <FontAwesomeIcon icon={faLock} />
                </i>
                <label htmlFor="cpass">
                  <h2>
                    Confirm Password<span className="asterix">*</span>
                  </h2>
                </label>
                <input
                  type={"password"}
                  name="cpass"
                  id="cpass"
                  value={data.cpass}
                  onChange={onChange}
                  placeholder="Make it Match the Strong One!"
                />
              </div> */}
            {/* <h3>
              Already a User? Login{" "}
              <Link to="/login" className="linktologin">
                Here
              </Link>
            </h3> */}
            {/* <button onClick={handleSubmit}>SIGN UP</button> */}
          </div>
        </div>
      </div>

      <Toaster />
    </div>
  );
}

export default Signup;
