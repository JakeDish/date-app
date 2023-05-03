import { useState } from "react";
import { useMutation } from "@apollo/client";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Container from "../../components/Container";
import Header from "../../components/Header";

import { REGISTER_USER } from "../../utils/mutations";
import Auth from "../../utils/auth.js";

function Register() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    password: "",
    bio: "",
    photo: "",
  });

  const [register, { error, data }] = useMutation(REGISTER_USER);

  const handleInputChange = ({ target: { name, value } }) => {
    setFormState({ ...formState, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await register({
        variables: { ...formState },
      });
      console.log(data);
      Auth.login(data.register.token);
    } catch (err) {
      console.error(err);
    }
  };
  return (
    <div>
      <Header />
      <Container>
        <Grid container spacing={2}>
          <Grid xs={4}></Grid>
          <Grid xs={4}>
            <Typography variant="h3">Register</Typography>
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
                  label="Name"
                  variant="outlined"
                  type="text"
                  name="name"
                  value={formState.name}
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
                  label="Photo"
                  name="photo"
                  value={formState.photo}
                  onChange={handleInputChange}
                  variant="outlined"
                  
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
                  id="outlined-multiline-static"
                  label="Bio"
                  name="bio"
                  value={formState.bio}
                  onChange={handleInputChange}
                  rows={4}
                  multiline
                  // maxRows={4}
                />
              </Box>
              <Button variant="contained" type="submit">
                Register
              </Button>

              <FormGroup>
                <FormControlLabel control={<Checkbox />} label="Traveling" />
                <FormControlLabel control={<Checkbox />} label="Cooking" />
                <FormControlLabel control={<Checkbox />} label="Fitness" />
                <FormControlLabel control={<Checkbox />} label="Music" />
                <FormControlLabel control={<Checkbox />} label="Art" />
                <FormControlLabel control={<Checkbox />} label="Sports" />
                <FormControlLabel control={<Checkbox />} label="Reading" />
                <FormControlLabel control={<Checkbox />} label="Movies" />
                <FormControlLabel control={<Checkbox />} label="Photography" />
                <FormControlLabel control={<Checkbox />} label="Fashion" />
                <FormControlLabel control={<Checkbox />} label="Gaming" />
                <FormControlLabel control={<Checkbox />} label="Technology" />
              </FormGroup>
            </form>
          </Grid>
          <Grid xs={4}></Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Register;
