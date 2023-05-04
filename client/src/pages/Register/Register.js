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
    interests: [],
  });

  const [register, { error, data }] = useMutation(REGISTER_USER);

  const handleInputChange = ({ target: { name, value } }) => {
    setFormState({ ...formState, [name]: value });
  };

  const handleChecked = (e) => {
    const { value, checked } = e.target;
    const { interests } = formState;

    if (checked) {
      setFormState((prev) => ({ ...prev, interests: [...interests, value] }));
    } else {
      setFormState((prev) => ({
        ...prev,
        interests: interests.filter((e) => e !== value),
      }));
    }
  };

  console.log(formState);

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
            <FormGroup>
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
                  />
                </Box>
                {/* <Box
                  component="form"
                  sx={{
                    "& > :not(style)": { m: 1, width: "50ch" },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    id="outlined-multiline-static"
                    label="Interests"
                    name="interests"
                    value={formState.interests}
                    onChange={handleInputChange}
                    rows={4}
                    multiline
                  />
                </Box> */}

                <FormControlLabel
                  control={<Checkbox />}
                  label="Traveling"
                  value="traveling"
                  onChange={handleChecked}
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Cooking"
                  value="cooking"
                  onChange={handleChecked}
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Fitness"
                  value="fitness"
                  onChange={handleChecked}
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Music"
                  value="music"
                  onChange={handleChecked}
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Art"
                  value="art"
                  onChange={handleChecked}
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Sports"
                  value="sports"
                  onChange={handleChecked}
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Reading"
                  value="reading"
                  onChange={handleChecked}
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Movies"
                  value="movies"
                  onChange={handleChecked}
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Photography"
                  value="photography"
                  onChange={handleChecked}
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Fashion"
                  value="fashion"
                  onChange={handleChecked}
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Gaming"
                  value="gaming"
                  onChange={handleChecked}
                />
                <FormControlLabel
                  control={<Checkbox />}
                  label="Technology"
                  value="technology"
                  onChange={handleChecked}
                />

                <Button variant="contained" type="submit">
                  Register
                </Button>
              </form>
            </FormGroup>
          </Grid>
          <Grid xs={4}></Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Register;
