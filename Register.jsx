import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebase";
import { useNavigate } from "react-router-dom";

export default function Register(){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch(err){
      alert("Registration failed: " + err.message);
    }
  };

  return (
    <div style={{maxWidth:600, margin:"0 auto"}}>
      <h3>Register</h3>
      <form onSubmit={submit}>
        <div className="mb-2">
          <label>Email</label>
          <input className="form-control" value={email} onChange={e=>setEmail(e.target.value)} />
        </div>
        <div className="mb-2">
          <label>Password</label>
          <input className="form-control" value={password} onChange={e=>setPassword(e.target.value)} type="password" />
        </div>
        <button className="btn btn-success">Register</button>
      </form>
    </div>
  );
}
