import * as React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";

export default function ProfileCard(props) {
  console.log(props);
  return (
    <Grid container spacing={2}>
      <Grid xs={3}></Grid>
      <Grid xs={6}>
        <div
          style={{
            border: "1px solid gray",
            borderRadius: "8px",
            margin: "20px 0",
            display: "flex",
          }}
        >
          <div
            style={{
              padding: "40px",
              width: "400px",
            }}
          >
            {props.loggedIn ? (
              <img
                src={props.image}
                alt="profileImage"
                style={{
                  border: "1px solid black",
                  borderRadius: "8px",
                  width: "300px",
                }}
              />
            ) : (
              <img
                src={props.image}
                alt="profileImage"
                style={{
                  filter: "blur(6px)",
                  border: "1px solid black",
                  borderRadius: "8px",
                  width: "300px",
                }}
              />
            )}
          </div>
          <div style={{ padding: "40px" }}>
            <Typography gutterBottom variant="h4" component="div">
              {props.name}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              style={{ fontSize: "18px" }}
            >
              {props.bio}
            </Typography>
            {props.loggedIn ? (
              <Link to={`/profile/${props.singleUser}`}>
                <Button variant="contained" size="medium">
                  View Profile
                </Button>
              </Link>
            ) : (
              <Link to={`/`}>
                <Button
                  variant="contained"
                  size="medium"
                  style={{ backgroundColor: "#bcced1", color: "black" }}
                >
                  Please Login to View Profile
                </Button>
              </Link>
            )}
          </div>
        </div>
      </Grid>
      <Grid xs={3}></Grid>
    </Grid>
  );
}
