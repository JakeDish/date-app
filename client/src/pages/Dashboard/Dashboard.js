import { useState } from "react";
import { useMutation } from "@apollo/client";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Header from "../../components/Header";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../../utils/queries";
import { UPDATE_USER } from "../../utils/mutations";
import Auth from "../../utils/auth.js";

function Dashboard() {
  const { data } = useQuery(QUERY_ME);
  const user = data?.me || {};

  const [formState, setFormState] = useState({
    name: `${data.me.name}`,
    email: `${data.me.email}`,
    // password: `${data.me.password}`,
    bio: `${data.me.bio}`,
    photo: `${data.me.photo}`,
    interests: `${data.me.interests}`,
  });

  const [edit] = useMutation(UPDATE_USER);

  const handleInput = (e) => {
    let nameOfField = e.target.id;
    // setFormState({ ...formState, [nameOfField]: e.target.innerText });
    setFormState((prev) => ({ ...prev, [nameOfField]: e.target.innerText }));
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await edit({
        variables: { ...formState },
      });
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
          <Grid xs={2}></Grid>
          <Grid xs={8}>
            {user ? (
              <Typography variant="h3"> {user.name}'s Dashboard</Typography>
            ) : (
              <Typography variant="h3"> No User Defined</Typography>
            )}
            <Box
              sx={{
                display: "flex",
                width: "auto",
                height: "auto",
                border: "1px solid gray",
                borderRadius: "8px",
                padding: "40px;",
                marginTop: "20px",
              }}
            >
              <Box
                sx={{
                  width: "auto",
                  height: "auto",
                  paddingRight: "20px",
                }}
              >
                {user && <img src={user.photo} alt="avatar" />}
              </Box>
              <Box
                sx={{
                  width: "auto",
                  height: "auto",
                }}
              >
                <form onSubmit={handleFormSubmit}>
                  Name:
                  <Typography
                    variant="h5"
                    contenteditable="true"
                    onInput={handleInput}
                    id="name"
                  >
                    {user.name}
                  </Typography>
                  <br />
                  Bio:
                  <Typography
                    variant="body2"
                    contenteditable="true"
                    onInput={handleInput}
                    id="bio"
                  >
                    {user.bio}
                  </Typography>
                  <br />
                  Email:
                  <Typography
                    variant="body2"
                    contenteditable="true"
                    onInput={handleInput}
                    id="email"
                  >
                    {user.email}
                  </Typography>
                  <br />
                  Interests:
                  <Typography
                    variant="body2"
                    contenteditable="true"
                    onInput={handleInput}
                    id="interests"
                  >
                    {user.interests}
                  </Typography>
                  <Button
                    variant="contained"
                    type="submit"
                    sx={{ marginTop: "20px" }}
                  >
                    Submit Edit
                  </Button>
                </form>
              </Box>
            </Box>
          </Grid>
          <Grid xs={2}></Grid>
        </Grid>
      </Container>
      <Footer />
    </div>
  );
}

export default Dashboard;
