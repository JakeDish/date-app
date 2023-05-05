import React, { useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import Header from "../../components/Header";
import Container from "../../components/Container";
import Footer from "../../components/Footer";
import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../../utils/queries";

function Dashboard() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    password: "",
    bio: "",
    photo: "",
    interests: "",
  });

  const { data } = useQuery(QUERY_ME);
  const user = data?.me || {};

  const handleInput = (e) => {
    let nameOfField = e.target.id;
    setFormState({ ...formState, [nameOfField]: e.target.innerText });
  };

  console.log(formState);

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
