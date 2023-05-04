import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Unstable_Grid2";
import EmailIcon from "@mui/icons-material/Email";
import InterestsIcon from "@mui/icons-material/Interests";
import Avatar from "@mui/material/Avatar";
import { useQuery } from "@apollo/client";
import { useParams } from "react-router-dom";
import Typography from "@mui/material/Typography";
import Header from "../../components/Header";
import Container from "../../components/Container";
import { QUERY_USER } from "../../utils/queries";

const styles = {
  iconStyle: {
    float: "left",
    marginRight: "10px",
  },
};

function Profile() {
  const { userId } = useParams();

  const { data } = useQuery(QUERY_USER, {
    variables: { userId: userId },
  });

  const user = data?.user || {};

  return (
    <div>
      <Header />
      <Container>
        <Grid container spacing={2}>
          <Grid xs={2}></Grid>
          <Grid xs={8}>
            {user ? (
              <Typography variant="h3"> Meet {user.name}</Typography>
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
                <Typography variant="h5">
                  <Avatar
                    alt="Remy Sharp"
                    src={user.photo}
                    style={styles.iconStyle}
                  />
                  About {user.name}:
                </Typography>

                <Typography variant="body2">{user.bio}</Typography>
                <br />
                <Typography variant="h5">
                  <EmailIcon
                    sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
                    style={styles.iconStyle}
                  />
                  Contact
                </Typography>

                <Typography variant="body2">{user.email}</Typography>
                <br />
                <Typography variant="h5">
                  <InterestsIcon
                    sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
                    style={styles.iconStyle}
                  />
                  Interests
                </Typography>
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

export default Profile;
