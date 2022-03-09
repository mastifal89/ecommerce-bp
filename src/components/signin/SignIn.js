import React from "react";
import { Box, TextField, Grid } from "@mui/material";

export const SignIn = () => {
  return (
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
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "600",
            minWidth: "300",
          }}
        >
          <div
            component="form"
            // sx={{
            //   "& .MuiTextField-root": { m: 1, width: "25ch" },
            // }}
            noValidate
            autoComplete="off"
          >
            <TextField
              Name
              id="standard-required"
              label="Name"
              defaultValue="Name"
              variant="standard"
            />
            <TextField
              Last name
              id="standard-required"
              label="Last Name"
              defaultValue="Last Name"
              variant="standard"
            />
            <TextField
              id="standard-password-input"
              label="Password"
              type="password"
              autoComplete="current-password"
              variant="standard"
            />
            <TextField
              id="standard-read-only-input"
              label="Read Only"
              defaultValue="Hello World"
              InputProps={{
                readOnly: true,
              }}
              variant="standard"
            />
            <TextField
              id="standard-number"
              label="Number"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
              variant="standard"
            />
            <TextField
              id="standard-search"
              label="Search field"
              type="search"
              variant="standard"
            />
            <TextField
              id="standard-helperText"
              label="Helper text"
              defaultValue="Default Value"
              helperText="Some important text"
              variant="standard"
            />
          </div>
        </div>
      </Grid>
    </Grid>
  );
};
