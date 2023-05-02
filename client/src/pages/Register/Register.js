import { useState } from "react";
import { useMutation } from "@apollo/client";
import { REGISTER_USER } from "../../utils/mutations";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Header from "../../components/Header";

import Auth from "../../utils/auth.js";

function Register() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    password: "",
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
      <h1>Register Page</h1>
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
            variant="outlined"
            // type="password"
            // name="password"
            // value={formState.password}
            // onChange={handleInputChange}
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
          rows={4}
            multiline
            maxRows={4}
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

        {/* <input
          type="text"
          name="name"
          value={formState.name}
          onChange={handleInputChange}
        />
        <input
          type="email"
          name="email"
          value={formState.email}
          onChange={handleInputChange}
        />
        <input
          type="password"
          name="password"
          value={formState.password}
          onChange={handleInputChange}
        />
        <button type="submit">Register User</button> */}
      </form>
    </div>
  );
}

export default Register;
