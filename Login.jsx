import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../services/firebase";

export default function Login(){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const submit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate("/");
    } catch(err){
      alert("Login failed: " + err.message);
    }
  };

  return (
    <div style={{maxWidth:600, margin:"0 auto"}}>
      <h3>Login</h3>
      <form onSubmit={submit}>
        <div className="mb-2">
          <label>Email</label>
          <input className="form-control" value={email} onChange={e=>setEmail(e.target.value)} />
        </div>
        <div className="mb-2">
          <label>Password</label>
          <input className="form-control" value={password} onChange={e=>setPassword(e.target.value)} type="password" />
        </div>
        <button className="btn btn-primary">Login</button>
      </form>
    </div>
  );
}
