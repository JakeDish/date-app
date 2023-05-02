import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const CardContainer = { border: "1px solid red" };

export default function ProfileCard(props) {
  return (
    <div style={{ border: "1px solid gray", borderRadius:"8px", margin: "20px 0", display: "flex" }}>
      <div style={{padding: "40px" }}>
        <img src={props.image} alt="profileImage" style={{border: "1px solid black", borderRadius: "8px"}} />{" "}
      </div>
      <div style={{padding: "40px" }}>
        <Typography gutterBottom variant="h4" component="div">
          {props.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" style={{fontSize: "24px"}}>
          {props.bio}
        </Typography>
      </div>
    </div>
    // <Card sx={{ maxWidth: 345 }}>
    //   <CardMedia
    //     component="img"
    //     alt="green iguana"
    //     height="140"
    //     image={props.image}
    //   />
    //   <CardContent>
    //     <Typography gutterBottom variant="h5" component="div">
    //       {props.name}
    //     </Typography>
    //     <Typography variant="body2" color="text.secondary">
    //       {props.bio}
    //     </Typography>
    //   </CardContent>
    //   <CardActions>
    //     <Button size="small">View</Button>
    //   </CardActions>
    // </Card>
  );
}
