import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Unstable_Grid2";
import Header from "../../components/Header";
import Container from "../../components/Container";
import Auth from "../../utils/auth.js";

import { useState } from "react";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../../utils/mutations";

function Login() {
  const [formState, setFormState] = useState({
    email: "",
    password: "",
  });

  const [Login, { error, data }] = useMutation(LOGIN_USER);

  const handleInputChange = ({ target: { name, value } }) => {
    setFormState({ ...formState, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await Login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (err) {}
  };

  return (
    <div>
      <Header />

      <Container>
        <Grid container spacing={2}>
          <Grid xs={4}></Grid>
          <Grid xs={4}>
            <Typography variant="h3">Login</Typography>
            <form onSubmit={handleFormSubmit}>
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { m: 1, width: "50ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  type="email"
                  name="email"
                  value={formState.email}
                  onChange={handleInputChange}
                />
              </Box>
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { m: 1, width: "50ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="outlined-basic"
                  label="Password"
                  variant="outlined"
                  type="password"
                  name="password"
                  value={formState.password}
                  onChange={handleInputChange}
                />
              </Box>
              <Button variant="contained" type="submit">
                Login
              </Button>
            </form>
          </Grid>
          <Grid xs={4}></Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Login;
