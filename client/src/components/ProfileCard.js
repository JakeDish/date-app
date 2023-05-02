import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";

export default function ProfileCard(props) {
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
          <div style={{ padding: "40px" }}>
            <img
              src={props.image}
              alt="profileImage"
              style={{ border: "1px solid black", borderRadius: "8px" }}
            />{" "}
          </div>
          <div style={{ padding: "40px" }}>
            <Typography gutterBottom variant="h4" component="div">
              {props.name}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              style={{ fontSize: "24px" }}
            >
              {props.bio}
            </Typography>
            <Button size="small">View</Button>
          </div>
        </div>
      </Grid>
      <Grid xs={3}></Grid>
    </Grid>

  );
}
