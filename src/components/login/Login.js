import React, { useState } from "react";
import { Button, Grid, TextField } from "@mui/material";


export const Login = () => {

  const [user, setUser] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
  }

  const handleOnChange = (e) => {
    setUser(
      user => ({
        ...user, [e.target.name]: e.target.value
      })
    )
    
  }

  return (
    <form onSubmit={handleSubmit}>
      <Grid container style={{ minHeight: "100vh" }}>
        <Grid
          container
          item
          xs={12}
          sm={6}
          alignItems="center"
          direction="column"
          justifyContent="space-between"
          style={{ padding: 10 }}
        >
          <div />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              maxWidth: "400",
              minWidth: "300",
            }}
          >
            <Grid container justifyContent="center">
              <img
                src="https://logos-marcas.com/wp-content/uploads/2020/08/BP-Logotipo-1920-1930.jpg"
                width={200}
                alt="logo"
              />
            </Grid>
            <TextField 
              onChange={handleOnChange} 
              name="username"
              label="Username" 
              margin="normal" 
              variant="standard" 
              required 
            />
            <TextField 
              onChange={handleOnChange} 
              name="password"
              label="Password" 
              margin="normal" 
              variant="standard" 
              type="password"
              autoComplete="current-password" 
              required 
            />
            <div style={{ height: 20 }} />
            <Button 
              color="primary" 
              variant="contained"
              type="submit"
            >
              Log in
            </Button>
            <div style={{ height: 20 }} />
            <Button>Join now</Button>
          </div>
          <Grid container justifyContent="center" spacing={2}>
            <Grid item>
              <Button>Go to community page</Button>
              </Grid>
              <Grid item>
              <Button>Forgot password?</Button>
              </Grid>
            </Grid>
        </Grid>
        <Grid item xs={12} sm={6}>
          <img
            src="https://res.cloudinary.com/dvptt7hw3/image/upload/v1638836091/bad-daddy_cdxgiz.jpg"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            alt="brand"
          />
        </Grid>
      </Grid>
    </form>
  );
};
