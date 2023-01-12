import React, { useState } from "react";
import { auth } from "../firebase-config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { Input, Typography, Button, Grid } from "@mui/material";

const Auth = () => {
  const [user, setUser] = useState({});
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword] = useState("");

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  const register = async () => {
    try {
      await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
    } catch (error) {
      console.log(error.message);
    }
  };

  const login = async () => {
    try {
      await signInWithEmailAndPassword(auth, loginEmail, loginPassword);
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <>
      <Grid container>
        <Grid
          item
          sx={{
            display: "flex",
            justifyContent: "center",
            aligntItems: "center",
            flexDirection: "column",
          }}
        >
          <Typography variant="h3">Register</Typography> 
          <Input
            type="email"
            required
            onChange={(e) => setRegisterEmail(e.target.value)}
          />
          <Input
            type="password"
            required
            onChange={(e) => setRegisterPassword(e.target.value)}
          />
          <Button onClick={register}>Register</Button>
        </Grid>
        <Grid
          item
          sx={{
            display: "flex",
            justifyContent: "center",
            aligntItems: "center",
            flexDirection: "column",
          }}
        >
          <Typography variant="h3">Login</Typography>
          <Input
            type="email"
            required
            onChange={(e) => setLoginEmail(e.target.value)}
          />
          <Input
            type="password"
            required
            onChange={(e) => setLoginEmail(e.target.value)}
          />
          <Button onClick={login}>Login</Button>
        </Grid>
        <Grid item>
          <Typography variant="h4">User Logged in:</Typography>
          {user?.email}
          <Button onClick={logout}>Logout</Button>
        </Grid>
      </Grid>
    </>
  );
};

export default Auth;
