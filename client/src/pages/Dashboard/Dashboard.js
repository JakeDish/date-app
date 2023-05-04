import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import Typography from "@mui/material/Typography";
import Header from "../../components/Header";
import Container from "../../components/Container";
import { useQuery } from "@apollo/client";
import { QUERY_ME } from "../../utils/queries";

function Dashboard() {
  const { data } = useQuery(QUERY_ME);
  const user = data?.me || {};

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
                <Typography variant="h5">About {user.name}:</Typography>

                <Typography variant="body2">{user.bio}</Typography>
                <br />
                <Typography variant="h5">Contact</Typography>
                <Typography variant="body2">{user.email}</Typography>
                <br />
                <Typography variant="h5">Interests</Typography>
                <Typography variant="body2">{user.interests}</Typography>
              </Box>
            </Box>
          </Grid>
          <Grid xs={2}></Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Dashboard;
